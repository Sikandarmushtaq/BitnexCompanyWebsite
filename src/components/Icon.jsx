
const paths = {
  web: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
      <path d="m9 14 2 2 4-4" />
    </>
  ),

  code: (
    <>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
    </>
  ),

  app: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <path d="M11 18h2M10 5h4" />
    </>
  ),

  seo: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-4.5-4.5M8.5 12.5l2-2 1.5 1.5 2-2.5" />
    </>
  ),

  smm: (
    <>
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="m8.2 10.8 7.6-4.5M8.2 13.2l7.6 4.5" />
    </>
  ),

  design: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18c1 0 1.5-.8 1.5-1.6 0-1.2-1-1.4-1-2.4 0-.8.7-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.2-4-7.5-9-7.5Z" />
      <circle cx="7.5" cy="11" r="1" />
      <circle cx="10" cy="7" r="1" />
      <circle cx="15" cy="7.5" r="1" />
    </>
  ),

  bug: (
    <>
      <rect x="7" y="7" width="10" height="13" rx="5" />
      <path d="M12 11v9M9 4l1.5 3M15 4l-1.5 3M3 13h4M17 13h4M4 8l3 2M20 8l-3 2M4 19l3-2M20 19l-3-2" />
    </>
  ),

  ai: (
    <>
      <rect x="4" y="7" width="16" height="13" rx="3" />
      <path d="M9 7V4h6v3M9 13h.01M15 13h.01M9 17h6M2 12h2M20 12h2M12 2v2" />
      <path d="m19 3 .6 1.4L21 5l-1.4.6L19 7l-.6-1.4L17 5l1.4-.6L19 3Z" />
    </>
  ),

  saas: (
    <>
      <path d="M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 9a4.5 4.5 0 0 0 1 9Z" />
      <path d="M9 13h6M12 10v6" />
    </>
  ),

  cube: (
    <>
      <path d="m12 2.8 8 4.5v9.4l-8 4.5-8-4.5V7.3l8-4.5Z" />
      <path d="m4.5 7.5 7.5 4.3 7.5-4.3M12 11.8v9" />
      <path d="m8 5 8 4.5" />
    </>
  ),

  ads: (
    <>
      <path d="M4 11v2a2 2 0 0 0 2 2h2l8 4V5l-8 4H6a2 2 0 0 0-2 2Z" />
      <path d="m8 15 2 5M18 9l3-2M18 15l3 2" />
    </>
  ),

  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
      <path d="M16 3h5" />
    </>
  ),

  landing: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 8h18M7 5.5h.01M10 5.5h.01M8 13h8M8 16h5" />
    </>
  ),

  video: (
    <>
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="m16 10 5-3v10l-5-3" />
      <path d="m8 10 4 2-4 2v-4Z" />
    </>
  ),

  motion: (
    <>
      <path d="M3 12h4l3-8 4 16 3-8h4" />
      <path d="M3 5h3M18 19h3" />
    </>
  ),

  phone: (
    <>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </>
  ),

  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),

  alert: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6M12 16.5h.01" />
    </>
  ),
}

export default function Icon({ name, className = 'h-6 w-6' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] || paths.alert}
    </svg>
  )
}
