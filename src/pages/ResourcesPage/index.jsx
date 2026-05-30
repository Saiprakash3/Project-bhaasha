import React from 'react'

const ResourcesPage = () => {
  return (
    <section style={styles.page}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Resources</h1>
        <p style={styles.description}>
          This page is under construction. We will add learning resources, study materials, and helpful links here soon.
        </p>
      </div>
    </section>
  )
}

const styles = {
  page: {
    padding: '80px 24px',
    maxWidth: '1140px',
    margin: '0 auto',
  },
  content: {
    backgroundColor: '#FFFFFF',
    borderRadius: '24px',
    boxShadow: '0 24px 80px rgba(15, 23, 42, 0.08)',
    padding: '48px',
  },
  heading: {
    fontSize: '40px',
    margin: 0,
    color: '#1F2937',
  },
  description: {
    marginTop: '18px',
    fontSize: '18px',
    lineHeight: 1.8,
    color: '#475569',
  },
}

export default ResourcesPage
