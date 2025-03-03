// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Course from './pages/Course';
import Course01 from './pages/Course01'
import DynamicCourseBuilder from './pages/Course02';
import Compiler from './pages/Compiler'; // Importing Compiler page
import Nav from './components/Nav'; // Importing Nav component
import Footer from './components/Footer'; // Importing Footer component
import CP_Compiler from './pages/CP_Compiler';
import DSA_Page from './pages/DSA';
import "../src/assets/css/main.css"

const App = () => {
  return (
    <Router>
      <div className='main'>
        <Nav /> {/* Navigation bar */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-course" element={<Course01 />} />
          <Route path="/create-course01" element={<DynamicCourseBuilder/>} />
          {/* <Route path='/create-course' element={<Course01 />} /> */}
          <Route path="/courses" element={<Course />} />
          <Route path="/compiler" element={<Compiler />} />
          <Route path="/cp_compiler/:problem_no" element={<CP_Compiler />} />
          <Route path='/dsa' element={<DSA_Page />} />
        </Routes>

        
      </div>
    </Router>
  );
};

export default App;
