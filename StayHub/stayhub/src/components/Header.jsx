import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';
import { Dropdown } from 'react-bootstrap'; 

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        const extractedUsername = (decodedToken.sub || decodedToken.username || '').split('@')[0]; 
        setIsLoggedIn(true);
        setUserRole(role);
        setUsername(extractedUsername);
      } catch (error) {
        console.error("Error decoding token:", error);
        setIsLoggedIn(false);
        setUserRole(null);
        setUsername("");
      }
    } else {
      setIsLoggedIn(false);
      setUserRole(null);
      setUsername(""); 
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setIsLoggedIn(false);
    setUserRole(null);
    setUsername("");
    navigate('/login', { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" width="120" height="50" />
        </a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="/aboutus">About</a>
            </li>

            <li className="nav-item dropdown">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: '#FF7700', color:'white' }}>
                  Support
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/contactus">Contact Us</Dropdown.Item>
                  <Dropdown.Item href="/action2">Another action</Dropdown.Item>
                  <Dropdown.Item href="/action3">Something else here</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>

            {isLoggedIn ? (
              <li className="nav-item dropdown">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: '#FF7700'}}>
                    <i className="fas fa-user-circle me-2" style={{ fontSize:'23px'}} ></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>Hi, {username}</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => navigate(userRole === 'USER' ? '/userdashboard' : '/ownerdashboard')}>Dashboard</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            ) : (
              <li className="nav-item">
                <button 
                  className="btn text-white px-4" 
                  style={{ backgroundColor: '#FF7700' }} 
                  onClick={() => navigate('/login')}
                >
                  Login
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;