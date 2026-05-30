import React, { useState } from 'react'
import Coursecard from './Coursecard'
import CourseCardImg from '../../assets/Coursecard.png'
import Img1 from '../../assets/img-1.png'
import Img2 from '../../assets/img-2.png'

const CoursesPage = () => {
  const [searchValue, setSearchValue] = useState('')
  const [selectedPill, setSelectedPill] = useState('Beginners')

  const courses = [
    {
      id: 1,
      image: CourseCardImg,
      language: 'Kannada',
      experience: '2 yrs experience',
      level: 'Beginners',
      title: 'Learn Kannada - Complete course for beginners',
      description: 'Master Kannada from basic conversations to advanced communication with easy-to-follow lessons and practical exercises.',
      price: '₹249',
    },
    {
      id: 2,
      image: Img1,
      language: 'Tamil',
      experience: '3 yrs experience',
      level: 'Intermediate',
      title: 'Tamil Language Mastery Course',
      description: 'Learn Tamil with native speakers and master conversational skills with comprehensive lessons.',
      price: '₹299',
    },
    {
      id: 3,
      image: Img2,
      language: 'Telugu',
      experience: '2.5 yrs experience',
      level: 'Advanced',
      title: 'Telugu Foundations & Advanced Learning',
      description: 'Complete Telugu course from basics to fluency with interactive sessions and practice materials.',
      price: '₹269',
    },
    {
      id: 4,
      image: CourseCardImg,
      language: 'Marathi',
      experience: '1.8 yrs experience',
      level: 'Beginners',
      title: 'Marathi Made Easy - Beginner to Advanced',
      description: 'Comprehensive Marathi learning program designed for rapid skill development and cultural understanding.',
      price: '₹219',
    },
    {
      id: 5,
      image: Img1,
      language: 'Hindi',
      experience: '4 yrs experience',
      level: 'Advanced',
      title: 'Hindi Language Intensive Program',
      description: 'Master Hindi with professional instructors offering personalized guidance and real-world practice scenarios.',
      price: '₹229',
    },
    {
      id: 6,
      image: Img2,
      language: 'Bengali',
      experience: '2.2 yrs experience',
      level: 'Intermediate',
      title: 'Bengali Language & Culture',
      description: 'Learn Bengali with insights into the rich culture and traditions while developing conversational fluency.',
      price: '₹249',
    },
    {
      id: 7,
      image: CourseCardImg,
      language: 'Gujarati',
      experience: '1.5 yrs experience',
      level: 'Beginners',
      title: 'Gujarati Express Course for Learners',
      description: 'Fast-track Gujarati course designed to get you speaking fluently in a short timeframe.',
      price: '₹199',
    },
    {
      id: 8,
      image: Img1,
      language: 'Punjabi',
      experience: '3.1 yrs experience',
      level: 'Advanced',
      title: 'Punjabi Complete Learning Series',
      description: 'Comprehensive Punjabi course with cultural context and practical communication skills.',
      price: '₹239',
    },
  ]

  const filteredCourses = courses.filter((course) => {
    const searchLower = searchValue.trim().toLowerCase()
    const matchesSearch =
      !searchLower ||
      [course.language, course.title, course.description, course.experience]
        .some((field) => field.toLowerCase().includes(searchLower))

    const matchesLevel = !selectedPill || course.level === selectedPill

    return matchesSearch && matchesLevel
  })

  return (
    <section style={styles.page}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=add,search"
      />
      <div style={styles.topControls}>
        <div style={styles.topRow}>
          <div style={styles.searchBar}>
            <span className="material-symbols-outlined" style={styles.searchIcon}>
              search
            </span>
            <input
              type="text"
              placeholder="Search courses, mentors, topics..."
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              style={styles.searchInput}
            />
          </div>

          <div style={styles.pills}>
            {['Beginners', 'Intermediate', 'Advanced'].map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => setSelectedPill(selectedPill === label ? null : label)}
                style={{
                  ...styles.pillButton,
                  backgroundColor: selectedPill === label ? '#1B2436' : '#F4F6FB',
                  color: selectedPill === label ? '#F4F6FB' : '#27272A',
                  border: selectedPill === label ? 'none' : '1px solid rgba(39, 39, 42, 0.16)',
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    ...styles.pillIcon,
                    color: selectedPill === label ? '#F4F6FB' : '#27272A',
                    transform: selectedPill === label ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  add
                </span>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={styles.cardSection}>
        {filteredCourses.length > 0 ? (
          <div style={styles.cardGrid}>
            {filteredCourses.map((course) => (
              <Coursecard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div style={styles.noResults}>
            No courses match your search and selected experience level.
          </div>
        )}
      </div>
    </section>
  )
}

const styles = {
  page: {
    padding: '80px 24px 120px',
    maxWidth: '1180px',
    margin: '0 auto',
  },
  topControls: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginBottom: '40px',
  },
  topRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px',
    flexWrap: 'wrap',
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    backgroundColor: '#F4F6FB',
    borderRadius: '24px',
    padding: '14px 18px',
    boxShadow: '0 12px 24px rgba(25, 31, 65, 0.08)',
    flex: 1,
    minWidth: '280px',
  },
  searchIcon: {
    fontSize: '18px',
  },
  searchInput: {
    flex: 1,
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    fontSize: '16px',
    color: '#1B2436',
  },
  pills: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
  },
  pillButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '16px',
    padding: '10px 18px',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '999px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  pillIcon: {
    fontSize: '18px',
    transition: 'transform 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
  },
  cardSection: {
    width: '100%',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '56px',
    width: '100%',
  },
  noResults: {
    padding: '46px 24px',
    textAlign: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: '24px',
    color: '#475569',
    fontSize: '16px',
    border: '1px solid rgba(71, 85, 105, 0.12)',
  },
}

export default CoursesPage
