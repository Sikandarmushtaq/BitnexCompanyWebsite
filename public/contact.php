<?php
/**
 * Contact form handler for bitnextechnologies.com (cPanel / PHP 7.4+).
 *
 * 1. Emails every inquiry to $TO_EMAIL.
 * 2. When the visitor opts in to SMS, appends a record to
 *    consent-logs/sms-consent.csv (time, name, phone, which boxes, exact
 *    consent text shown, IP, page). Keep this file: it is your proof of
 *    opt-in if Telnyx or a carrier asks.
 *
 * consent-logs/ is blocked from the web by .htaccess. Download it from
 * cPanel File Manager.
 */

header('Content-Type: application/json; charset=utf-8');

$TO_EMAIL = 'info@bitnextechnologies.com';
$BRAND    = 'Bitnex Technologies LLC';

function respond($code, $arr) {
    http_response_code($code);
    echo json_encode($arr);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Method not allowed']);
}

$data = json_decode(file_get_contents('php://input'), true);
if (!is_array($data)) {
    respond(400, ['ok' => false, 'error' => 'Invalid request']);
}

function clean($v, $max = 2000) {
    $v = is_string($v) ? trim($v) : '';
    $v = str_replace(["\r", "\0"], '', $v);
    return function_exists('mb_substr') ? mb_substr($v, 0, $max) : substr($v, 0, $max);
}

$name    = clean($data['name'] ?? '', 120);
$email   = clean($data['email'] ?? '', 160);
$phone   = clean($data['phone'] ?? '', 40);
$service = clean($data['service'] ?? '', 120);
$message = clean($data['message'] ?? '', 5000);

$c        = is_array($data['sms_consent'] ?? null) ? $data['sms_consent'] : [];
$smsCare  = !empty($c['transactional']);
$smsMkt   = !empty($c['marketing']);
$careText = clean($c['transactional_text'] ?? '', 1500);
$mktText  = clean($c['marketing_text'] ?? '', 1500);
$pageUrl  = clean($c['source_url'] ?? '', 300);

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['ok' => false, 'error' => 'Please fill in your name, a valid email and a message.']);
}
if (($smsCare || $smsMkt) && strlen(preg_replace('/\D/', '', $phone)) < 10) {
    respond(422, ['ok' => false, 'error' => 'A valid mobile number is required for text messages.']);
}

$timestamp = gmdate('Y-m-d H:i:s') . ' UTC';
$ip        = $_SERVER['REMOTE_ADDR'] ?? '';
$agent     = clean($_SERVER['HTTP_USER_AGENT'] ?? '', 300);

/* ---------- 1. SMS consent record ---------- */
$logged = false;
if ($smsCare || $smsMkt) {
    $dir = __DIR__ . '/consent-logs';
    if (!is_dir($dir)) {
        @mkdir($dir, 0750, true);
    }
    if (!file_exists($dir . '/.htaccess')) {
        @file_put_contents($dir . '/.htaccess', "Require all denied\nDeny from all\n");
    }
    $file  = $dir . '/sms-consent.csv';
    $isNew = !file_exists($file);
    $fh = @fopen($file, 'a');
    if ($fh) {
        flock($fh, LOCK_EX);
        if ($isNew) {
            fputcsv($fh, ['timestamp', 'name', 'email', 'phone', 'customer_care_opt_in', 'marketing_opt_in',
                          'customer_care_consent_text', 'marketing_consent_text', 'ip', 'user_agent', 'page_url']);
        }
        fputcsv($fh, [$timestamp, $name, $email, $phone, $smsCare ? 'yes' : 'no', $smsMkt ? 'yes' : 'no',
                      $careText, $mktText, $ip, $agent, $pageUrl]);
        flock($fh, LOCK_UN);
        fclose($fh);
        $logged = true;
    }
}

/* ---------- 2. Email the inquiry ---------- */
$host = preg_replace('/^www\./', '', $_SERVER['HTTP_HOST'] ?? 'bitnextechnologies.com');
$host = preg_replace('/[^a-z0-9.\-]/i', '', $host);

$body  = "New website inquiry for {$BRAND}\n\n";
$body .= "Name:    {$name}\nEmail:   {$email}\nPhone:   {$phone}\nService: {$service}\n\n";
$body .= "Message:\n{$message}\n\n";
$body .= "---- SMS consent ----\n";
$body .= "Customer care SMS: " . ($smsCare ? 'YES' : 'no') . "\n";
$body .= "Marketing SMS:     " . ($smsMkt ? 'YES' : 'no') . "\n";
if ($smsCare || $smsMkt) {
    $body .= "ACTION: send the opt-in confirmation text to {$phone}.\n";
}
$body .= "\nSubmitted: {$timestamp}\nIP: {$ip}\nPage: {$pageUrl}\n";

$headers  = "From: {$BRAND} Website <no-reply@{$host}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$subject = "Website inquiry" . ($service !== '' ? ": {$service}" : '') . " — {$name}";
$sent = @mail($TO_EMAIL, $subject, $body, $headers);

if ($sent || $logged) {
    respond(200, ['ok' => true]);
}
respond(500, ['ok' => false, 'error' => 'Could not send message.']);
