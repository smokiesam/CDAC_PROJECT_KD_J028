import React from 'react';


const HomePage = () => {
  return (
    <div className="container my-4 py-3">
      {/* Image and Reserve Form */}
      <div className="row">
        <div className="col-md-8">
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {/* Carousel Item 1 */}
              <div className="carousel-item active">
                <div className="mb-3">
                  <img
                    src={require('../images/detailspagecrousel1.png')} // Replace with the actual image URL
                    alt="PG in Kondhwa with Kitchen"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
              <div className="carousel-item active">
                <div className="mb-3">
                  <img
                    src={require('../images/detailspagecrousel2.png')} // Replace with the actual image URL
                    alt="PG in Kondhwa with Kitchen"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
              <div className="carousel-item active">
                <div className="mb-3">
                  <img
                    src={require('../images/detailspagecrousel3.png')} // Replace with the actual image URL
                    alt="PG in Kondhwa with Kitchen"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
              <div className="carousel-item active">
                <div className="mb-3">
                  <img
                    src={require('../images/detailspagecrousel4.png')} // Replace with the actual image URL
                    alt="PG in Kondhwa with Kitchen"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
              <div className="carousel-item active">
                <div className="mb-3">
                  <img
                    src={require('../images/detailspagecrousel5.png')} // Replace with the actual image URL
                    alt="PG in Kondhwa with Kitchen"
                    className="img-fluid rounded"
                  />
                </div>
              </div>

              {/* Additional carousel items can be added similarly */}
            </div>

            {/* Carousel Controls */}
            <a className="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>

          <h2>₹7,399/mo*</h2>

          {/* Tabs */}
          <ul className="nav nav-tabs my-3">
            <li className="nav-item">
              <a className="nav-link active" data-bs-toggle="tab" href="#amenities">
                Amenities
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#details">
                Details
              </a>
            </li>
          </ul>

          <div className="tab-content">
            {/* Amenities Tab */}
            <div className="tab-pane fade show active" id="amenities">
              <div className="mt-3">
                <h4>Amenities</h4>
                <div className="d-flex flex-wrap">
                  <div className="border rounded-pill px-3 py-2 me-2 mb-2">
                    <i className="bi bi-box"></i> Spacious Cupboard
                  </div>
                  <div className="border rounded-pill px-3 py-2 me-2 mb-2">
                    <i className="bi bi-water"></i> Attached Washroom
                  </div>
                </div>
              </div>
            </div>

            {/* Services Tab */}
            <div className="tab-pane fade" id="services">
              <div className="mt-3">
                <h4>Services</h4>
                <div className="d-flex flex-wrap">
                  <div className="border rounded-pill px-3 py-2 me-2 mb-2">
                    <i className="bi bi-snow"></i> AC
                  </div>
                  <div className="border rounded-pill px-3 py-2 me-2 mb-2">
                    <i className="bi bi-wifi"></i> High-Speed WiFi
                  </div>
                  <div className="border rounded-pill px-3 py-2 me-2 mb-2">
                    <i className="bi bi-washing-machine"></i> Washing Machine
                  </div>
                  <div className="border rounded-pill px-3 py-2 me-2 mb-2">
                    <i className="bi bi-refrigerator"></i> Spacious Refrigerator
                  </div>
                  <div className="border rounded-pill px-3 py-2 me-2 mb-2">
                    <i className="bi bi-droplet"></i> Hot Water Supply
                  </div>
                  <div className="border rounded-pill px-3 py-2 me-2 mb-2">
                    <i className="bi bi-tv"></i> Flat-Screen TV
                  </div>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div id="details-section" className="mt-3">
              <h4>Details of Shiraz House</h4>
              <p id="details-content">
                It's not your typical PG. Shiraz House by Stanza Living is your second home.
                <span id="read-more-content" style={{ display: "none" }}>
                  <br /><br />
                  Because, just like back at home, this fully-furnished residence for boys, like all our , , and , has all the comforts you're used to. Housekeeping (so your room's always neat and clean), high-speed wifi (so your streaming is uninterrupted), curated meals (so you never miss home-cooked food), and many more such thoughtfully-selected amenities for students like you.
                  <br /><br />
                  With a dose of technology, we also prescribe old-school human connection. Our regularly held movie screenings, game nights, and other events and workshops offer opportunities to make lifetime memories with your co-residents and your Stanza Living family. Our city-wide events will also bring you closer to Stanzens from all over town, be it near or . Trust us, no normal PG Hostel can offer this feeling of family.
                  <br /><br />
                  Speaking of family, we're implementing every safety measure in the book - from regular sanitization to thermal monitoring - to protect you from COVID-19. Because that's what a family does.
                  <br /><br />
                  So this feeling of family, together with the comforts and technology, puts Shiraz House in top position compared to the local boys. But don't go by our word alone. Visit your second house and see what makes it a winner.
                </span>
              </p>
              <button
                id="toggle-details-btn"
                className="btn btn-link"
                onClick={() => {
                  const moreContent = document.getElementById("read-more-content");
                  const btn = document.getElementById("toggle-details-btn");
                  if (moreContent.style.display === "none") {
                    moreContent.style.display = "inline";
                    btn.textContent = "Read Less";
                  } else {
                    moreContent.style.display = "none";
                    btn.textContent = "Read More";
                  }
                }}
              >
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Reserve Form */}
        <div className="col-md-4" style={{ position: "sticky", top: "0" }}>
          <div className="border p-4 bg-light rounded">
            <h3 className="text-center">Reserve Now</h3>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Phone number"
                />
              </div>
              <div className="mb-3">
                <select id="occupancy" className="form-select">
                  <option value="">Occupancy</option>
                  <option value="single">Single</option>
                  <option value="double">Double</option>
                </select>
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="terms"
                />
                <label className="form-check-label" htmlFor="terms">
                  I have read and agreed to the{" "}
                  <a href="/terms-and-conditions" className="text-primary">
                    terms & conditions
                  </a>{" "}
                  of Reserve Now and hereby confirm proceed.
                </label>
              </div>
              <button
                type="submit"
                className="btn w-100 text-white fw-bold"
                style={{ backgroundColor: "#FF7700", border: "none" }}
              >
                Reserve Now/ Pay now!
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Food Menu */}
      <div className="mt-5">
        <h4>Food Menu</h4>
        <div>
          <img
            src={require('../images/Foodmenuimg1.png')} // Replace with the correct path to your image
            alt="Food Menu"
            className="img-fluid rounded"
          />
        </div>
        <div><p>*This food menu is currently being served on the residence and is subject to change in future.</p></div>
      </div>
    </div>
  );
};

export default HomePage;

