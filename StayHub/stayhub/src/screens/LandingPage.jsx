import React from 'react';
import '../styles/LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-page-content">
        {/* Hero Section */}
        <section className="hero-section peach-bg">
          <div className="container text-center py-5">
            <div className="row align-items-center">
              {/* Heading - First Column (Left Side) */}
              <div className="col-md-4">
                <h1 className="display-1 fw-bold">Find the Perfect PG</h1>
                <p>Discover great PGs around you, trusted and verified.</p>
              </div>

              {/* Carousel - Second Column (Right Side) */}
              <div className="col-md-8">
                <div
                  id="heroCarousel"
                  className="carousel slide rounded"
                  data-bs-ride="carousel"
                  data-bs-interval="3000"
                  style={{ overflow: 'hidden', borderRadius: '20px' }}
                >
                  <div className="carousel-inner">
                    {/* Carousel Item 1 */}
                    <div className="carousel-item active">
                      <img
                        src="https://via.placeholder.com/1550x700?text=Image+1"
                        className="d-block w-100"
                        alt="1"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Comfortable Living</h5>
                        <p>Find PGs that suit your lifestyle and needs.</p>
                      </div>
                    </div>
                    {/* Carousel Item 2 */}
                    <div className="carousel-item">
                      <img
                        src="https://via.placeholder.com/1550x700?text=Image+2"
                        className="d-block w-100"
                        alt="2"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Trusted Listings</h5>
                        <p>Explore only verified and trusted PGs.</p>
                      </div>
                    </div>
                    {/* Carousel Item 3 */}
                    <div className="carousel-item">
                      <img
                        src="https://via.placeholder.com/1550x700?text=Image+3"
                        className="d-block w-100"
                        alt="3"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Affordable Options</h5>
                        <p>Affordable PGs that fit your budget.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="search-bar-container mt-5">
              <div className="input-group mx-auto" style={{ maxWidth: '600px' }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Find in and around"
                  aria-label="Search"
                />
                <button
                  className="btn btn-primary rounded"
                  type="button"
                  style={{ backgroundColor: '#FF7700' }}
                  onClick={() => navigate('/homepage')}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section white-bg py-5">
          <div className="container">
            <h2 className="text-center mb-5">Our Features</h2>
            <div className="row text-center">
              <div className="col-md-4">
                <h5>Easy Booking</h5>
                <p>Find and book PGs with just a few clicks.</p>
              </div>
              <div className="col-md-4">
                <h5>Verified Listings</h5>
                <p>Stay with trusted and verified PG providers.</p>
              </div>
              <div className="col-md-4">
                <h5>24/7 Support</h5>
                <p>We’re here to help anytime you need.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section py-5">
          <div className="container">
            <h2 className="text-center mb-5">Why Choose StayHub?</h2>
            <div className="row">
              <div className="col-md-6">
                <h4>Wide Range of PGs</h4>
                <p>Explore options tailored to your budget and preferences.</p>
              </div>
              <div className="col-md-6">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Wide Range of PGs"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
