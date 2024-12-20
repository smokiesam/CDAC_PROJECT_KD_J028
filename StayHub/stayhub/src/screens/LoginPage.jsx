import React, { useState } from 'react';
import login_png from '../images/login_png.png'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Customer'); // Default role

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Submitted:', { email, password, role });
  };

  return (
    <div className="container-fluid" style={{backgroundColor: '#FEF4EA', minHeight: '100vh'
}}>
      <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        {/* Left Column (Login Form) */}
        <div className="col-md-6 col-12">
          <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
            <h2 className="text-center">Login</h2>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Role</label>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="role"
                  value="Customer"
                  checked={role === 'Customer'}
                  onChange={(e) => setRole(e.target.value)}
                  className="form-check-input"
                  style={{ accentColor: '#FF7700' }}  // Custom color for radio buttons
                />
                <label className="form-check-label">Customer</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="role"
                  value="Owner"
                  checked={role === 'Owner'}
                  onChange={(e) => setRole(e.target.value)}
                  className="form-check-input"
                  style={{ accentColor: '#FF7700' }}  // Custom color for radio buttons
                />
                <label className="form-check-label">Owner</label>
              </div>
            </div>
            {/* Login button with custom color */}
            <button
              type="submit"
              className="btn w-100"
              style={{ backgroundColor: '#FF7700', borderColor: '#FF7700', color: 'white' }}
            >
              Login
            </button>
            <p className="mt-3 text-center">
              Don’t have an account? 
              <a href="#" className="text-primary" style={{ color: '#007bff' }}>Signup</a>  {/* Blue color for the signup link */}
            </p>
          </form>
        </div>

        {/* Right Column (Image/Picture) */}
        <div className="col-md-6 col-12 d-none d-md-block">
          <img
            src={login_png}  // Image path
            alt="Login Illustration"
            className="img-fluid rounded"
            style={{ height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;