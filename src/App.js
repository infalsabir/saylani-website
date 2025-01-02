import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from './heroSection.jsx';
import Navbar from './navbar.jsx';
import Courses from './courses.jsx';
import ContactPage from './contact.jsx';
import Footer from './footer.jsx';
import Register from './register.jsx';
import Login from './login.jsx';
import TypeSelection from './typeSelection.jsx';
import TeacherDashboard from './teacherDashboard.jsx';
import StudentDashboard from './studentDashboard.jsx';
import CreateCourses from './createCourse.jsx';
import AllCourses from './allCourseList.jsx';
import Settings from './setting.jsx';
import UpdateCourses from './updateCourses.jsx';
import Popup from './popup.jsx';
import Logout from './logout.jsx';
function App() {
  return (
    <Router>
      <Navbar />



    

      <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/contact" element={<ContactPage/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/type-selection" element={<TypeSelection />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/popup" element={<Popup />} />
        <Route path="/create-course" element={<CreateCourses />} />
        <Route path="/all-courses" element={<AllCourses />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/update-course" element={<UpdateCourses />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/logout" element={<Logout />} />

        

        {/* Add other routes here */}
      </Routes>

    </Router>
      
  );
  
}

export default App;

