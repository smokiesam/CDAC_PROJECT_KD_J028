import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');
        setIsLoggedIn(!!token);
        setUserRole(role);
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        setIsLoggedIn(false);
        setUserRole(null);
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
                            <button className="nav-link dropdown-toggle text-white" id="navbarDropdown" data-bs-toggle="dropdown">
                                Support
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/contactus">Contact Us</a></li>
                                <li><a className="dropdown-item" href="/action2">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/action3">Something else here</a></li>
                            </ul>
                        </li>

                        {isLoggedIn ? (
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle text-white" id="userDropdown" data-bs-toggle="dropdown">
                                    <i className="fas fa-user-circle fa-2x"></i>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <button className="dropdown-item" onClick={() => navigate(userRole === 'USER' ? '/userdashboard' : '/ownerdashboard')}>
                                            Dashboard
                                        </button>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                                </ul>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <button className="btn text-white px-4" style={{ backgroundColor: '#FF7700' }} onClick={() => navigate('/login')}>
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