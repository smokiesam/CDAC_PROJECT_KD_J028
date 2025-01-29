import React, { useEffect, useState } from "react";
import '../styles/HomePage.css'; 


import crouselimage from '../images/pglistcrouselnew1.png';
import crouselimage2 from '../images/pglistcrouselnew2.png';
import crouselimage3 from '../images/pglistcrouselnew3.png';



const HomePage = () => {
  const [activeFilter, setActiveFilter] = useState('PG/Hostels');
  //const [pgListings, setPgListings] = useState([]);
  const [pgListings, setPgListings] = useState([
    {
      name: "Krishna House",
      location: "Lucknow",
      features: ["Attached Washroom", "Single", "Double"],
      price: 9999
    },
    {
      name: "Nishant House",
      location: "pune",
      features: ["AC", "Attached Washroom", "Double"],
      price: 26199
    }
   

 ]);

  useEffect(() => {
    fetch("/api/pg-listings") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setPgListings(data))
      .catch((error) => console.error("Error fetching PG listings:", error));
  }, []);

  const carouselItems = [
    { id: 1, image: crouselimage },
    { id: 2, image: crouselimage2 },
    { id: 3, image: crouselimage3 },
  ];
 
 
 // FAQ data
const faqData = [
  {
    question: "How Good is the Quality of Food, Laundry, and Room Cleaning Services of PGs?",
    answer: "You'll find PGs offering food, laundry, and room cleaning services in many locations. However, compared to the curated meals and professionally trained laundry and housekeeping facilities that we provide, others might not meet the same standards."
  },
  {
    question: "Which is the Best Boys PG?",
    answer: "It’s easy to find PGs for boys, but the best PG is one that doesn't make you feel like you're staying in typical PG rooms. We believe our PGs provide a level of comfort and service that stands out."
  },
  {
    question: "How Safe are Ladies Hostels?",
    answer: "While we can't speak about the safety of every ladies' hostel, at our residences, we ensure a robust, tech-enabled security system with features like biometric entry and CCTV cameras. For us, safety is our top priority, and we believe anything less isn't enough."
  }
];


  return (
    <div className="container-fluid p-4 ">
          <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Carousel Indicators */}
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

      {/* Carousel Items */}
      <div className="carousel-inner">
        {carouselItems.map((item, index) => (
          <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            
            <img
              src={item.image}
              className="d-block w-100"
              alt={item.title}
              style={{ height: '300px', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
      
    </div>

    {/* Search Bar Section */}
    <div className="container my-2 py-2">
  <div className="input-group w-100">
    {/* Search Icon */}
    <span className="input-group-text">
      <i className="fa fa-search"></i> {/* Font Awesome search icon */}
    </span>

    {/* Search Input */}
    <input
      type="text"
      className="form-control"
      placeholder="Search PGs, Flats, Amenities..."
    />
  </div>
</div>

     
      {/* Filters Section */}
      <div className="container mb-3 py-3">
      <div className="d-flex flex-column align-items-center">
    <div className="d-flex flex-wrap gap-3 justify-content-center align-items-center">
      <div className="d-flex gap-2 flex-nowrap">
        {['PG/Hostels', 'Flats', 'Locality', 'Budget', 'BHK', 'Amenities'].map((filter) => (
          <button
            key={filter}
            className={`btn ${activeFilter === filter ? 'btn-primary' : 'btn-outline-secondary'} rounded-pill`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="dropdown">
        <button
          className="btn btn-outline-secondary dropdown-toggle rounded-pill"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sort By: Distance
        </button>
        <ul className="dropdown-menu">
          <li><button className="dropdown-item">Nearest</button></li>
          <li><button className="dropdown-item">Farthest</button></li>
          <li><button className="dropdown-item">Shortest Time</button></li>
        </ul>
      </div>
    </div>
  </div>

      {/* Main Content Section */}
  <div className="container">
  <div className="row">

    {/* Property Listings######### */}
    {/* Property Listings ######### */}
<div className="col-lg-7 mt-4">
  <h2 className="text-center mb-3">🏠 PG Listings</h2>
  <div className="table-responsive shadow-sm p-3 bg-white rounded">
    <table className="table table-bordered table-hover">
      <thead className=" text-center">
        <tr>
          <th>Property Name</th>
          <th>Location</th>
          <th>Features</th>
          <th>Starting Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {pgListings.map((pg, index) => (
          <tr key={index} className="align-middle text-center">
            <td className="fw-bold">{pg.name}</td>
            <td>{pg.location}</td>
            <td>
              {pg.features.map((feature, i) => (
                <span key={i} className="badge bg-info text-dark me-1">{feature}</span>
              ))}
            </td>
            <td className="fw-bold text-success">₹{pg.price}/mo</td>
            <td className="text-center"> 
            <div className="d-flex justify-content-center gap-2">
               <button className="btn btn-sm w-100 text-white" style={{ backgroundColor: "#FF7700", border: "none" }}>
                📅 Schedule Visit
            </button>
               <button className="btn btn-outline-primary btn-sm w-100">
              📞 Request Callback
               </button>
               </div>
             </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


    {/* Map Section */}
    <div className="col-lg-5 mt-4 ">
      <div className="sticky-top" style={{ top: '1rem' }}>
        <div className="map-container rounded shadow-sm" style={{ height: '600px' }}>
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
  {/* FAQ Section */}
  <div className="mt-5 mb-5">
    <h3 className="mb-4">FAQs on PG </h3>
    <div className="accordion" id="faqAccordion">
      {faqData.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#faq${index}`}
            >
              {faq.question}
            </button>
          </h2>
          <div
            id={`faq${index}`}
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  );
};

export default HomePage;
