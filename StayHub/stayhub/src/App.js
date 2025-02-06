import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import LoginPage from './screens/LoginPage';
import Header from './components/Header';
import Footer from './components/Footer';
import RegistrationPage from './screens/RegistrationPage';
import HomePage from './screens/HomePage';
import Details from './screens/Details';
import AboutUs from './screens/AboutUs';
import ContactUs from './screens/ContactUs';
import ProtectedRoute from './components/ProtectedRoute';
import OwnerDashboard from './screens/OwnerDashboard';
import UserDashboard from './screens/UserDashboard';
import { ToastContainer } from 'react-toastify'; 
import PaymentSuccessfulPage from './screens/PaymentSuccessfulPage';

const App = () => {
  
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} />
      <Header/>
      <div className="container-fluid p-0" style={{ maxWidth: '1550px', minHeight: '100vh' }}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/details" element={<Details />} />
            <Route path="/ownerdashboard" element={<OwnerDashboard />} />
            <Route path="/userdashboard" element={<UserDashboard />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/paymentsuccessful" element={<PaymentSuccessfulPage />} />
          </Route>
        </Routes>
       </div>
      <Footer/>
    </Router>
  );
};

export default App;
