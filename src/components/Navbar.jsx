import React from 'react'

const Navbar = () => {
  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <span style={styles.logo}>Project Bhaasha</span>
        <ul style={styles.ul}>
          <a href="#home" style={styles.a}><li style={styles.li}>Home</li></a>
          <a href="#courses" style={styles.a}><li style={styles.li}>Courses</li></a>
          <a href="#resources" style={styles.a}><li style={styles.li}>Resources</li></a>
          <a href="#certificates" style={styles.a}><li style={styles.li}>Certificates</li></a>
          <a href="#contact" style={styles.a}><li style={styles.li}>Contact Us</li></a>
          <button style={styles.primaryButton}>Sign up</button>
          <button style={styles.secondaryButton}>Login</button>
        </ul>
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
    color: '#676767',
    cursor: 'pointer',
    fontSize: '20px',
  },
  a: {
    textDecoration: 'none',
    underline: 'none',
  },
  primaryButton: {
    marginLeft: '1rem',
    padding: '12px 18px',
    fontSize: '16px',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    color: '#262222',
    backgroundColor: '#DBB444',
  },
  secondaryButton: {
    marginLeft: '1rem',
    padding: '12px 18px',
    fontSize: '16px',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    color: '#262222',
    border: '2px solid #DBB444',
  }
}

export default Navbar
