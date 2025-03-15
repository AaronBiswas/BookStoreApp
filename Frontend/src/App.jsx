import React from 'react';
import Home from './home/home.jsx';
import{Route,Routes} from "react-router-dom";
import Courses from "../src/courses/Courses.jsx"
import Signup from './components/Signup.jsx';
import Contact from './Contact/Contact.jsx';

const App = () => {
  return (
    <>
    <div className="dark:bg-black dark:text-white">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Course" element={<Courses />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    </div>
    </>
  )
}

export default App;
