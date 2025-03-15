import React from 'react'
import Navbar from '../components/NavBar.jsx'
import Contacts from '../components/Contacts.jsx'

const Contact = () => {
  return (
    <>
    <div>
    <Navbar />
    <div className="min-h-screen">
    <Contacts />
    </div>
    </div>
    </>
  )
}

export default Contact