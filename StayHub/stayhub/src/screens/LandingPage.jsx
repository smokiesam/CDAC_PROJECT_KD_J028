import React from 'react';
import '../styles/LandingPage.css';
import { useNavigate } from 'react-router-dom';
import landing_bg from '../images/landing_bg.png';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import OwlCarousel from 'react-owl-carousel';


const LandingPage = () => {
const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-page-content">
        {/* Hero Section */}
        <section
  className="hero-section peach-bg d-flex align-items-center"
  style={{ height: '90vh' }}
>
  <div className="container text-center py-4">
    <div className="row align-items-center">
      {/* Heading - First Column (Left Side) */}
      <div className="col-md-6">
        <h1 className="display-3 fw-bold">"Your Perfect Stay, Just a Search Away!"</h1>
        <br />
        <p className='fs-5'>Discover great PGs around you, trusted and verified.</p>
      </div>

      {/* Carousel - Second Column (Right Side) */}
      <div className="col-md-6">
        <div
          id="heroCarousel"
          className="carousel slide rounded"
          data-bs-ride="carousel"
          data-bs-interval="3000"
          style={{
            overflow: 'hidden',
            borderRadius: '20px',
            height: '60vh', // Adjust carousel height relative to hero section
          }}
        >
          <div className="carousel-inner" style={{ height: '100%' }}>
            {/* Carousel Item 1 */}
            <div className="carousel-item active" style={{ height: '100%' }}>
              <img
                src={require('../images/carousel1.png')}
                className="d-block w-100"
                alt="1"
                style={{ height: '100%', objectFit: 'cover' }} // Ensure image fills the container
              />
              <div className="carousel-caption d-none d-md-block">
                <p className='fw-bold fs-5'>
                  Come, live the new kind of Living.    
                </p>
              </div>
            </div>
            {/* Carousel Item 2 */}
            <div className="carousel-item" style={{ height: '100%' }}>
              <img
                src={require('../images/carousel2.png')}
                className="d-block w-100"
                alt="2"
                style={{ height: '100%', objectFit: 'cover' }}
              />
              <div className="carousel-caption d-none d-md-block">
              <p className='fw-bold fs-5'>
                Where Every Stay Feels Like Home!    
                </p>
              </div>
            </div>
            {/* Carousel Item 3 */}
            <div className="carousel-item" style={{ height: '100%' }}>
              <img
                src={require('../images/carousel3.png')}
                className="d-block w-100"
                alt="3"
                style={{ height: '100%', objectFit: 'cover' }}
              />
              <div className="carousel-caption d-none d-md-block">
                <p className='fw-bold fs-5'>Affordable PGs that fit your budget.</p>
              </div>
            </div>

            {/* Carousel Item 4 */}
            <div className="carousel-item" style={{ height: '100%' }}>
              <img
                src={require('../images/carousel4.png')}
                className="d-block w-100"
                alt="4"
                style={{ height: '100%', objectFit: 'cover' }}
              />
              <div className="carousel-caption d-none d-md-block">
                <p className='fw-bold fs-5'>
                Spend less time
                commuting and more hours unwinding.    
                </p>
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
          className="form-control rounded"
          placeholder="Find in and around"
          aria-label="Search"
        />
        <button
          className="fa-solid fa-magnifying-glass btn btn-primary rounded"
          type="button"
          style={{ backgroundColor: '#FF7700' }}
          onClick={() => navigate('/homepage')}
        >
        </button>
      </div>
    </div>
  </div>
</section>


        {/* Features Section */}
        <section className="features-section white-bg py-5">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-4">
                <i class="fa-solid fa-clipboard-check fs-1"></i>
                <br /><br/>
                <h5>Easy Booking</h5>
                <p>Find and book PGs with just a few clicks.</p>
              </div>
              <div className="col-md-4">
                <i class="fa-solid fa-user-check fs-1"></i>
                <br /><br/>
                <h5>Verified Listings</h5>
                <p>Stay with trusted and verified PG providers.</p>
              </div>
              <div className="col-md-4">
              <i class="fa-solid fa-clock-rotate-left fs-1"></i>
              <br /><br/>
                <h5>24/7 Support</h5>
                <p>We’re here to help anytime you need.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
  className="about-section py-5 align-items"
  style={{
    backgroundImage: `url(${landing_bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    backgroundColor: '#fff',
    backgroundRepeat: 'no-repeat',
    height: 'auto',
    paddingBottom: '50px',
  }}
>
  <div className="container pt-5">
    <h2 className="text-center mb-5 text-white display-6 fw-normal">Why Choose <span className='text-black fw-semibold'>StayHub?</span></h2>

     {/* Block 1: Text Left, Image Right */}
     <div className="row align-items-center mb-5 py-5">
      <div className="col-md-6 d-flex flex-column align-items-center text-white">
        <h4 className="fs-3">Wide Range of PGs</h4>
        <p className="fs-5">Explore options tailored to your budget and preferences.</p>
      </div>
      <div className="col-md-6 d-flex justify-content-center">
        <img
          src="https://via.placeholder.com/400x300"
          alt="Wide Range of PGs"
          className="img-fluid rounded"
        />
      </div>
    </div>

    {/* Block 1: Image Left, Text Right */}
    <div className="row align-items-center mb-5 py-5">
      <div className="col-md-6 d-flex justify-content-center">
        <img
          src="https://via.placeholder.com/400x300"
          alt="Affordable PGs"
          className="img-fluid rounded"
        />
      </div>
      <div className="col-md-6 d-flex flex-column align-items-center text-white">
        <h4 className="fs-3">Affordable Pricing</h4>
        <p className="fs-5">Stay in comfortable and affordable accommodations.</p>
      </div>
    </div>

    {/* Block 1: Text Left, Image Right */}
    <div className="row align-items-center mb-5 py-5">
      <div className="col-md-6 d-flex flex-column align-items-center text-white">
        <h4 className="fs-3">Wide Range of PGs</h4>
        <p className="fs-5">Explore options tailored to your budget and preferences.</p>
      </div>
      <div className="col-md-6 d-flex justify-content-center">
        <img
          src="https://via.placeholder.com/400x300"
          alt="Wide Range of PGs"
          className="img-fluid rounded"
        />
      </div>
    </div>
  </div>
</section>


  {/* Download Section */}
  <section className="download-section pb-5" style={{marginTop:'120px'}}>
    <div className="container">
      <div className="row align-items-center mb-5 py-5">
        {/* Left Column - Buttons */}
        <div className="col-md-6 d-flex flex-column align-items-center text-black">
          <h2 className="mb-4 d-flex flex-column align-items-center">
            Always have us at your fingertips</h2>
          <p className="mb-4">
            Download our mobile app and access the best PGs right at your fingertips!
          </p>
        {/* Sub Columns */}
        <div className="row align-items-center mb-5 py-4">
          <div className="col-md-6 d-flex flex-column align-items-center text-white">
            {/* Play Store Button */}
            <a
              href="/"
              className="btn btn-primary btn-lg d-flex align-items-center fa-brands"
              style={{ backgroundColor: '#FF7700', border: 'none', padding: '10px 15px' }}
            >
              Download 
              <i class="fa-brands fa-google-play ms-2"></i>
            </a>

          </div>
          <div className="col-md-6 d-flex justify-content-center">
                {/* App Store Button */}
                <a
                  href="/"
                  className="btn btn-secondary btn-lg d-flex align-items-center fa-brands"
                  style={{ backgroundColor: '#333', border: 'none', padding: '10px 15px' }}
                >
                  Download
                  <i class="fa-brands fa-apple ms-2"></i>
                </a>
          </div>
        </div>
        </div>

        {/* Right Column - Phone Image */}
        <div className="col-md-6 text-center">
          <img
            src={require('../images/landing_phone.png')}
            alt="StayHub App on Phone"
            className="img-fluid"
            style={{ maxWidth: '350px' }}
          />
        </div>
      </div>
    </div>
  </section>

    {/* Last SubHeading */}
        <div className="d-flex align-items-center justify-content-center mb-5 py-5">
          <div>
            <div className="container text-center">
              <p className="display-4">Stories That Inspire</p>
              <p className="lead">Real experiences, genuine reviews, and ratings from our happy guests.</p>
            </div>
          </div>
        </div>



      {/* Reviews Owl Carousel */}
        {/* <div className="container my-5">
      <h2 className="text-center mb-4">Our Features</h2>

        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          nav={false}
          autoplay
          autoplayTimeout={3000}
          autoplayHoverPause
          items={3} // Number of visible items
        >
          <div className="item">
            <img src="/images/feature1.jpg" alt="Feature 1" />
            <h4 className="text-center mt-2">Feature 1</h4>
          </div>
          <div className="item">
            <img src="/images/feature2.jpg" alt="Feature 2" />
            <h4 className="text-center mt-2">Feature 2</h4>
          </div>
          <div className="item">
            <img src="/images/feature3.jpg" alt="Feature 3" />
            <h4 className="text-center mt-2">Feature 3</h4>
          </div>
          <div className="item">
            <img src="/images/feature4.jpg" alt="Feature 4" />
            <h4 className="text-center mt-2">Feature 4</h4>
          </div>
        </OwlCarousel>
      </div> */}

      </div>
    </div>
  );
};

export default LandingPage;
