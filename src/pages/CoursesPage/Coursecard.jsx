import React, { useState } from 'react'

const Coursecard = ({ course }) => {
  const [watchHovered, setWatchHovered] = useState(false)
  const [viewHovered, setViewHovered] = useState(false)

  return (
    <div style={styles.card}>
      {/* Thumbnail */}
      <div style={styles.imageWrapper}>
        <img src={course.image} alt={course.title} style={styles.image} />
      </div>

      {/* Tags */}
      <div style={styles.tags}>
        <span style={styles.tag}>{course.language}</span>
        <span style={styles.tag}>{course.experience}</span>
      </div>

      {/* Title */}
      <h2 style={styles.title}>{course.title}</h2>

      {/* Description */}
      <ul style={styles.descList}>
        <li style={styles.descItem}>
          {course.description}
        </li>
      </ul>

      {/* Price & Buttons */}
      <div style={styles.footer}>
        <span style={styles.price}>{course.price}</span>
        <div style={styles.buttons}>
          <button
            style={{
              ...styles.watchBtn,
              backgroundColor: watchHovered ? '#2c3a52' : '#1B2436',
            }}
            onMouseEnter={() => setWatchHovered(true)}
            onMouseLeave={() => setWatchHovered(false)}
          >
            Watch demo
          </button>
          <button
            style={{
              ...styles.viewBtn,
              backgroundColor: viewHovered ? '#c9a030' : '#DBB444',
            }}
            onMouseEnter={() => setViewHovered(true)}
            onMouseLeave={() => setViewHovered(false)}
          >
            View Course
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  card: {
    width: '100%',
    maxWidth: '420px',
    borderRadius: '20px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 8px 32px rgba(25, 31, 65, 0.10)',
    overflow: 'hidden',
    fontFamily: 'Proxima Nova, sans-serif',
    display: 'flex',
    flexDirection: 'column',
  },
  imageWrapper: {
    width: '100%',
    aspectRatio: '16/9',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  tags: {
    display: 'flex',
    gap: '10px',
    padding: '16px 18px 0',
    flexWrap: 'wrap',
  },
  tag: {
    padding: '6px 14px',
    borderRadius: '999px',
    backgroundColor: '#F4F6FB',
    border: '1px solid rgba(39, 39, 42, 0.14)',
    fontSize: '13px',
    fontWeight: '500',
    color: '#27272A',
  },
  title: {
    margin: '12px 18px 8px',
    fontSize: '18px',
    fontWeight: '700',
    color: '#1B2436',
    lineHeight: '1.35',
  },
  descList: {
    margin: '0 18px 16px 28px',
    padding: 0,
  },
  descItem: {
    fontSize: '14px',
    color: '#52525B',
    lineHeight: '1.6',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 18px 20px',
    gap: '10px',
    flexWrap: 'wrap',
  },
  price: {
    fontSize: '26px',
    fontWeight: '800',
    color: '#1B2436',
  },
  buttons: {
    display: 'flex',
    gap: '10px',
  },
  watchBtn: {
    padding: '10px 18px',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    color: '#F4F6FB',
    backgroundColor: '#1B2436',
    transition: 'background-color 0.2s ease',
  },
  viewBtn: {
    padding: '10px 18px',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    color: '#27272A',
    backgroundColor: '#DBB444',
    transition: 'background-color 0.2s ease',
  },
}

export default Coursecard