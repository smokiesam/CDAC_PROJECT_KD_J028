import React from 'react';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="Logo"
              width="120"
              height="50"
              className="d-inline-block align-top"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {/* About Link */}
              <li className="nav-item">
                <a className="nav-link text-white" href="/about">
                  About
                </a>
              </li>

              {/* Dropdown */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle text-white"
                  id="navbarDropdown"
                  //role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Support
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/action1">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/action2">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/action3">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              {/* Login Button */}
              <li className="nav-item">
                <button
                  className="btn text-white px-4"
                  style={{ backgroundColor: '#FF7700' }}
                  onClick={() => navigate('/login')}
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
