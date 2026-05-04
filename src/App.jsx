import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Testimonials from './components/testimonials'
import Mentorcard from './components/Mentorcard'
import FAQs from './components/FAQs'
import Languages from './components/Languages'
import HeroSection from './components/Herosection'


const App = () => {
  return (
    <div style={styles.page}>
      <Navbar />
      <HeroSection />
      <Languages />
      <Mentorcard/>
      <Testimonials />
      <FAQs />
      <Footer />
    </div>
  )
}

const styles = {
  page: {
    fontFamily: 'Proxima Nova',
    backgroundColor: '#E9EDF5',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
  },
}

export default App
