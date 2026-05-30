import React from 'react'

const Pricing = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Pricing and benefits</h2>
      <h3 style={styles.subheading}>Choose the plan that fits your learning pace and goals.</h3>

      <div style={styles.cardsRow}>
        <div style={{ ...styles.card, ...styles.darkCard }}>
          <div style={styles.cardPart1}>
            <span style={styles.planName}>Standard Plan</span>
            <div style={styles.priceRow}>
              <span style={styles.price}>₹249</span>
              <span style={styles.priceSuffix}>per course</span>
            </div>
          </div>

          <div style={styles.cardPart2}>
            <span style={styles.planDescription}>Basic course plan for beginners</span>
            <span style={styles.planTagline}>Start learning today</span>
          </div>

          <div style={styles.cardPart3}>
            <div style={styles.benefitItem}>
              <span style={styles.checkIcon}>✔</span>
              <span>Access to selected courses</span>
            </div>
            <div style={styles.benefitItem}>
              <span style={styles.checkIcon}>✔</span>
              <span>Master vocabulary & grammar</span>
            </div>
            <div style={styles.benefitItem}>
              <span style={styles.checkIcon}>✔</span>
              <span>Reinforce your learning with assignments</span>
            </div>
            <div style={styles.benefitItem}>
              <span style={styles.checkIcon}>✔</span>
              <span>Downloadable resources</span>
            </div>
          </div>
        </div>

        <div style={{ ...styles.card, ...styles.lightCard }}>
          <div style={styles.cardPart1}>
            <span style={{ ...styles.planName, ...styles.lightPlanName }}>Premium Plan</span>
            <div style={styles.priceRow}>
              <span style={{ ...styles.price, ...styles.lightPrice }}>₹499</span>
              <span style={{ ...styles.priceSuffix, ...styles.lightPriceSuffix }}>for extra learning</span>
            </div>
          </div>

          <div style={styles.cardPart2}>
            <span style={{ ...styles.planDescription, ...styles.lightPlanDescription }}>
              Premium course plan for advanced learners
            </span>
            <span style={{ ...styles.planTagline, ...styles.lightPlanTagline }}>
              unlock best features
            </span>
          </div>

          <div style={styles.cardPart3}>
            <div style={{ ...styles.benefitItem, ...styles.lightBenefitItem }}>
              <span style={styles.checkIcon}>✔</span>
              <span>Live 1:1 sessions with mentors</span>
            </div>
            <div style={{ ...styles.benefitItem, ...styles.lightBenefitItem }}>
              <span style={styles.checkIcon}>✔</span>
              <span>Master speaking like a native</span>
            </div>
            <div style={{ ...styles.benefitItem, ...styles.lightBenefitItem }}>
              <span style={styles.checkIcon}>✔</span>
              <span>Group sessions for improving conversation</span>
            </div>
            <div style={{ ...styles.benefitItem, ...styles.lightBenefitItem }}>
              <span style={styles.checkIcon}>✔</span>
              <span>Downloadable resources</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    fontFamily: 'Proxima Nova',
    padding: '40px 24px',
    maxWidth: '1040px',
    margin: '80px auto',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 700,
    color: '#1F2937',
    marginBottom: '12px',
    textAlign: 'center',
  },
  subheading: {
    fontSize: '18px',
    fontWeight: 400,
    color: '#475569',
    margin: '0 auto 40px',
    maxWidth: '760px',
    textAlign: 'center',
    lineHeight: 1.6,
  },
  cardsRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
  },
  card: {
    borderRadius: '24px',
    minWidth: '320px',
    flex: '1 1 320px',
    padding: '28px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 2px 24px rgba(0, 0, 0, 0.25)',
  },
  darkCard: {
    backgroundColor: '#283752',
    color: '#F4F4F5',
    gap: '28px',
  },
  lightCard: {
    backgroundColor: '#F4F6FB',
    color: '#283752',
    gap: '28px',
  },
  cardPart1: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  planName: {
    fontSize: '28px',
    fontWeight: 600,
    color: '#F4F4F5',
  },
  priceRow: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '4px',
  },
  price: {
    fontSize: '28px',
    fontWeight: 700,
    color: '#F4F4F5',
  },
  priceSuffix: {
    fontSize: '14px',
    color: '#D4D4D8',
    alignSelf: 'flex-end-center',
  },
  cardPart2: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  planDescription: {
    fontSize: '18px',
    color: '#F4F4F5',
    fontWeight: 500,
  },
  planTagline: {
    fontSize: '16px',
    color: '#D4D4D8',
  },
  cardPart3: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  benefitItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '16px',
    color: '#F4F4F5',
  },
  lightPlanName: {
    color: '#18181B',
  },
  lightPrice: {
    color: '#18181B',
  },
  lightPriceSuffix: {
    color: '#3F3F46',
  },
  lightPlanDescription: {
    color: '#18181B',
  },
  lightPlanTagline: {
    color: '#3F3F46',
  },
  lightBenefitItem: {
    color: '#18181B',
  },
  checkIcon: {
    color: '#579651',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  lightCardContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  lightTitle: {
    fontSize: '24px',
    fontWeight: 700,
    color: '#283752',
  },
  lightSubtitle: {
    fontSize: '16px',
    color: '#475569',
  },
}

export default Pricing
