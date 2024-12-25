import React, { useState } from "react";
import '../styles/HomePage.css'; 

import pgImage from '../images/pglist.png';
import pgImage2 from '../images/pglist2.png';
import pgImage3 from '../images/pglist3.png';
import crouselimage from '../images/pglistcrousel1.png';
import crouselimage2 from '../images/pglistcrousel2.png';
import crouselimage3 from '../images/pglistcrousel3.png';





const HomePage = () => {
  const [activeFilter, setActiveFilter] = useState('PG/Hostels');
  
  const carouselItems = [
    {
      id: 1,
      image: crouselimage,
      title: "Our rooms: Fully furnished",
      subtitle: "Your comfort: Fully sorted",
      description: "Fully furnished residences. Limited beds left. Book now."
    },
    {
      id: 2,
      image: crouselimage2,
      title: "Premium Living Spaces",
      subtitle: "Experience comfort like never before",
      description: "Modern amenities with 24/7 support."
    },
    {
      id: 3,
      image: crouselimage3,
      title: "Student Special Offers",
      subtitle: "Affordable and Comfortable",
      description: "Special rates for students. Book now!"
    }
  ];
  // Property data
  const propertyData = [
    {
      id: 1,
      title: "Cairns House",
      location: "Pune",
      price: "₹ 500.00/mon*",
      image: pgImage,
      features: ["Attached Washroom", "Spacious Cupboard"],
    },
    {
      id: 2,
      title: "Cairns House",
      location: "Lucknow",
      price: "₹ 500.00/mon*",
      features: ["AC", "High Speed Wifi"],
      image: pgImage2,
    },
    {
      id: 3,
      title: "Cairns House",
      location: "Mumbai",
      price: "₹ 500.00/mon*",
      features: ["Washing Machine", "Spacious Refrigerator"],
      image: pgImage3,
    },
    {
      id: 4,
      title: "Cairns House",
      location: "Pune",
      price: "₹ 500.00/mon*",
      features: ["Hot Water Supply", "Flat Screen TV"],
      image: pgImage,
    }
  ];

  // FAQ data
  const faqData = [
    {
      question: "How Good is the Quality of Food, Laundry, and Room Cleaning Services of PGs in Ahmedabad?",
      answer: "No doubt, you'll find more than one pg with food in Ahmedabad that also offers laundry and room cleaning services. But compared to the curated meals, and the professionally trained laundry and housekeeping facilities that we provide, we doubt if they can be considered good enough."
    },
    {
      question: "Which is the Best Boys PG in Ahmedabad?",
      answer: "It's not hard to find a pg in Ahmedabad for boys. But the absolute pg is the one that doesn't make you feel like you're staying in pg rooms. We're talking about, of course, Stanza Living."
    },
    {
      question: "How Safe are Ladies Hostels Near me?",
      answer: "We can't speak about the safety of other Girls and Ladies hostels near you, but at every Stanza Living residence, we have a robust, tech-enabled security system that includes biometric entry and CCTV cameras. For us, anything less than that is not safe enough."
    }
  ];

  return (
    <div className="container-fluid p-0 ">
          <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        {carouselItems.map((_, index) => (
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

      {/* Carousel Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      {/* Filters Section */}
      <div className="container mb-4 py-4">
        <div className="d-flex flex-wrap gap-3 justify-content-start align-items-center">
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
    {/* Property Listings */}
    <div className="col-lg-7">
      {propertyData.map((property) => (
        <div key={property.id} className="card mb-4 border shadow-sm">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={property.image}
                className="img-fluid h-100 object-fit-cover"
                alt={property.title}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{property.title}</h5>
                <p className="text-muted">{property.location}</p>
                <div className="mb-3">
                  <p className="mb-2 fw-bold">Features:</p>
                  <div className="d-flex flex-wrap gap-2">
                    {property.features.map((feature, index) => (
                      <span key={index} className="badge bg-light text-dark">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-primary fw-bold">Starts from {property.price}</p>
                <div className="d-flex gap-2">
                  <button className="btn btn-primary">DETAILS</button>
                  <button className="btn btn-outline-primary">BOOK NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Map Section */}
    <div className="col-lg-5">
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

  {/* FAQ Section */}
  <div className="mt-5 mb-5">
    <h3 className="mb-4">FAQs on PG in Ahmedabad</h3>
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
