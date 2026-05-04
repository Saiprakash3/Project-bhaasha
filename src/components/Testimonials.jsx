import React from 'react'

const Testimonials = () => {
  return (
    <div style={styles.page}>
        <h2 style={styles.h2}>People who were benefited from our services</h2>
        <div style={styles.cardsContainer}>
           <div style={styles.card}>
             <div style={styles.cardTitle}>Aman Singh, <span style={styles.cardSubtitle}>MBA Aspirant</span></div>
             <p style={styles.cardText}>I always had difficulty learning Kannada, but Project Bhaasha made it very easy. With daily practice, my speaking skills have improved a lot.</p>
           </div>
           <div style={styles.card}>
             <div style={styles.cardTitle}>Sneha Joshi, <span style={styles.cardSubtitle}>Job Seeker</span></div>
             <p style={styles.cardText}>From grammar to fluent speaking, this platform helped me build confidence for interviews. The audio lessons and speaking challenges were very helpful!</p>
           </div>
           <div style={styles.card}>
             <div style={styles.cardTitle}>Haritha Reddy,<span style={styles.cardSubtitle}>BTech Student</span></div>
             <p style={styles.cardText}>I really liked this platform. I was able to learn Tamil from basics to advanced, and it increased my confidence in speaking. The simple lessons made it easy to understand."</p>
           </div>
        </div>
    </div>
  )
}

const styles = {
    page: {
      fontFamily: 'Proxima Nova',
        margin: 0,
        padding: '0 80px',
    },
    h2: {
        fontSize: '36px',
        fontWeight: 'semibold',
        color: '#262222',
        marginBottom: '20px',
        textAlign: 'center',
    },
    cardsContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    card: {
        backgroundColor: '#F5F9F4',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        margin: '20px',
        width: '368px',
        height: '244px',
        display: 'flex',
        flexDirection: 'column',
    },
    cardTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '49px',
        color: '#262222',
    },
    cardSubtitle: {
        fontSize: '14px',
        color: '#262222',
        marginBottom: '10px',
        fontWeight: 'normal',
        fontStyle: 'italic',
    },
    cardText: {
        fontSize: '16px',
        color: '#262222',
    },
}

export default Testimonials
