// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import LoginPage from './screens/LoginPage';
import Header from './components/Header';
import Footer from './components/Footer';
import RegistrationPage from './screens/RegistrationPage';
import HomePage from './screens/HomePage';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container-fluid p-0" style={{ maxWidth: '1550px', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
