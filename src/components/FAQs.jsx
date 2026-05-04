import React from 'react'

const FAQs = () => {
  return (
    <div style={styles.page}>
        <h2 style={styles.h2}>Frequently Asked Questions</h2>
        <div style={styles.faqContainer}>
            <div style={styles.faqItem}>
                <h3 style={styles.faqQuestion}>
                    <span>What languages do you offer courses in?</span>
                    <span className="material-symbols-outlined" style={styles.arrowIcon}>keyboard_arrow_down</span>
                </h3>
            </div>
            <div style={styles.faqItem}>
                <h3 style={styles.faqQuestion}>
                    <span>How do I sign up for a course?</span>
                    <span className="material-symbols-outlined" style={styles.arrowIcon}>keyboard_arrow_down</span>
                </h3>
            </div>
            <div style={styles.faqItem}>
                <h3 style={styles.faqQuestion}>
                    <span>Do you offer any free resources?</span>
                    <span className="material-symbols-outlined" style={styles.arrowIcon}>keyboard_arrow_down</span>
                </h3>
            </div>
            <div style={styles.faqItem}>
                <h3 style={styles.faqQuestion}>
                    <span>Can I get a certificate after completing a course?</span>
                    <span className="material-symbols-outlined" style={styles.arrowIcon}>keyboard_arrow_down</span>
                </h3>
            </div>
        </div>
    </div>
  )
}

const styles = {
    page: {
        margin: '0 80px',
        marginBottom: '80px',
    },
    h2: {
        fontSize: '36px',
        fontWeight: 'semibold',
        color: '#262222',
        marginBottom: '40px',
        textAlign: 'center',
    },
    faqContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#DDEEDB',
        borderRadius: '8px',
    },
    faqItem: {
        borderRadius: '8px',
        padding: '10px',
        margin: '0 16px',
    },
    faqQuestion: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '18px',
        fontWeight: '400',
        marginBottom: '0',
        color: '#262222',
    },
    arrowIcon: {
        fontSize: '24px',
        color: '#262222',
    },
    faqAnswer: {
        fontSize: '16px',
        color: '#262222',
    },
}

export default FAQs
