import React from 'react'
import testimonialImg from '../../assets/testimonial.avif'

const Testimonials = () => {
  return (
    <div style={styles.page}>
      <h2 style={styles.h2}>People who were benefited from our services</h2>
      <h3 style={styles.subheading}>Hear from learners who grew confident with our language coaching.</h3>
      <div style={styles.cardsContainer}>
        <div style={styles.card}>
          <div style={styles.cardPart1}>
            <div style={styles.quoteIcon}>"</div>
            <img src={testimonialImg} alt="Aman Singh" style={styles.profileImg} />
            <div style={styles.userDetails}>
              <span style={styles.userName}>Aman Singh</span>, <span style={styles.userTitle}>MBA Aspirant Hyderabad</span>
            </div>
          </div>
          <div style={styles.cardPart2}>
            <p style={styles.cardText}>I always had difficulty learning Kannada, but Project Bhaasha made it very easy. With daily practice, my speaking skills have improved a lot.</p>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardPart1}>
            <div style={styles.quoteIcon}>"</div>
            <img src={testimonialImg} alt="Sneha Joshi" style={styles.profileImg} />
            <div style={styles.userDetails}>
              <span style={styles.userName}>Sneha Joshi</span>, <span style={styles.userTitle}>Job Seeker</span>
            </div>
          </div>
          <div style={styles.cardPart2}>
            <p style={styles.cardText}>From grammar to fluent speaking, this platform helped me build confidence for interviews. The audio lessons and speaking challenges were very helpful!</p>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardPart1}>
            <div style={styles.quoteIcon}>"</div>
            <img src={testimonialImg} alt="Haritha Reddy" style={styles.profileImg} />
            <div style={styles.userDetails}>
              <span style={styles.userName}>Haritha Reddy</span>, <span style={styles.userTitle}>BTech Student</span>
            </div>
          </div>
          <div style={styles.cardPart2}>
            <p style={styles.cardText}>I really liked this platform. I was able to learn Tamil from basics to advanced, and it increased my confidence in speaking. The simple lessons made it easy to understand.</p>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardPart1}>
            <div style={styles.quoteIcon}>"</div>
            <img src={testimonialImg} alt="Rohan Menon" style={styles.profileImg} />
            <div style={styles.userDetails}>
              <span style={styles.userName}>Rohan Menon</span>, <span style={styles.userTitle}>Language Learner</span>
            </div>
          </div>
          <div style={styles.cardPart2}>
            <p style={styles.cardText}>The guided lessons helped me understand sentence structure quickly. My speaking confidence improved faster than I expected.</p>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardPart1}>
            <div style={styles.quoteIcon}>"</div>
            <img src={testimonialImg} alt="Priya Kumar" style={styles.profileImg} />
            <div style={styles.userDetails}>
              <span style={styles.userName}>Priya Kumar</span>, <span style={styles.userTitle}>Working Professional</span>
            </div>
          </div>
          <div style={styles.cardPart2}>
            <p style={styles.cardText}>I loved the bite-sized practice sessions. They fit perfectly into my schedule and made progress feel effortless.</p>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardPart1}>
            <div style={styles.quoteIcon}>"</div>
            <img src={testimonialImg} alt="Naveen Patel" style={styles.profileImg} />
            <div style={styles.userDetails}>
              <span style={styles.userName}>Naveen Patel</span>, <span style={styles.userTitle}>College Student</span>
            </div>
          </div>
          <div style={styles.cardPart2}>
            <p style={styles.cardText}>The interactive exercises are really engaging. My vocabulary and pronunciation have both improved a lot.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
    page: {
      fontFamily: 'Proxima Nova',
        margin: '80px auto',
        padding: '0 24px',
        maxWidth: '1140px',
        width: '100%',
    },
    h2: {
        fontSize: '36px',
        fontWeight: 700,
        color: '#262222',
        marginBottom: '12px',
        textAlign: 'center',
    },
    subheading: {
        fontSize: '18px',
        fontWeight: 400,
        color: '#5B667A',
        margin: '0 auto 40px',
        maxWidth: '780px',
        textAlign: 'center',
        lineHeight: 1.6,
    },
    cardsContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(320px, 1fr))',
        gap: '56px',
        justifyItems: 'center',
        alignItems: 'start',
        margin: '0 auto',
        maxWidth: '1220px',
        width: '100%',
    },
    card: {
        backgroundColor: '#F5F9F4',
        borderRadius: '16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '24px 16px',
        margin: 0,
        width: '100%',
        maxWidth: '368px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        letterSpacing: '1%',
        position: 'relative',
    },
    cardPart1: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        padding: 0,
    },
    quoteIcon: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        backgroundColor: '#E9EDF5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#27272A',
        fontSize: '18px',
        fontWeight: '700',
    },
    profileImg: {
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        objectFit: 'cover',
    },
    userDetails: {
        textAlign: 'center',
        fontSize: '18px',
        width : '260px',
        height: '49px',
        lineHeight: '1',
    },
    userName: {
        fontWeight: '600',
        fontStyle: 'normal',
    },
    userTitle: {
        fontWeight: '400',
        fontStyle: 'italic',
    },
    cardPart2: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
    },
    cardText: {
        fontSize: '16px',
        color: '#27272A',
        margin: 0,
    },
}

export default Testimonials
