import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import CoursesPage from './pages/CoursesPage'
import ResourcesPage from './pages/ResourcesPage'
import CertificatesPage from './pages/CertificatesPage'

const App = () => {
  return (
    <BrowserRouter>
      <div style={styles.page}>
        <Navbar />
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

const styles = {
  page: {
    fontFamily: 'Proxima Nova',
    backgroundColor: '#E9EDF5',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
  },
}

export default App
