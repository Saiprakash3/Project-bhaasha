import React from 'react'

const ContactUs = () => {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.card}>
        <div style={styles.introPanel}>
          <div>
            <h2 style={styles.title}>Contact Us</h2>
            <p style={styles.description}>
              Have questions about courses, mentors, or learning plans? Our team is here to help you get started.
            </p>
          </div>

          <div style={styles.infoBlock}>
            <p style={styles.infoLabel}>Phone no</p>
            <p style={styles.infoText}>+91-9999999999</p>
          </div>
          <div style={styles.infoBlock}>
            <p style={styles.infoLabel}>Email</p>
            <p style={styles.infoText}>projectbhaasha@gmail.com</p>
          </div>

          <div style={styles.socialLabel}>You can also reach us through!</div>
          <div style={styles.socialIcons}>
            <span style={styles.socialIcon}>IG</span>
            <span style={styles.socialIcon}>WA</span>
            <span style={styles.socialIcon}>FB</span>
          </div>
        </div>

        <div style={styles.formPanel}>
          <h3 style={styles.formTitle}>Have Questions?</h3>
          <label style={styles.fieldLabel} htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Your name" style={styles.input} />

          <label style={styles.fieldLabel} htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Your email" style={styles.input} />

          <label style={styles.fieldLabel} htmlFor="query">Your Query</label>
          <textarea id="query" rows="4" placeholder="Type your question" style={styles.textarea} />

          <button type="button" style={styles.button}>Send</button>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '80px 24px',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#1B2436',
  },
  card: {
    width: '100vw',
    maxWidth: '1360px',
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: '32px',
    backgroundColor: '#1B2436',
    overflow: 'hidden',
  },
  introPanel: {
    padding: '56px 48px',
    backgroundColor: '#1B2436',
    color: '#F4F4F5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '430px',
  },
  title: {
    fontSize: '38px',
    margin: 0,
    color: '#F4F4F5',
    lineHeight: 1.1,
  },
  description: {
    marginTop: '18px',
    maxWidth: '520px',
    fontSize: '16px',
    color: '#F4F4F5',
    lineHeight: 1.8,
  },
  infoBlock: {
    marginTop: '28px',
  },
  infoLabel: {
    margin: 0,
    fontSize: '14px',
    color: '#8FA2C7',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },
  infoText: {
    margin: '8px 0 0',
    fontSize: '18px',
    color: '#F4F4F5',
    fontWeight: 600,
  },
  socialLabel: {
    marginTop: '36px',
    fontSize: '14px',
    color: '#A5B0CB',
  },
  socialIcons: {
    display: 'flex',
    gap: '14px',
    marginTop: '16px',
  },
  socialIcon: {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    display: 'grid',
    placeItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.08)',
    color: '#F4F4F5',
    fontWeight: 700,
    fontSize: '12px',
  },
  formPanel: {
    padding: '46px 42px',
    backgroundColor: '#D8E2F1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  formTitle: {
    fontSize: '28px',
    margin: 0,
    color: '#1F2A45',
    marginBottom: '36px',
    textAlign: 'center',
  },
  fieldLabel: {
    fontSize: '14px',
    color: '#5C677D',
    marginBottom: '10px',
    marginTop: '16px',
  },
  input: {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '12px',
    border: '1px solid #BEC8DB',
    outline: 'none',
    fontSize: '16px',
    color: '#18181B',
    backgroundColor: '#E9EDF5',
  },
  textarea: {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '12px',
    border: '1px solid #BEC8DB',
    outline: 'none',
    fontSize: '16px',
    color: '#18181B',
    backgroundColor: '#E9EDF5',
    resize: 'vertical',
    marginTop: '8px',
  },
  button: {
    marginTop: '28px',
    width: 'fit-content',
    padding: '8px 24px',
    borderRadius: '12px',
    border: 'none',
    backgroundColor: '#18181B',
    color: '#D9D9D9',
    fontSize: '16px',
    fontWeight: 700,
    cursor: 'pointer',
  },
}

export default ContactUs
