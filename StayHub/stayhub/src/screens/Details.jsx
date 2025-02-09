import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import menuImage from '../images/menunew.svg';
import { Button, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jwtDecode } from 'jwt-decode';

const DetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [pg, setPg] = useState(location.state?.pg || {});
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [role, setRole] = useState(""); // State to store role

  useEffect(() => {
    // Retrieve role from localStorage
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      setRole(storedRole);
    }

    if (!pg.id && location.state?.pgId) {
      const fetchPgDetails = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/api/pgs/${location.state.pgId}`);
          setPg(response.data);
        } catch (error) {
          console.error("Error fetching PG details:", error);
          toast.error("Error fetching PG details. Please try again.");
        }
      };
      fetchPgDetails();
    }
  }, [pg.id, location.state]);

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!checkIn || !checkOut) {
      toast.error("Please select check-in and check-out dates.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("User not logged in. Please login first.");
      return;
    }

    try {
      const decodedToken = jwtDecode(token);
      const userEmail = decodedToken.sub; // Ensure this matches your backend's JWT payload structure

      const response = await axios.post(
        "http://localhost:8080/api/bookings/create",
        {
          userEmail, // Now dynamically extracted
          pgId: pg.id,
          checkInDate: checkIn,
          checkOutDate: checkOut,
          amountPaid: pg.rent,
        }
      );

      if (response.status === 200) {
        toast.success("Booking successful!");
        setTimeout(() => navigate("/paymentsuccessful"), 1000);
      }
    } catch (error) {
      console.error("Booking failed:", error);
      toast.error("Booking failed. Please try again.");
    }
  };

  return (
    <div className="container my-4">
      <Button variant="secondary" className="mb-3" onClick={() => navigate(-1)}>
        ← Back
      </Button>

      <div className="row">
        <div className="col-md-8">
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={require("../images/detailspagecrousel2.png")}
                  alt="PG1"
                  className="img-fluid rounded carousel-img"
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("../images/detailspagecrousel2.png")}
                  alt="PG2"
                  className="img-fluid rounded carousel-img"
                  style={{ height: "100%", objectFit: "cover" }}
                />
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
            <Form onSubmit={handleBooking}>
              <div className="mb-3">
                <label>Check-in:</label>
                <input type="date" className="form-control" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label>Check-out:</label>
                <input type="date" className="form-control" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required />
              </div>
              <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" required />
                <label className="form-check-label">
                  I agree to the <a href="/terms-and-conditions" className="text-primary">terms & conditions</a>.
                </label>
              </div>
              <Button variant="primary" type="submit" disabled={role === "OWNER"}>
                Reserve Now
              </Button>
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
