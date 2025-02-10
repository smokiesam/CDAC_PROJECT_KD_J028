import React, { useState } from 'react';
import login_png from '../images/login_png.png';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; 

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('USER'); // Default role

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const loginUrl = role === 'OWNER' 
        ? 'http://localhost:8080/api/auth/login/owner' 
        : 'http://localhost:8080/api/auth/login/user';
  
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);  // Store JWT token
  
        // Decode JWT token to get role
        const decodedToken = JSON.parse(atob(data.token.split('.')[1]));
        const userRole = decodedToken.role;
        localStorage.setItem('role', userRole);
  
        toast.success('Login successful!');
  
        navigate('/homepage');  
      } else {
        const errorData = await response.json();
        toast.error(errorData?.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Login request failed:', error);
      toast.error('A network error occurred. Please try again later.');
    }
  };
  
  

  return (
    <div className="container-fluid" style={{ backgroundColor: '#FEF4EA', minHeight: '100vh' }}>
      <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        {/* Left Column (Login Form) */}
        <div className="col-md-6 col-12 d-flex justify-content-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-4 rounded shadow"
            style={{ maxWidth: '450px', width: '100%' }} // Set a max width for the form
          >
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
                  value="USER"
                  checked={role === 'USER'}
                  onChange={(e) => setRole(e.target.value)}
                  className="form-check-input"
                  style={{ accentColor: '#FF7700' }}  // Custom color for radio buttons
                />
                <label className="form-check-label">USER</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="role"
                  value="OWNER"
                  checked={role === 'OWNER'}
                  onChange={(e) => setRole(e.target.value)}
                  className="form-check-input"
                  style={{ accentColor: '#FF7700' }}  // Custom color for radio buttons
                />
                <label className="form-check-label">OWNER</label>
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
              <button
                onClick={() => navigate('/registration')}
                className="btn btn-link text-primary p-0"
                style={{ color: '#007bff' }}
              >
                Signup
              </button>
            </p>
          </form>
        </div>

        {/* Right Column (Image/Picture) */}
        <div className="col-md-6 col-12 d-none d-md-block">
          <img
            src={login_png} 
            alt="Login Illustration"
            className="img-fluid rounded"
            style={{ height: '100%', objectFit: 'cover', transform: 'translateY(35px)' }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
