import React from 'react';
import Home from './home/Home.jsx';
import{Navigate, Route,Routes} from "react-router-dom";
import Courses from "../src/courses/Courses.jsx"
import Signup from './components/Signup.jsx';
import Contact from './Contact/Contact.jsx';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/AuthProvider.jsx';
import About from './About/About.jsx';

const App = () => {
  const[AuthUser,setAuthUser]=useAuth();
  return (
    <>
    <div className="dark:bg-black dark:text-white">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Course" element={AuthUser ? <Courses />:<Navigate to="/Signup"/>} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
    </Routes>
    <Toaster />
    </div>
    </>
  )
}

export default App;
