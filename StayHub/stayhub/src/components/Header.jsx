import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
        setIsLoggedIn(true);
        setUserRole(role);
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        const extractedUsername = (decodedToken.sub || decodedToken.username || '').split('@')[0];
        setUsername(extractedUsername);
    } else {
        setIsLoggedIn(false);
        setUserRole(null);
        setUsername("");
    }

    // **Reinitialize Bootstrap dropdowns**
    setTimeout(() => {
        document.querySelectorAll('.dropdown-toggle').forEach((dropdown) => {
            new window.bootstrap.Dropdown(dropdown);
        });
    }, 100);

    // **Close dropdown when an item is clicked**
    const handleDropdownClick = (event) => {
        if (event.target.closest('.dropdown-menu')) {
            const dropdownElement = event.target.closest('.dropdown-menu').previousElementSibling;
            if (dropdownElement) {
                const dropdownInstance = window.bootstrap.Dropdown.getInstance(dropdownElement);
                if (dropdownInstance) {
                    dropdownInstance.hide(); // Hide the dropdown
                }
            }
        }
    };

    document.addEventListener('click', handleDropdownClick);

    return () => {
        document.removeEventListener('click', handleDropdownClick);
    };
}, [location]);


    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('email');
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
                                <button className="nav-link dropdown-toggle text-white d-flex align-items-center" id="userDropdown" data-bs-toggle="dropdown">
                                    <i className="fas fa-user-circle fa-2x me-2" style={{ color: '#FF7700' }}></i>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li className="dropdown-header text-center fw-bold text-dark">
                                        Hi, {username}
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <button className="dropdown-item" onClick={() => navigate(userRole === 'USER' ? '/userdashboard' : '/ownerdashboard')}>
                                            Dashboard
                                        </button>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <button className="dropdown-item text-danger" onClick={handleLogout}>
                                            Logout
                                        </button>
                                    </li>
                                </ul>
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
