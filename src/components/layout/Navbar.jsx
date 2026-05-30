import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null)
  const [hoveredButton, setHoveredButton] = useState(null)
  const [pressedButton, setPressedButton] = useState(null)
  const location = useLocation()

  const navLinks = [
    { label: 'Home', to: '/', key: 'home' },
    { label: 'Courses', to: '/courses', key: 'courses' },
    { label: 'Resources', to: '/resources', key: 'resources' },
    { label: 'Certificates', to: '/certificates', key: 'certificates' },
    { label: 'Contact Us', to: '#contact', key: 'contact' },
  ]

  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        {/* Part 1: Logo */}
        <div style={styles.part1}>
          <span style={styles.logo}>Project Bhaasha</span>
        </div>

        {/* Part 2: Navigation Links */}
        <div style={styles.part2}>
          {navLinks.map(({ label, to, key }) => {
            let isActive = false
            if (to === '#contact') {
              isActive = location.hash === '#contact'
            } else if (to === '/') {
              isActive = location.pathname === '/'
            } else {
              isActive = location.pathname.startsWith(to)
            }

            const isHovered = hoveredLink === key

            return (
              <Link
                key={key}
                to={to}
                style={styles.a}
                onMouseEnter={() => setHoveredLink(key)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <li style={{
                  ...styles.li,
                  backgroundColor: isActive ? '#1B2436' : isHovered ? '#1B2436' : 'transparent',
                  color: isActive ? '#D9D9D9' : isHovered ? '#D9D9D9' : '#27272A',
                  fontWeight: isActive ? '600' : '400',
                }}>
                  {label}
                </li>
              </Link>
            )
          })}
        </div>

        {/* Part 3: Auth Buttons */}
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
    gap: '0',
    listStyle: 'none',
    alignItems: 'center',
    margin: 0,
    padding: '0',
    backgroundColor: '#F4F6FB',
    borderRadius: '24px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.25)',
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
  ul: {
    display: 'flex',
    flexDirection: 'row',
    gap: '28px',
    listStyle: 'none',
    alignItems: 'center',
    margin: 0,
    padding: 0,
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
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    borderRadius: '16px',
    transition: 'all 0.2s ease',
  },
  a: {
    textDecoration: 'none',
    underline: 'none',
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
  }
}

export default Navbar
