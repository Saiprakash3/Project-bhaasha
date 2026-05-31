import React from 'react'
import mentorImage from '../../assets/img-2.png'

const Mentorcard = () => {
  return (
    <div>
      <div className='mentor-card' style={styles.mentorCard}>
        <h2 style={styles.h2}>Meet your mentors</h2>
        <div className='mentor-content' style={styles.mentorContent}>
            <img className='mentor-image' src={mentorImage} alt='Mentor' />
            <div className='mentor-info' style={styles.mentorInfo}>
                <h3>Shriraksha Gudadari - <span style={{ fontWeight: '400' }}>Kannada Language Trainer</span></h3>
                <ul className="mentor-list">
                    <li className="mentor-list-item"><span className="material-symbols-outlined">✔</span>Learn Kannada alphabets & authentic pronunciation with me </li>
                    <li className="mentor-list-item"><span className="material-symbols-outlined">✔</span>Vocabulary games for immersive learning</li>
                    <li className="mentor-list-item"><span className="material-symbols-outlined">✔</span> Weekend practice circles with community support</li>
                    <li className="mentor-list-item"><span className="material-symbols-outlined">✔</span> Emphasis on spoken fluency & real-life usage.</li>
                </ul>
                <button style={styles.bookButton}>Book session</button>
            </div>
        </div>
        
      </div>
    </div>
  )
}

const styles = {
    mentorCard: {
        backgroundColor: '#CFD8E8',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '20px 40px',
        margin: '80px auto',
        width: '100%',
        maxWidth: '1120px',
        boxSizing: 'border-box',
    },
    mentorContent: {
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    mentorImage: {
        width: '100px',
        height: '100px',    
        backgroundColor: '#C4C4C4',
        marginRight: '20px',
    },
    mentorInfo: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#E9EDF5',
        borderRadius: '12px',
        padding: '20px',
        gap: '16px',
        flex: 1,
        minWidth: '220px',
    },
    mentorList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    mentorListItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
    },
    bookButton: {
        backgroundColor: '#DBB444',
        color: '#262222',
        border: 'none',
        borderRadius: '999px',
        padding: '12px 24px',
        cursor: 'pointer',
        alignSelf: 'center',
        fontWeight: '600',
    },
    h2: {
        fontSize: '36px',
        fontWeight: 'semibold',
        color: '#262222',
        marginBottom: '40px',
        textAlign: 'center',
    },
}
export default Mentorcard
