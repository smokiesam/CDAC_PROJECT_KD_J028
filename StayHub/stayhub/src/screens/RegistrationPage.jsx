//src/screens/RegistrationPage.js
import React, { useState } from 'react';
import registration_png from '../images/registration_png.png';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Customer',  //Default role
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Registration Data:', formData);
    // Add your registration logic here
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: '#FEF4EA', minHeight: '100vh' }}>
      <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        {/* Left Column (Image) */}
        <div className="col-md-6 col-12 d-none d-md-block">
          <img
            src={registration_png}
            alt="Registration Illustration"
            className="img-fluid rounded"
            style={{ height: '100%', objectFit: 'cover', transform: 'translateY(47px) translateX(70px)' }}
          />
        </div>

        {/* Right Column (Form) */}
        <div className="col-md-6 col-12 d-flex justify-content-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-4 rounded shadow"
            style={{ maxWidth: '400px', width: '100%'}}
          >
            <h2 className="text-center mb-4">Register</h2>
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">First Name</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                className="form-control"
                placeholder="Enter your first name"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">Last Name</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="form-control"
                placeholder="Enter your last name"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="form-control"
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Role :</label>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="role"
                  value="Customer"
                  checked={formData.role === 'Customer'}
                  onChange={handleChange}
                  className="form-check-input"
                  style={{ accentColor: '#FF7700' }}
                />
                <label className="form-check-label">Customer</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="role"
                  value="Owner"
                  checked={formData.role === 'Owner'}
                  onChange={handleChange}
                  className="form-check-input"
                  style={{ accentColor: '#FF7700' }}
                />
                <label className="form-check-label">Owner</label>
              </div>
            </div>
            <button
              type="submit"
              className="btn w-100"
              style={{ backgroundColor: '#FF7700', borderColor: '#FF7700', color: 'white' }}
            >
              Register
            </button>
            <p className="mt-3 text-center">
              Already have an account?{' '}
              <button
                onClick={() => navigate('/login')}
                className="btn btn-link text-primary p-0"
                style={{ color: '#007bff' }}
              >
                Login
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
