import React, { useState } from 'react'

const faqData = [
  {
    question: 'What languages do you offer courses in?',
    answer:
      'We offer courses in multiple languages including English, Spanish, French, German, and more. New language tracks are added regularly to support a wide range of learners.',
  },
  {
    question: 'How do I sign up for a course?',
    answer:
      'Signing up is easy — choose your desired course, create an account, and complete the enrollment steps. You can start learning immediately after registration.',
  },
  {
    question: 'Do you offer any free resources?',
    answer:
      'Yes, we provide free introductory lessons, practice worksheets, and language learning tips to help you begin before committing to a full course.',
  },
  {
    question: 'Can I get a certificate after completing a course?',
    answer:
      'Absolutely. Upon successful completion of a course, you can receive a certificate to showcase your progress and language achievement.',
  },
]

const cardBackgrounds = ['#F4F6FB', '#DDEEDB', '#F4F6FB', '#DDEEDB']

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(faqData.length - 1)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div style={styles.page}>
      <h2 style={styles.h2}>Frequently Asked Questions</h2>
      <h3 style={styles.subheading}>Everything you need to know before you begin your learning journey.</h3>
      <div style={styles.faqContainer}>
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index
          const inset = (faqData.length - 1 - index) * 12
          return (
            <div
              key={faq.question}
              style={{
                ...styles.faqItem,
                backgroundColor: cardBackgrounds[index % cardBackgrounds.length],
                marginLeft: inset,
                marginRight: inset,
                borderBottomLeftRadius: isOpen ? 18 : 0,
                borderBottomRightRadius: isOpen ? 18 : 0,
              }}
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                style={styles.questionButton}
              >
                <span style={styles.faqQuestion}>{faq.question}</span>
                <span
                  className="material-symbols-outlined"
                  style={{
                    ...styles.arrowIcon,
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  keyboard_arrow_down
                </span>
              </button>
              <div
                style={{
                  ...styles.answerWrapper,
                  maxHeight: isOpen ? '260px' : '0',
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <p style={styles.faqAnswer}>{faq.answer}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const styles = {
  page: {
    fontFamily: 'Proxima Nova',
    margin: '80px 24px',
    paddingTop: '20px',
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
    maxWidth: '760px',
    textAlign: 'center',
    lineHeight: 1.6,
  },
  faqContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
    maxWidth: '1040px',
    margin: '0 auto',
  },
  faqItem: {
    borderRadius: '18px',
    padding: '24px 32px',
    boxShadow: '0 14px 35px rgba(54, 73, 102, 0.08)',
    transition: 'transform 0.25s ease',
  },
  questionButton: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    border: 'none',
    background: 'transparent',
    padding: 0,
    cursor: 'pointer',
    textAlign: 'left',
  },
  faqQuestion: {
    display: 'inline-block',
    fontSize: '22px',
    fontWeight: 600,
    color: '#27272A',
    letterSpacing: '0.1px',
    maxWidth: 'calc(100% - 48px)',
  },
  arrowIcon: {
    fontSize: '32px',
    color: '#27272A',
    transition: 'transform 0.3s ease',
  },
  answerWrapper: {
    overflow: 'hidden',
    transition: 'max-height 0.35s ease, opacity 0.35s ease',
  },
  faqAnswer: {
    fontSize: '18px',
    fontWeight: 400,
    color: '#27272A',
    lineHeight: 1.7,
    letterSpacing: '0.1px',
    marginTop: '18px',
  },
}

export default FAQs
