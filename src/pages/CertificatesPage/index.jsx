import React, { useState } from 'react'
import Certificatecard from './Certificatecard'

const CertificatesPage = () => {
  const [searchValue, setSearchValue] = useState('')
  const [selectedPill, setSelectedPill] = useState('Ongoing')

  const certificates = [
    {
      id: 1,
      title: 'Kannada Certificate Path',
      mentor: 'Shriraksha Gudadari',
      progress: 34,
      percentage: 34,
      status: 'Ongoing',
      description: 'Complete the course and earn a certificate to showcase your Kannada learning journey.',
    },
    {
      id: 2,
      title: 'Tamil Fluency Certificate',
      mentor: 'Priya Sundar',
      progress: 100,
      percentage: 100,
      status: 'Complete',
      description: 'You have successfully completed the Tamil certification path and earned your badge.',
    },
    {
      id: 3,
      title: 'Hindi Proficiency Certificate',
      mentor: 'Amit Sharma',
      progress: 78,
      percentage: 78,
      status: 'Ongoing',
      description: 'Continue your Hindi course to reach certification readiness and validate your skills.',
    },
    {
      id: 4,
      title: 'Bengali Language Certificate',
      mentor: 'Sneha Banerjee',
      progress: 100,
      percentage: 100,
      status: 'Complete',
      description: 'Your Bengali certification is complete, showcasing strong conversational fluency and comprehension.',
    },
    {
      id: 5,
      title: 'Marathi Mastery Certificate',
      mentor: 'Nikhil Kulkarni',
      progress: 100,
      percentage: 100,
      status: 'Complete',
      description: 'You have finished the Marathi course and earned the certificate for advanced language proficiency.',
    },
  ]

  const filteredCertificates = certificates.filter((cert) => {
    const searchLower = searchValue.trim().toLowerCase()
    const matchesSearch =
      !searchLower ||
      [cert.title, cert.description, cert.mentor]
        .some((field) => field?.toLowerCase().includes(searchLower))

    const matchesStatus = !selectedPill || cert.status === selectedPill

    return matchesSearch && matchesStatus
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
              placeholder="Search certificates"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              style={styles.searchInput}
            />
          </div>

          <div style={styles.pills}>
            {['Ongoing', 'Complete'].map((label) => (
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

      <div style={styles.cardList}>
        {filteredCertificates.length > 0 ? (
          filteredCertificates.map((cert) => (
            <Certificatecard key={cert.id} {...cert} />
          ))
        ) : (
          <div style={styles.noResults}>
            No certificates match your search and selected status.
          </div>
        )}
      </div>
    </section>
  )
}
const styles = {
  page: {
    padding: '80px 24px 120px',
    maxWidth: '1140px',
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
    transition: 'transform 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
  },
  cardList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  noResults: {
    padding: '28px',
    borderRadius: '20px',
    backgroundColor: '#F8FAFC',
    color: '#334155',
    textAlign: 'center',
    fontSize: '15px',
  },
  content: {
    backgroundColor: '#FFFFFF',
    borderRadius: '24px',
    boxShadow: '0 24px 80px rgba(15, 23, 42, 0.08)',
    padding: '48px',
  },
  heading: {
    fontSize: '40px',
    margin: 0,
    color: '#1F2937',
  },
  description: {
    marginTop: '18px',
    fontSize: '18px',
    lineHeight: 1.8,
    color: '#475569',
  },
}

export default CertificatesPage
