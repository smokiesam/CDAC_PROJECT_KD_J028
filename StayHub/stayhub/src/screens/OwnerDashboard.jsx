import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Form } from "react-bootstrap";
import { FaUser, FaPlus, FaList } from "react-icons/fa";

const OwnerDashboard = () => {
  const [selectedSection, setSelectedSection] = useState("profile");
  const [userData, setUserData] = useState(null);
  const [pgList, setPgList] = useState([]);

  // Fetch user details on component mount
  useEffect(() => {
    axios
      .get("/api/auth/user") // Replace with actual backend endpoint
      .then((response) => setUserData(response.data))
      .catch((error) => console.error("Error fetching user:", error));
  }, []);

  // Fetch PGs when "Manage PGs" is selected
  useEffect(() => {
    if (selectedSection === "manage-pgs") {
      axios
        .get("/api/owner/pgs") // Replace with actual backend endpoint
        .then((response) => setPgList(response.data))
        .catch((error) => console.error("Error fetching PGs:", error));
    }
  }, [selectedSection]);

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-md-3 p-3 bg-light shadow-sm">
          <h4>Owner Dashboard</h4>
          <ul className="list-group">
            <li
              className={`list-group-item ${selectedSection === "profile" ? "active" : ""}`}
              onClick={() => setSelectedSection("profile")}
              style={{ cursor: "pointer" }}
            >
              <FaUser className="me-2" /> Profile
            </li>
            <li
              className={`list-group-item ${selectedSection === "add-pg" ? "active" : ""}`}
              onClick={() => setSelectedSection("add-pg")}
              style={{ cursor: "pointer" }}
            >
              <FaPlus className="me-2" /> Add PG
            </li>
            <li
              className={`list-group-item ${selectedSection === "manage-pgs" ? "active" : ""}`}
              onClick={() => setSelectedSection("manage-pgs")}
              style={{ cursor: "pointer" }}
            >
              <FaList className="me-2" /> Manage PGs
            </li>
          </ul>
        </div>

        {/* Right Content Panel */}
        <div className="col-md-9 p-4">
          {/* Profile Section */}
          {selectedSection === "profile" && (
            <Card className="p-4">
              <Card.Body>
                <Card.Title><FaUser className="me-2" /> Owner Profile</Card.Title>
                {userData ? (
                  <Card.Text>
                    <strong>Name:</strong> {userData.name} <br />
                    <strong>Email:</strong> {userData.email} <br />
                    <strong>Phone:</strong> {userData.phone}
                  </Card.Text>
                ) : (
                  <p>Loading profile...</p>
                )}
              </Card.Body>
            </Card>
          )}

          {/* Add PG Section */}
          {selectedSection === "add-pg" && (
            <Card className="p-4">
              <Card.Body>
                <Card.Title><FaPlus className="me-2" /> Add PG Details</Card.Title>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>PG Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter PG Name" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter PG Location" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Rent (per month)</Form.Label>
                    <Form.Control type="number" placeholder="Enter Rent Amount" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          )}

          {/* Manage PGs Section */}
          {selectedSection === "manage-pgs" && (
            <Card className="p-4">
              <Card.Body>
                <Card.Title><FaList className="me-2" /> Manage PG Listings</Card.Title>
                {pgList.length > 0 ? (
                  <ul className="list-group">
                    {pgList.map((pg) => (
                      <li key={pg.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {pg.name} - {pg.location} - ₹{pg.rent}
                        <div>
                          <Button variant="warning" className="me-2">Edit</Button>
                          <Button variant="danger">Delete</Button>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No PGs added yet.</p>
                )}
              </Card.Body>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;
