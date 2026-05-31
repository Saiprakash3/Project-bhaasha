import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null)
  const [hoveredButton, setHoveredButton] = useState(null)
  const [pressedButton, setPressedButton] = useState(null)
  const [indicatorStyle, setIndicatorStyle] = useState({})
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)
  const location = useLocation()
  const navRef = useRef(null)
  const linkRefs = useRef({})

  const navLinks = [
    { label: 'Home', to: '/', key: 'home' },
    { label: 'Courses', to: '/courses', key: 'courses' },
    { label: 'Resources', to: '/resources', key: 'resources' },
    { label: 'Certificates', to: '/certificates', key: 'certificates' },
    { label: 'Contact Us', to: '/#contact', key: 'contact' },
  ]

  const getActiveKey = () => {
    for (const { to, key } of navLinks) {
      if (to === '/#contact' && location.hash === '#contact') return key
      if (to === '/' && location.pathname === '/') return key
      if (to !== '/' && to !== '#contact' && location.pathname.startsWith(to)) return key
    }
    return null
  }

  const activeKey = getActiveKey()

  useEffect(() => {
    const targetKey = hoveredLink || activeKey
    const el = linkRefs.current[targetKey]
    const nav = navRef.current
    if (el && nav) {
      const navRect = nav.getBoundingClientRect()
      const elRect = el.getBoundingClientRect()
      setIndicatorStyle({
        width: elRect.width,
        transform: `translateX(${elRect.left - navRect.left}px)`,
        opacity: 1,
      })
    } else {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }))
    }
  }, [hoveredLink, activeKey, location])

  useEffect(() => {
    if (location.hash === '#contact') {
      const el = document.getElementById('contact')
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY < lastScrollY.current || currentY < 10) {
        setVisible(true)
      } else {
        setVisible(false)
      }
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{
      ...styles.page,
      position: 'sticky',
      top: 0,
      zIndex: 100,
      transform: visible ? 'translateY(0)' : 'translateY(-110%)',
      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
      <nav style={styles.nav}>
        <div style={styles.part1}>
          <span style={styles.logo}>Project Bhaasha</span>
        </div>

        <div style={styles.part2} ref={navRef}>
          <div style={{ ...styles.indicator, ...indicatorStyle }} />

          {navLinks.map(({ label, to, key }) => {
            const isActive = activeKey === key
            const isHovered = hoveredLink === key

            return (
              <Link
                key={key}
                to={to}
                style={styles.a}
                ref={(el) => { linkRefs.current[key] = el }}
                onMouseEnter={() => setHoveredLink(key)}
                onMouseLeave={() => setHoveredLink(null)}
                onClick={() => {
                  if (to !== '/#contact') {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                }}
              >
                <li style={{
                  ...styles.li,
                  color: isActive || isHovered ? '#D9D9D9' : '#27272A',
                  fontWeight: isActive ? '600' : '400',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  {label}
                </li>
              </Link>
            )
          })}
        </div>

        <div style={styles.part3}>
          <button
            style={{
              ...styles.primaryButton,
              backgroundColor: pressedButton === 'signup' ? '#86451A' : hoveredButton === 'signup' ? '#DD7B02' : styles.primaryButton.backgroundColor,
              color: pressedButton === 'signup' ? '#D9D9D9' : hoveredButton === 'signup' ? '#27272A' : styles.primaryButton.color,
              border: pressedButton === 'signup' || hoveredButton === 'signup' ? 'none' : styles.primaryButton.border,
            }}
            onMouseEnter={() => setHoveredButton('signup')}
            onMouseLeave={() => { setHoveredButton(null); setPressedButton(null) }}
            onMouseDown={() => setPressedButton('signup')}
            onMouseUp={() => setPressedButton(null)}
          >
            Sign up
          </button>

          <button
            style={{
              ...styles.secondaryButton,
              backgroundColor: pressedButton === 'login' ? '#86451A' : 'transparent',
              color: pressedButton === 'login' ? '#D9D9D9' : hoveredButton === 'login' ? '#27272A' : styles.secondaryButton.color,
              border: pressedButton === 'login' ? 'none' : hoveredButton === 'login' ? '2px solid #DD7B02' : styles.secondaryButton.border,
            }}
            onMouseEnter={() => setHoveredButton('login')}
            onMouseLeave={() => { setHoveredButton(null); setPressedButton(null) }}
            onMouseDown={() => setPressedButton('login')}
            onMouseUp={() => setPressedButton(null)}
          >
            Login
          </button>
        </div>
      </nav>
    </div>
  )
}

const styles = {
  page: {
    fontFamily: 'Proxima Nova',
    backgroundColor: '#E9EDF5',
    marginBottom: '20px',
    padding: 0,
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    margin: '0 10px',
  },
  part1: {
    display: 'flex',
    alignItems: 'center',
  },
  part2: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    alignItems: 'center',
    margin: 0,
    padding: '6px',
    backgroundColor: '#F4F6FB',
    borderRadius: '24px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.25)',
    position: 'relative',
  },
  indicator: {
    position: 'absolute',
    top: '6px',
    left: 0,
    height: 'calc(100% - 12px)',
    backgroundColor: '#1B2436',
    borderRadius: '16px',
    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease',
    pointerEvents: 'none',
    zIndex: 0,
  },
  part3: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  },
  logo: {
    color: '#304974',
    fontSize: '28px',
    fontWeight: 'bold',
  },
  li: {
    color: '#27272A',
    cursor: 'pointer',
    fontSize: '16px',
    listStyle: 'none',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '12px',
    paddingBottom: '12px',
    fontWeight: '400',
    borderRadius: '16px',
    transition: 'color 0.2s ease',
  },
  a: {
    textDecoration: 'none',
  },
  primaryButton: {
    padding: '10px 16px',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '16px',
    border: 'none',
    cursor: 'pointer',
    color: '#27272A',
    backgroundColor: '#DBB444',
  },
  secondaryButton: {
    padding: '10px 16px',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '16px',
    border: '2px solid #DBB444',
    cursor: 'pointer',
    color: '#27272A',
    backgroundColor: 'transparent',
  },
}

export default Navbar