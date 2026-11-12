
import { createPortal } from 'react-dom'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import Icon from './Icon.jsx'
import CursorFollower from './CursorFollower.jsx'
import { services } from '../data/content.js'
import './Navbar.css'

const categories = [
  'Development & Technology',
  'Digital Marketing & Growth',
  'Creative & Visual Design',
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const { pathname } = useLocation()
  const navRef = useRef(null)

  // const isHome = pathname === '/'
  const isHome = true

  const groupedServices = useMemo(() => {
    const visibleServices = services.filter(
      (service) =>
        service.slug !== 'fix-bug-error' &&
        !service.title.toLowerCase().includes('technical support')
    )

    return categories.map((category) => ({
      title: category,
      items: visibleServices.filter(
        (service) => service.category === category
      ),
    }))
  }, [])

  // Hide the navbar when the user scrolls down.
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Close all menus when the route changes.
  useEffect(() => {
    setMobileOpen(false)
    setAboutOpen(false)
    setServicesOpen(false)
    setMobileAboutOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  // Close desktop dropdowns when clicking outside or pressing Escape.
  useEffect(() => {
    function handleOutsideClick(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setAboutOpen(false)
        setServicesOpen(false)
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setAboutOpen(false)
        setServicesOpen(false)
        setMobileOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  // Close every menu after selecting a navigation link.
  function closeAllMenus() {
    setMobileOpen(false)
    setAboutOpen(false)
    setServicesOpen(false)
    setMobileAboutOpen(false)
    setMobileServicesOpen(false)
  }

  const getNavLinkClass = ({ isActive }) =>
    `navbar-link${isActive ? ' is-active' : ''}`

  const navbarContent = (
    <>
      <header
        ref={navRef}
        className={`site-navbar ${
          mobileOpen
            ? 'is-mobile-open'
            : isHome
              ? 'is-home'
              : 'is-inner-page'
        } ${isScrolled && !mobileOpen ? 'is-hidden' : ''}`}
      >
        <nav className={`navbar-inner ${mobileOpen ? 'menu-open' : ''}`}>
          <Link
            to="/"
            aria-label="Bitnex Technologies LLC home"
            onClick={closeAllMenus}
            className="navbar-brand"
          >
            <img
              src={logo}
              alt="Bitnex Technologies LLC"
              draggable="false"
            />
          </Link>

          <ul className="navbar-desktop-links">
            <li>
              <NavLink to="/" end className={getNavLinkClass}>
                Home
              </NavLink>
            </li>

            <li className="navbar-dropdown-parent">
              <button
                type="button"
                onClick={() => {
                  setAboutOpen((value) => !value)
                  setServicesOpen(false)
                }}
                aria-expanded={aboutOpen}
                className={`navbar-trigger ${aboutOpen ? 'is-active' : ''}`}
              >
                About Us

                <svg
                  viewBox="0 0 20 20"
                  className={`navbar-chevron ${aboutOpen ? 'is-open' : ''}`}
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" />
                </svg>
              </button>

              {aboutOpen && (
                <div className="navbar-dropdown navbar-about-dropdown">
                  <div className="navbar-dropdown-card">
                    <Link
                      to="/about"
                      onClick={closeAllMenus}
                      className="navbar-about-link"
                    >
                      <span className="navbar-icon-box">
                        <Icon name="web" className="h-5 w-5" />
                      </span>

                      <span>
                        <span className="navbar-item-title">
                          About Bitnex
                        </span>
                        <span className="navbar-item-description">
                          Our company and approach
                        </span>
                      </span>
                    </Link>

                    <Link
                      to="/blog"
                      onClick={closeAllMenus}
                      className="navbar-about-link"
                    >
                      <span className="navbar-icon-box">
                        <Icon name="code" className="h-5 w-5" />
                      </span>

                      <span>
                        <span className="navbar-item-title">
                          Our Blog
                        </span>
                        <span className="navbar-item-description">
                          Ideas, insights and updates
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </li>

            <li className="navbar-dropdown-parent">
              <button
                type="button"
                onClick={() => {
                  setServicesOpen((value) => !value)
                  setAboutOpen(false)
                }}
                aria-expanded={servicesOpen}
                className={`navbar-trigger ${
                  servicesOpen ? 'is-active' : ''
                }`}
              >
                Our Services

                <svg
                  viewBox="0 0 20 20"
                  className={`navbar-chevron ${
                    servicesOpen ? 'is-open' : ''
                  }`}
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="navbar-dropdown navbar-services-dropdown">
                  <div className="navbar-services-card">
                    <div className="navbar-services-grid">
                      {groupedServices.map((group) => (
                        <div
                          key={group.title}
                          className="navbar-service-group"
                        >
                          <div className="navbar-group-heading">
                            <span className="navbar-group-dot" />
                            <h3>{group.title}</h3>
                          </div>

                          <ul>
                            {group.items.map((service) => (
                              <li key={service.slug}>
                                <Link
                                  to={`/services#${service.slug}`}
                                  onClick={closeAllMenus}
                                  className="navbar-service-link"
                                >
                                  <span className="navbar-service-icon">
                                    <Icon
                                      name={service.icon}
                                      className="h-4 w-4"
                                    />
                                  </span>

                                  <span className="navbar-service-copy">
                                    <span className="navbar-service-title">
                                      {service.title}
                                    </span>

                                    <span className="navbar-service-description">
                                      {service.desc}
                                    </span>
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="navbar-services-footer">
                      <p>
                        Thoughtful technology. Meaningful business outcomes.
                      </p>

                      <Link
                        to="/services"
                        onClick={closeAllMenus}
                        className="navbar-explore-link"
                      >
                        Explore all services
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li>
              <NavLink to="/contact" className={getNavLinkClass}>
                Contact
              </NavLink>
            </li>
          </ul>

          <Link
            to="/contact"
            onClick={closeAllMenus}
            className="navbar-connect"
          >
            Let's Connect
          </Link>

          <button
            type="button"
            className="navbar-mobile-toggle"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </nav>

        {mobileOpen && (
          <div className="navbar-mobile-panel">
            <div className="navbar-mobile-links">
              <NavLink
                to="/"
                end
                onClick={closeAllMenus}
                className={getNavLinkClass}
              >
                Home
              </NavLink>

              <div className="navbar-mobile-group">
                <button
                  type="button"
                  onClick={() => setMobileAboutOpen((value) => !value)}
                  aria-expanded={mobileAboutOpen}
                  className="navbar-mobile-trigger"
                >
                  About Us
                  <span className={mobileAboutOpen ? 'is-open' : ''}>
                    ⌄
                  </span>
                </button>

                {mobileAboutOpen && (
                  <div className="navbar-mobile-submenu">
                    <Link to="/about" onClick={closeAllMenus}>
                      About Bitnex
                    </Link>

                    <Link to="/blog" onClick={closeAllMenus}>
                      Our Blog
                    </Link>
                  </div>
                )}
              </div>

              <div className="navbar-mobile-group">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((value) => !value)}
                  aria-expanded={mobileServicesOpen}
                  className="navbar-mobile-trigger"
                >
                  Our Services
                  <span className={mobileServicesOpen ? 'is-open' : ''}>
                    ⌄
                  </span>
                </button>

                {mobileServicesOpen && (
                  <div className="navbar-mobile-services">
                    {groupedServices.map((group) => (
                      <div key={group.title}>
                        <p className="navbar-mobile-category">
                          {group.title}
                        </p>

                        <div className="navbar-mobile-service-list">
                          {group.items.map((service) => (
                            <Link
                              key={service.slug}
                              to={`/services#${service.slug}`}
                              onClick={closeAllMenus}
                            >
                              <Icon
                                name={service.icon}
                                className="h-4 w-4"
                              />
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}

                    <Link
                      to="/services"
                      onClick={closeAllMenus}
                      className="navbar-mobile-view-all"
                    >
                      View all services
                    </Link>
                  </div>
                )}
              </div>

              <NavLink
                to="/contact"
                onClick={closeAllMenus}
                className={getNavLinkClass}
              >
                Contact
              </NavLink>

              <Link
                to="/contact"
                onClick={closeAllMenus}
                className="navbar-connect navbar-connect-mobile"
              >
                Let's Connect
              </Link>
            </div>
          </div>
        )}
      </header>

      <CursorFollower />
    </>
  )

  return (
    <>
      {createPortal(navbarContent, document.body)}

      {!isHome && (
        <div
          aria-hidden="true"
          className="navbar-spacer"
        />
      )}
    </>
  )
}
