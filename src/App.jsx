
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Footer from './components/Footer.jsx'
import Streaks from './components/Streaks.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Services from './pages/Services.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Terms from './pages/Terms.jsx'
import SmsTerms from './pages/SmsTerms.jsx'
import NotFound from './pages/NotFound.jsx'
import logolight from "./assets/logo-light.png"

// Scroll to the top whenever the route changes.
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash)

      if (element) {
        element.scrollIntoView()
        return
      }
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

// Display a premium loading screen during the initial website load.
function LoadingScreen() {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#050807]"
      role="status"
      aria-label="Loading Bitnex Technologies"
      aria-busy="true"
    >
      <Streaks
        count={145}
        speed={14}
        length={135}
        colors={['#ffffff', '#55D6A5', '#B5FFE0']}
        opacity={0.85}
        glow={24}
        thickness={1.4}
        direction="right"
        interactive={false}
      />

      <div className="relative z-10 flex w-full flex-col items-center px-6">
        <img
          src={logolight}
          alt="Bitnex Technologies"
          className="mb-9 w-[230px] select-none object-contain sm:w-[280px]"
          draggable="false"
        />

        <div className="mb-5 flex flex-col items-center gap-3">
          <p className="text-[10px] font-medium uppercase tracking-[5px] text-white/65 sm:text-xs">
            Initializing Experience
          </p>

          <div className="flex items-center gap-2">
            <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-300" />
            <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-300 [animation-delay:200ms]" />
            <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-300 [animation-delay:400ms]" />
          </div>
        </div>

        <div className="loader-track relative h-[2px] w-44 overflow-hidden rounded-full bg-white/10 sm:w-52">
          <div className="loader-progress absolute inset-y-0 w-1/3 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-200 to-white shadow-[0_0_12px_rgba(85,214,165,0.8)]" />
        </div>

        <p className="mt-4 text-[9px] tracking-[3px] text-white/30">
          BITNEX TECHNOLOGIES
        </p>
      </div>

      <style>{`
        .loader-progress {
          animation: bitnex-loader 1.35s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }

        @keyframes bitnex-loader {
          0% {
            left: -35%;
          }

          100% {
            left: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .loader-progress {
            animation: none;
            left: 33%;
          }
        }
      `}</style>
    </div>
  )
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  // Hide the initial loader after the page is ready.
  useEffect(() => {
    const startTime = performance.now()
    const minimumDisplayTime = 900

    let hideTimer
    let fallbackTimer

    function hideWhenReady() {
      window.clearTimeout(fallbackTimer)

      const elapsed = performance.now() - startTime
      const remaining = Math.max(0, minimumDisplayTime - elapsed)

      hideTimer = window.setTimeout(() => {
        setIsLoading(false)
      }, remaining)
    }

    if (document.readyState === 'complete') {
      hideWhenReady()
    } else {
      window.addEventListener('load', hideWhenReady, {
        once: true,
      })

      fallbackTimer = window.setTimeout(() => {
        setIsLoading(false)
      }, 1800)
    }

    return () => {
      window.clearTimeout(hideTimer)
      window.clearTimeout(fallbackTimer)
      window.removeEventListener('load', hideWhenReady)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      {isLoading && <LoadingScreen />}

      <ScrollToTop />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/sms-terms" element={<SmsTerms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
