const ContactUs = () => {

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
        {/* Heading - Combined Description Column (Left Side) */}
        <div className="col-md-6">
        <h1 className="display-3 fw-bold">Contact Us</h1>
        <br />
        <div>
            <div className="card">
            <div className="card-body">
                <h5 className="card-title mb-4">We'd love to hear from you!</h5>
                <form>
                {/* First Name */}
                <div className="mb-3 d-flex align-items-center">
                <label
                    htmlFor="firstName"
                    className="form-label me-3"
                    style={{ width: "150px" }}
                >
                    First Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Enter your first name"
                    style={{ width: "300px" }}
                />
                </div>



                {/* Last Name */}
                <div className="mb-3 d-flex align-items-center">
                <label
                    htmlFor="lastName"
                    className="form-label me-3"
                    style={{ width: "150px" }}
                >
                    Last Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Enter your first name"
                    style={{ width: "300px" }}
                />
                </div>


                {/* Email Address */}
                <div className="mb-3 d-flex align-items-center">
                <label
                    htmlFor="emailAddress"
                    className="form-label me-3"
                    style={{ width: "150px" }}
                >
                    Email Address
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="emailAddress"
                    placeholder="Enter your email address"
                    style={{ width: "300px" }}
                />
                </div>


                {/* Email Address */}
                <div className="mb-3 d-flex align-items-center">
                <label
                    htmlFor="yourMessage"
                    className="form-label me-3"
                    style={{ width: "150px" }}
                >
                    Your Message
                </label>
                <textarea
                    className="form-control"
                    id="yourMessage"
                    rows="4"
                    placeholder="Type your message here"
                    style={{ width: "400px",height:"150px" }}
                ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-100">
                    Submit
                </button>
                </form>
            </div>
            </div>
        </div>
        </div>

  
        {/* Combined Image - Second Column (Right Side) */}
        <div className="container col-md-6">
          <img
              src={require('../images/contactus.png')}
              alt="Wide Range of PGs"
              className="img-fluid rounded"
              style={{ width: '85%', height: 'auto', transform: 'translateY(58px)' }}
            />
        </div>
      </div>
    </div>
  </section>
  
  
          {/* Features Section */}
          <section className="features-section white-bg py-0">
            <div className="container-fluid px-0">
              <h2 className="text-center mb-5 text-white display-6 fw-normal py-5" style={{backgroundColor:"#FF7700"}}><span className='text-black fw-semibold'>Our <span style={{color:"white"}}>Minds</span> Behind</span></h2>
            </div>
          </section>
  
          {/* About Section */}
          <section
    className="about-section py-5 pt-0 align-items"
    style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundColor: '#fff',
      backgroundRepeat: 'no-repeat',
      height: 'auto',
      paddingBottom: '50px',
    }}
  >
    <div className="container px-0 pt-5">
       {/* Character-1 Block: Text Left, Image Right */}
       <div className="row align-items-center mb-5 py-5">
        <div className="col-md-6 d-flex flex-column align-items-center text-black">
          <h4 className="fs-2">
            Sanyam Saxena
          </h4>
          <h5 className="fs-4 py-2">
            Team-Lead & Frontend Designer
          </h5>
          <p className="fs-5">
            Sanyam creates intuitive and visually appealing user interfaces 
            as well as oversees project timelines and ensures seamless 
            coordination among the team.
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src={require('../images/character-1.png')}
            alt="character-img"
            className="img-fluid rounded"
            style={{ width: '65%', height: 'auto' }}
          />
        </div>
      </div>
  
      {/* Character 2: Image Left, Text Right */}
      <div className="row align-items-center mb-5 py-5">
        <div className="col-md-6 d-flex justify-content-center">
        <img
            src={require('../images/character-3.png')}
            alt="character-img"
            className="img-fluid rounded"
            style={{ width: '65%', height: 'auto' }}
          />
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center text-black">
        <h4 className="fs-2">
            Nishant Deshmukh
          </h4>
          <h5 className="fs-4 py-2">
            UI/UX Designer
          </h5>
          <p className="fs-5">
            Nishant is a talented UI/UX designer with a keen eye for detail
            and user-centric design. He excels in creating intuitive,
            visually appealing interfaces that enhance user experiences 
            and engagement.
          </p>
        </div>
      </div>
  
      {/* Character-3 : Text Left, Image Right */}
      <div className="row align-items-center mb-5 py-5">
        <div className="col-md-6 d-flex flex-column align-items-center text-black">
        <h4 className="fs-2">
            Krishn Kant Chaubey
          </h4>
          <h5 className="fs-4 py-2">
            Backend Developer
          </h5>
          <p className="fs-5">
          Krishn specializes in developing robust server-side logic,
           ensuring seamless communication between the frontend and backend. 
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
        <img
            src={require('../images/character-2.png')}
            alt="character-img"
            className="img-fluid rounded"
            style={{ width: '70%', height: 'auto' }}
          />
        </div>
      </div>
  
      {/* Character 4: Image Left, Text Right */}
      <div className="row align-items-center mb-5 py-5">
        <div className="col-md-6 d-flex justify-content-center">
        <img
            src={require('../images/character-4.png')}
            alt="character-img"
            className="img-fluid rounded"
            style={{ width: '65%', height: 'auto' }}
          />
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center text-black">
        <h4 className="fs-2">
            Devarshi Pathak
          </h4>
          <h5 className="fs-4 py-2">
          QA Specialist
          </h5>
          <p className="fs-5">
            Devarshi is a detail-oriented QA specialist who ensures the
            product is reliable and user-friendly. Through rigorous testing
            and quality checks, he delivers a bug-free and smooth user 
            experience.
          </p>
        </div>
      </div>
  
    </div>
  </section>
  
        </div>
      </div>
    );
  };
  
  export default ContactUs;
  