import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUser, FaHome, FaHistory } from "react-icons/fa";
import { Button, Card, Spinner, Alert, Table } from "react-bootstrap";

const UserDashboard = () => {
  const [selectedSection, setSelectedSection] = useState("profile");
  const [userData, setUserData] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  // Fetch user profile
  const fetchUserProfile = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("User not logged in. Please log in again.");
      setLoading(false);
      return;
    }

    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const email = decodedToken.sub || decodedToken.email;

      if (!email) {
        setError("User email not found in token.");
        setLoading(false);
        return;
      }

      console.log("Extracted Email:", email);
      const response = await axios.get(`http://localhost:8080/api/users/profile?email=${email}`);
      console.log("Profile Response:", response.data);
      setUserData(response.data);
    } catch (error) {
      console.error("Error in fetchUserProfile:", error);
      setError("Failed to fetch user profile. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchUserBookings = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("User not logged in. Please log in again.");
      setLoading(false);
      return;
    }
  
    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const email = decodedToken.sub || decodedToken.email;
  
      if (!email) {
        setError("User email not found in token.");
        setLoading(false);
        return;
      }
  
      console.log("Fetching bookings for email:", email);
      const response = await axios.get(`http://localhost:8080/api/bookings/user/${email}`);
      
      const bookingsData = response.data;
  
      // Fetch booking dates for each booking
      const bookingsWithDate = await Promise.all(
        bookingsData.map(async (booking) => {
          try {
            const dateResponse = await axios.get(`http://localhost:8080/api/bookings/booking-date/${booking.id}`);
            return {
              pgName: booking.pg?.name || "N/A",
              bookingDate: new Date(dateResponse.data).toLocaleDateString(),  // Format the date
              status: booking.status
            };
          } catch (dateError) {
            console.error("Error fetching booking date:", dateError);
            return {
              pgName: booking.pg?.name || "N/A",
              bookingDate: "Unknown",
              status: booking.status
            };
          }
        })
      );
  
      console.log("Filtered Bookings:", bookingsWithDate);
      setBookings(bookingsWithDate);
    } catch (error) {
      console.error("Error fetching user bookings:", error);
      setError("Failed to fetch previous bookings. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);  

  useEffect(() => {
    fetchUserProfile();
  }, [fetchUserProfile]);

  useEffect(() => {
    if (selectedSection === "bookings") {
      fetchUserBookings();
    }
  }, [selectedSection, fetchUserBookings]);

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {/* Left Panel */}
        <div className="col-md-3 p-3 shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
          <Button variant="secondary" className="mb-3" onClick={() => navigate(-1)}>← Back</Button>
          <h4 className="mb-3">User Dashboard</h4>
          <button
            className="btn btn-primary w-100 mb-3 d-flex align-items-center justify-content-center"
            onClick={() => navigate("/homepage")}
          >
            <FaHome className="me-2" /> Home
          </button>
          <ul className="list-group">
            <li
              className={`list-group-item ${selectedSection === "profile" ? "active" : ""}`}
              onClick={() => setSelectedSection("profile")}
              style={{ cursor: "pointer", backgroundColor: selectedSection === "profile" ? "#FF7700" : "", color: selectedSection === "profile" ? "#fff" : "" }}
            >
              <FaUser className="me-2" /> Profile
            </li>
            <li
              className={`list-group-item ${selectedSection === "bookings" ? "active" : ""}`}
              onClick={() => setSelectedSection("bookings")}
              style={{ cursor: "pointer", backgroundColor: selectedSection === "bookings" ? "#FF7700" : "", color: selectedSection === "bookings" ? "#fff" : "" }}
            >
              <FaHistory className="me-2" /> Previous Bookings
            </li>
          </ul>
        </div>

        {/* Right Panel */}
        <div className="col-md-9 p-4">
          {loading ? (
            <Spinner animation="border" />
          ) : error ? (
            <Alert variant="danger">{error}</Alert>
          ) : (
            <>
              {selectedSection === "profile" && userData && (
                <Card className="p-4">
                  <Card.Body>
                    <Card.Title><FaUser className="me-2" /> User Profile</Card.Title>
                    <Card.Text>
                      <strong>First Name:</strong> {userData.firstName} <br />
                      <strong>Last Name:</strong> {userData.lastName} <br />
                      <strong>Email:</strong> {userData.email}
                    </Card.Text>
                  </Card.Body>
                </Card>
              )}

              {selectedSection === "bookings" && bookings.length > 0 ? (
                <Card className="p-4">
                  <Card.Body>
                    <Card.Title><FaHistory className="me-2" /> Previous Bookings</Card.Title>
                    <Table striped bordered hover responsive>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>PG Name</th>
                          <th>Booking Date</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bookings.map((booking, index) => (
                          <tr key={booking.id}>
                            <td>{index + 1}</td>
                            <td>{booking.pgName}</td>
                            <td>{booking.bookingDate}</td>
                            <td>
                              <span
                                style={{
                                  fontWeight: "bold",
                                  color:
                                    booking.status === "Confirmed"
                                      ? "green"
                                      : booking.status === "Rejected"
                                      ? "red"
                                      : "orange"
                                }}
                              >
                                {booking.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              ) : (
                selectedSection === "bookings" && <Alert variant="warning">No previous bookings found.</Alert>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
