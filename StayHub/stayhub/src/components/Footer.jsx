import React from 'react';
import logo from '../images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-4">
      <div className="container">
        <div className="row">
          {/* Logo Section */}
          <div className="col-md-3 mb-3 text-center text-md-start">
            <img src={logo} alt="StayHub Logo" width="120" height="50" className="d-inline-block align-top mb-2" />
            <p>
              StayHub is your one-stop solution to find and book nearby PG accommodations. Explore our listings to find your perfect stay today!
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-3 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/" className="text-white text-decoration-none">About</a></li>
              <li><a href="/" className="text-white text-decoration-none">Support</a></li>
              <li><a href="/" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

            {/* Additional Column Section */}
          <div className="col-md-3 mb-3">
            <h5>Contact Us</h5>
            <p>Email: support@stayhub.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 StayHub, Sunbeam Karad, Maharashtra.</p>
          </div>

          {/* Social Media Section */}
          <div className="col-md-3 mb-3 text-center">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center">
              <a href="/" className="text-white mx-2"><i className="fab fa-facebook fa-2x"></i></a>
              <a href="/" className="text-white mx-2"><i className="fab fa-twitter fa-2x"></i></a>
              <a href="/" className="text-white mx-2"><i className="fab fa-instagram fa-2x"></i></a>
              <a href="/" className="text-white mx-2"><i className="fab fa-linkedin fa-2x"></i></a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="row mt-3">
          <div className="col text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} StayHub. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
