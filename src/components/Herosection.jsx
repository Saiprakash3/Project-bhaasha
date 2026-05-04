import React from 'react'

const HeroSection = () => {
  return (
    <div style={styles.page}>
      <div style={styles.left}>
        <h1 style={styles.heading}>
          Learn to speak <span style={styles.highlight}>Indian</span><br />
          Rise to lead <span style={styles.highlight}>Globally</span>
        </h1>

        <div style={styles.featuresGrid}>
          <div style={styles.featureItem}>
            <span style={styles.checkIcon}>✔</span> Learn New Languages
          </div>
          <div style={styles.featureItem}>
            <span style={styles.checkIcon}>✔</span> Track your Progress
          </div>
          <div style={styles.featureItem}>
            <span style={styles.checkIcon}>✔</span> Live 1:1 Sessions
          </div>
          <div style={styles.featureItem}>
            <span style={styles.checkIcon}>✔</span> Downloadable Audio books and valuable resources
          </div>
          <div style={styles.featureItem}>
            <span style={styles.checkIcon}>✔</span> Earn a Certificate
          </div>
        </div>

        <div style={styles.buttonsRow}>
          <button style={styles.demoButton}>Demo Session</button>
          <button style={styles.contactButton}>Contact Us</button>
        </div>
      </div>

      <div style={styles.right}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/DofC5xP9GMI"
          title="Project Bhaasha"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={styles.video}
        />
      </div>
    </div>
  )
}

const styles = {
  page: {
    fontFamily: 'Proxima Nova',
    padding: '40px 80px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '40px',
  },
  left: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#1a1a1a',
    lineHeight: '1.3',
    margin: 0,
  },
  highlight: {
    color: '#579651',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    rowGap: '10px',
    columnGap: '20px',
    fontSize: '18px',
    color: '#262222',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  checkIcon: {
    color: '#579651',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  buttonsRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: '12px',
    marginTop: '8px',
  },
  demoButton: {
    backgroundColor: '#DBB444',
    color: '#262222',
    border: 'none',
    borderRadius: '14px',
    padding: '10px 24px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  contactButton: {
    backgroundColor: 'transparent',
    color: '#262222',
    border: '2px solid #DBB444',
    borderRadius: '14px',
    padding: '10px 24px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  right: {
    width: '430px',
    height: '290px',
    borderRadius: '8px',
    overflow: 'hidden',
    flexShrink: 0,
  },
  video: {
    borderRadius: '8px',
  },
}

export default HeroSection
