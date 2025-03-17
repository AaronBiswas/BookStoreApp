import React from 'react'
import Information from '../components/Information.jsx'
import Navbar from '../components/NavBar.jsx'

const About = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen">
    <Information />
    </div>
    </>
  )
}

export default About