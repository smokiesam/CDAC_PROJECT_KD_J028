import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/HomePage.css';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import crouselimage from '../images/pglistcrouselnew1.png';
import crouselimage2 from '../images/pglistcrouselnew2.png';
import crouselimage3 from '../images/pglistcrouselnew3.png';

const HomePage = () => {
  const [pgListings, setPgListings] = useState([]); // PGs from backend
  const [filters, setFilters] = useState({
    location: "",
    minRent: "",
    maxRent: "",
  });
  
  const navigate = useNavigate();

  // List of major Indian cities for the location dropdown
  const cities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Surat", "Pune", "Jaipur",
    "Lucknow", "Kanpur", "Nagpur", "Visakhapatnam", "Indore", "Thane", "Bhopal", "Patna", "Vadodara", "Ghaziabad"
  ];

  // Fetch PGs when the page loads
  useEffect(() => {
    fetchPgListings();
  }, []);

  const fetchPgListings = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/pgs/search");
      setPgListings(response.data);
    } catch (error) {
      console.error("Error fetching PG listings:", error);
    }
  };

  // Handle filter changes
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Apply filters and fetch from API
  const applyFilters = async () => {
    try {
      const { location, minRent, maxRent } = filters;
      const response = await axios.get("http://localhost:8080/api/pgs/search", {
        params: { location, minRent, maxRent }
      });
      setPgListings(response.data);
    } catch (error) {
      console.error("Error filtering PG listings:", error);
    }
  };

  // Carousel items
  const carouselItems = [
    { id: 1, image: crouselimage },
    { id: 2, image: crouselimage2 },
    { id: 3, image: crouselimage3 },
  ];

  useEffect(() => {
    const carousel = document.querySelector("#mainCarousel");
    if (carousel) {
      new window.bootstrap.Carousel(carousel, {
        interval: 3000,
        ride: "carousel",
      });
    }
  }, []);

  return (
    <div className="container-fluid p-4">
      {/* Carousel Section */}
      <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-indicators">
          {carouselItems.map((item, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#mainCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img
                src={item.image}
                className="d-block w-100 rounded-3"
                alt={`Slide ${index + 1}`}
                style={{ height: '400px', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Filters Section */}
      <div className="container my-4">
        <div className="row g-3">
          <div className="col-md-4">
            <select className="form-select" name="location" value={filters.location} onChange={handleFilterChange}>
              <option value="">Select Location</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-3">
            <input type="number" className="form-control" placeholder="Min Rent" name="minRent" value={filters.minRent} onChange={handleFilterChange} />
          </div>
          <div className="col-md-3">
            <input type="number" className="form-control" placeholder="Max Rent" name="maxRent" value={filters.maxRent} onChange={handleFilterChange} />
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary w-100" onClick={applyFilters}>Apply Filters</button>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container">
        <div className="row">
          {/* PG Listings Table */}
          <div className="col-lg-8">
            <div className="table-responsive shadow-sm p-3 bg-white rounded-3">
              <table className="table table-bordered table-hover">
                <thead className="text-center">
                  <tr>
                    <th>PG Name</th>
                    <th>Location</th>
                    <th>Rent (per month)</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pgListings.length > 0 ? (
                    pgListings.map((pg, index) => (
                      <tr key={index} className="align-middle text-center">
                        <td className="fw-bold">{pg.name}</td>
                        <td>{pg.location}</td>
                        <td className="fw-bold text-success">₹{pg.rent}/mo</td>
                        <td className="text-center">
                        <button 
                          className="btn btn-sm w-100 text-white" 
                          onClick={() => navigate("/details", { state: { pg } })}
                          style={{ backgroundColor: "#FF7700", border: "none" }}>
                          Details
                        </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center text-muted">No PG listings available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Map Section */}
          <div className="col-lg-4">
            <div className="sticky-top" style={{ top: '1rem' }}>
              <div className="map-container rounded-3 shadow-sm" style={{ height: '600px' }}>
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=72.4,23.0,72.6,23.2&layer=mapnik"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;