import React from 'react'

const Languages = () => {
  return (
    <div style={styles.page}>
      <h2 style={styles.h2}>Languages you can learn</h2>
      <div style={styles.buttonsContainer}>
        <button style={styles.button}>Telugu nerchuko</button>
        <button style={styles.button}>English Learning</button>
        <button style={styles.button}>Tamil Karupom</button>
        <button style={styles.button}>Hindi Sikhao</button>
        <button style={styles.button}>Kannada Kalike</button>
        <button style={styles.button}>Malayalam padikkuka</button>
      </div>
    </div>
  )
}

const styles = {
  page: {
    fontFamily: 'Proxima Nova',
    backgroundColor: '#CFD8E8',
    padding: '12px 80px',
    paddingBottom: '60px',
  },
  h2: {
    fontSize: '36px',
    fontWeight: 'semibold',
    color: '#262222',
    textAlign: 'center',
    marginBottom: '48px',
  },
  buttonsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, auto)',
    gap: '24px',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#283752',
    color: '#E9EDF5',
    border: 'none',
    borderRadius: '999px',
    padding: '10px 24px',
    fontSize: '22px',
    fontWeight: '500',
    cursor: 'pointer',
  },
}

export default Languages