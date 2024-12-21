// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import LoginPage from './screens/LoginPage';
import Header from './components/Header';
import Footer from './components/Footer';
import RegistrationPage from './screens/RegistrationPage';


const App = () => {
  return (
    <Router>
      <Header /> 
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100 p-0" style={{
    backgroundColor: '#FEF4EA', maxWidth: '1550px', margin: '0 auto' }}> {/* Added container here */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
