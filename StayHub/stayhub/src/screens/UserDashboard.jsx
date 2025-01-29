import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaUser, FaHistory, FaCalendarAlt } from "react-icons/fa";
import { Card, Spinner, Alert } from "react-bootstrap";

const UserDashboard = () => {
  const [selectedSection, setSelectedSection] = useState("profile");
  const [userData, setUserData] = useState(null);
  const [previousBookings, setPreviousBookings] = useState([]);
  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user details and bookings from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get("http://localhost:8080/api/user/profile");
        const previousBookingsResponse = await axios.get("http://localhost:8080/api/bookings/previous");
        const upcomingBookingsResponse = await axios.get("http://localhost:8080/api/bookings/upcoming");

        setUserData(userResponse.data);
        setPreviousBookings(previousBookingsResponse.data);
        setUpcomingBookings(upcomingBookingsResponse.data);
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {/* Left Panel */}
        <div className="col-md-3 p-3 shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
          <h4 className="mb-3">Dashboard</h4>
          <ul className="list-group">
            <li
              className={`list-group-item ${selectedSection === "profile" ? "active" : ""}`}
              onClick={() => setSelectedSection("profile")}
              style={{ cursor: "pointer", backgroundColor: selectedSection === "profile" ? "#FF7700" : "", color: selectedSection === "profile" ? "#fff" : "" }}
            >
              <FaUser className="me-2" /> Profile
            </li>
            <li
              className={`list-group-item ${selectedSection === "previous-bookings" ? "active" : ""}`}
              onClick={() => setSelectedSection("previous-bookings")}
              style={{ cursor: "pointer", backgroundColor: selectedSection === "previous-bookings" ? "#FF7700" : "", color: selectedSection === "previous-bookings" ? "#fff" : "" }}
            >
              <FaHistory className="me-2" /> Previous Bookings
            </li>
            <li
              className={`list-group-item ${selectedSection === "upcoming-bookings" ? "active" : ""}`}
              onClick={() => setSelectedSection("upcoming-bookings")}
              style={{ cursor: "pointer", backgroundColor: selectedSection === "upcoming-bookings" ? "#FF7700" : "", color: selectedSection === "upcoming-bookings" ? "#fff" : "" }}
            >
              <FaCalendarAlt className="me-2" /> Upcoming Bookings
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
                <Card className="p-4 shadow-sm">
                  <h4 className="mb-3">User Profile</h4>
                  <p><strong>Name:</strong> {userData.name}</p>
                  <p><strong>Email:</strong> {userData.email}</p>
                  <p><strong>Phone:</strong> {userData.phone}</p>
                </Card>
              )}

              {selectedSection === "previous-bookings" && (
                <Card className="p-4 shadow-sm">
                  <h4 className="mb-3">Previous Bookings</h4>
                  {previousBookings.length > 0 ? (
                    <ul>
                      {previousBookings.map((booking) => (
                        <li key={booking.id}>
                          {booking.pgName} - {booking.date}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No previous bookings available.</p>
                  )}
                </Card>
              )}

              {selectedSection === "upcoming-bookings" && (
                <Card className="p-4 shadow-sm">
                  <h4 className="mb-3">Upcoming Bookings</h4>
                  {upcomingBookings.length > 0 ? (
                    <ul>
                      {upcomingBookings.map((booking) => (
                        <li key={booking.id}>
                          {booking.pgName} - {booking.date}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No upcoming bookings available.</p>
                  )}
                </Card>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};


export default UserDashboard;
