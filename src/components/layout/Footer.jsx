import React from 'react'

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <ul style={styles.column}>
        <li style={styles.heading}>Contents</li>
        <li style={styles.item}><a style={styles.link} href="/home">Home</a></li>
        <li style={styles.item}><a style={styles.link} href="/courses">Courses</a></li>
        <li style={styles.item}><a style={styles.link} href="/resources">Resources</a></li>
        <li style={styles.item}><a style={styles.link} href="/certificates">Certificates</a></li>
        <li style={styles.item}><a style={styles.link} href="/demo">Book a demo session</a></li>
        <li style={styles.item}><a style={styles.link} href="/testimonials">Testimonials</a></li>
      </ul>
      <ul style={styles.column}>
        <li style={styles.heading}>Courses</li>
        <li style={styles.item}><a style={styles.link} href="/courses/telugu">Telugu</a></li>
        <li style={styles.item}><a style={styles.link} href="/courses/hindi">Hindi</a></li>
        <li style={styles.item}><a style={styles.link} href="/courses/kannada">Kannada</a></li>
        <li style={styles.item}><a style={styles.link} href="/courses/tamil">Tamil</a></li>
        <li style={styles.item}><a style={styles.link} href="/courses/english">English</a></li>
      </ul>
      <ul style={styles.column}>
        <li style={styles.heading}>Resources</li>
        <li style={styles.item}><a style={styles.link} href="/resources/blog">Blog</a></li>
        <li style={styles.item}><a style={styles.link} href="/resources/webinars">Webinars</a></li>
        <li style={styles.item}><a style={styles.link} href="/resources/ebooks">E-books</a></li>
      </ul>
      <ul style={styles.column}>
        <li style={styles.heading}>Certificates</li>
        <li style={styles.item}><span style={styles.muted}>Completed</span></li>
        <li style={styles.item}><span style={styles.muted}>In progress</span></li>
      </ul>
      <ul style={styles.column}>
        <li style={styles.heading}>Contact Us</li>
        <li style={styles.item}><span style={styles.muted}>Email us: projectbhaasha@gmail.com</span></li>
        <li style={styles.item}><span style={styles.muted}>Call or WhatsApp us: +91-9999888777</span></li>
      </ul>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: '#283752',
    color: '#F4F6FB',
    padding: '2rem 5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '0.75rem',
    flexWrap: 'wrap',
    width: '100%',
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
  column: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    flex: '1 1 130px',
    minWidth: '120px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  heading: {
    fontSize: '16px',
    fontWeight: '700',
    marginBottom: '0.75rem',
  },
  item: {
    fontSize: '14px',
    color: '#F4F6FB',
    margin: 0,
  },
  link: {
    color: '#F4F6FB',
    textDecoration: 'none',
  },
  muted: {
    color: '#B9C2D4',
  },
}
export default Footer
