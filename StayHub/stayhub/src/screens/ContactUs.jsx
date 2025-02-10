import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, message } = formData;
    const subject = `Inquiry from ${firstName} ${lastName}`;
    const mailtoLink = `mailto:support@stayhub.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="landing-page" >
      <div className="landing-page-content">
        {/* Hero Section */}
        <section className="hero-section d-flex align-items-center" style={{ height: "90vh", backgroundColor: "#FEF4EA" }}>
          <div className="container text-center py-4 pb-4">
            <div className="row align-items-center">
              {/* Left Side: Form Section */}
              <div className="col-md-6">
                <h1 className="display-3 fw-bold">Contact Us</h1>
                <br />
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title mb-4">We'd love to hear from you!</h5>
                    <form onSubmit={handleSubmit}>
                      {/* First Name */}
                      <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="firstName" className="form-label me-3" style={{ width: "150px" }}>
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          placeholder="Enter your first name"
                          style={{ width: "300px" }}
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Last Name */}
                      <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="lastName" className="form-label me-3" style={{ width: "150px" }}>
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          name="lastName"
                          placeholder="Enter your last name"
                          style={{ width: "300px" }}
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Email Address */}
                      <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="email" className="form-label me-3" style={{ width: "150px" }}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Enter your email address"
                          style={{ width: "300px" }}
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Message */}
                      <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="message" className="form-label me-3" style={{ width: "150px" }}>
                          Your Message
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="4"
                          placeholder="Type your message here"
                          style={{ width: "400px", height: "150px" }}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <button type="submit" className="btn w-100" style={{ backgroundColor: "#FF7700" }}>
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Right Side: Image */}
              <div className="container col-md-6">
                <img
                  src={require("../images/contactus.png")}
                  alt="Wide Range of PGs"
                  className="img-fluid rounded"
                  style={{ width: "85%", height: "auto", transform: "translateY(58px)" }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
