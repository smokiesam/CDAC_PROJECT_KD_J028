import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import menuImage from '../images/menunew.svg';
import { Button, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [pg, setPg] = useState(location.state?.pg || {}); 
  const userEmail = localStorage.getItem("email"); 

  useEffect(() => {
    if (!pg.id) {
      const fetchPgDetails = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/api/pgs/${pg.id}`); 
          setPg(response.data); 
        } catch (error) {
          console.error("Error fetching PG details:", error);
          toast.error("Error fetching PG details. Please try again.");
        }
      };
      fetchPgDetails();
    }
  }, [pg.id]);

  const handlePayment = async () => {
    try {
      const orderResponse = await axios.post("http://localhost:8080/api/payments/create-order", {
        amount: pg.rent * 100,
        currency: "INR",
        userEmail: userEmail,
        pgId: pg.id,
        pgName: pg.name
      });

      const { orderId, key } = orderResponse.data;

      const options = {
        key: key,
        amount: pg.rent * 100,
        currency: "INR",
        name: "StayHub",
        description: `Booking for ${pg.name}`,
        order_id: orderId,
        handler: async function (response) {
          await axios.post("http://localhost:8080/api/bookings/confirm", {
            paymentId: response.razorpay_payment_id,
            orderId: orderId,
            userEmail: userEmail,
            pgId: pg.id,
            pgName: pg.name,
            amount: pg.rent
          });

          navigate("/paymentsuccessful");
          setTimeout(() => {
            navigate("/");
          }, 3000);
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment failed:", error);
      toast.error("Payment failed. Please try again.");
    }
  };

  return (
    <div className="container my-4">
      <Button variant="secondary" className="mb-3" onClick={() => navigate(-1)}>← Back</Button>

      <div className="row">
        <div className="col-md-8">
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={require("../images/detailspagecrousel2.png")} alt="PG1" className="img-fluid rounded carousel-img" style={{ height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="carousel-item">
                <img src={require("../images/detailspagecrousel2.png")} alt="PG2" className="img-fluid rounded carousel-img" style={{ height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>

          <div>
            <h2>{pg.name}</h2>
            <p><b>Location:</b> {pg.location}</p>
            <p><b>Rent:</b> ₹{pg.rent}/month</p>
          </div>

          <ul className="nav nav-tabs my-3">
            <li className="nav-item">
              <a className="nav-link active" data-bs-toggle="tab" href="#amenities">Amenities</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#details">Details</a>
            </li>
          </ul>

          <div className="tab-content">
            <div className="tab-pane fade show active" id="amenities">
              <h4>Amenities</h4>
              <ListGroup> 
                <ListGroupItem>Spacious Cupboard</ListGroupItem> 
                <ListGroupItem>Attached Washroom</ListGroupItem> 
              </ListGroup> 
            </div>

            <div className="tab-pane fade" id="services">
              <h4>Services</h4>
              <ListGroup> 
                <ListGroupItem>AC</ListGroupItem> 
                <ListGroupItem>High-Speed WiFi</ListGroupItem> 
              </ListGroup> 
            </div>

            <div id="details-section">
              <h4>Details of {pg.name}</h4>
              <p>{pg.description || "This PG offers comfortable accommodation with all the necessary amenities."}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4" style={{ position: "sticky", top: "0", left: "0", zIndex: "10", height: "100vh", maxWidth: "400px" }}>
          <div className="border p-4 bg-light rounded">
            <h3 className="text-center">Reserve Now</h3>
            <Form>
              <div className="mb-3">
                <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="phone" placeholder="Enter your phone number" required />
              </div>
              <div className="mb-3">
                <select className="form-select">
                  <option value="">Select Occupancy</option>
                  <option value="single">Single</option>
                  <option value="double">Double</option>
                </select>
              </div>
              <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" required />
                <label className="form-check-label">
                  I agree to the <a href="/terms-and-conditions" className="text-primary">terms & conditions</a>.
                </label>
              </div>
              <Button variant="primary" type="submit" onClick={handlePayment}>Reserve Now/ Pay Now!</Button>
            </Form>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h4>Food Menu</h4>
        <div>
          <img src={menuImage} alt="Food Menu" className="img-fluid rounded" />
        </div>
        <p>*This food menu is currently being served on the residence and is subject to change in future.</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DetailsPage;