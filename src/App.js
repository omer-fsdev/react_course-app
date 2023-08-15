import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Teacher from "./pages/Teacher";
import TeacherDetails from "./pages/TeacherDetails";
import CourseCard from "./pages/CourseCard";
import Contact from "./pages/ContactForm";
import CardDetails from "./pages/CardDetails";
import NotFound from "./pages/NotFound";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/teachers" element={<Teacher/>}  />
          <Route path="/teachers/:id" element={<TeacherDetails/>}  />
          <Route path="/courses" element={<CourseCard/>}   />
          <Route path="/courses/:name" element={<CardDetails/>}   />
          <Route path="/contact" element={<Contact/>}   />
          <Route path="*" element={<NotFound/>}   />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
