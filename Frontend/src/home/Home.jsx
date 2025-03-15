import React from 'react'
import Navbar from '../components/NavBar.jsx'
import Banner from '../components/Banner.jsx'
import Freebook from '../components/Freebook.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <div>
        <>
        <Navbar />
        <Banner />
        <Freebook />
        <Footer />
        </>
    </div>
  )
}

export default Home