import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbarr from './components/Navbarr';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profil from './components/Profil';
import PrivateRouter from './Routes/PrivateRouter';
import { userCurrent } from './JS/userSlice/userSlice';
import Footer from './components/Footer';
import Jobs from './components/Jobs';
import JobDetails from './components/JobDetails';
import Employers from './components/Employers';
import CandidateProfile from './components/CandidateProfile';
import CandidatesList from './components/CandidatesList';
import CareerTips from './components/CareerTips';

function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCurrent());
  });
  return (
      <div className="App">
        
        <Navbarr />

        
        <div className="main-content">
          <Routes>
            
            <Route path="/" element={<Home />} />

            
            <Route path="/login" element={<Login />} />

            
            <Route path="/register" element={<Register />} />

            
            <Route path="/profil"  element={<Profil />}/>

            <Route path="/jobs" element={<Jobs/>}/>
            <Route path="/job/:id" element={<JobDetails/>}/>
            <Route path="/employers" element={<Employers/>}/>
            <Route path="/employer/candidate/:id" element={<CandidateProfile/>}/>
            <Route path="/candidates" element={<CandidatesList/>}/>
            <Route path="/Careertips" element={<CareerTips/>}/>


          </Routes>

          <Footer/>
        </div>
      </div>
  );
}

export default App;