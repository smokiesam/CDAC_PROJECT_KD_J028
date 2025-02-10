import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card, Button, Form, Modal, Table } from "react-bootstrap";
import { FaHome,FaUser, FaPlus, FaList, FaEdit, FaTrash, FaCheck, FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OwnerDashboard = () => {
  const [selectedSection, setSelectedSection] = useState("profile");
  const [ownerData, setOwnerData] = useState(null);
  const [pgList, setPgList] = useState([]);
  const [pgData, setPgData] = useState({ name: "", location: "", rent: "" });
  const [ownerEmail, setOwnerEmail] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPg, setSelectedPg] = useState(null);
  const [pendingBookings, setPendingBookings] = useState([]); // State to store pending bookings

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        setOwnerEmail(decodedToken.sub || decodedToken.email || null);
      } catch (error) {
        console.error("Error decoding token:", error);
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const fetchPgs = useCallback(async () => {
    if (!ownerEmail) return;
    try {
      const response = await axios.get(`http://localhost:8080/api/owner/pgs?email=${ownerEmail}`);
      setPgList(response.data || []);
    } catch (error) {
      console.error("Error fetching PGs:", error);
      setPgList([]);
    }
  }, [ownerEmail]);

  const fetchPendingBookings = useCallback(async () => {
    if (!ownerEmail) return;
    try {
      const response = await axios.get(`http://localhost:8080/api/owner/bookings/pending?email=${ownerEmail}`);
      setPendingBookings(response.data || []);
    } catch (error) {
      console.error("Error fetching pending bookings:", error);
      setPendingBookings([]);
    }
  }, [ownerEmail]);

  useEffect(() => {
    if (selectedSection === "manage-pgs") {
      fetchPgs();
    } else if (selectedSection === "manage-bookings") {
      fetchPendingBookings();
    }
  }, [selectedSection, fetchPgs, fetchPendingBookings]);

  useEffect(() => {
    if (selectedSection === "profile" && ownerEmail) {
      axios.get(`http://localhost:8080/api/owners/profile?email=${ownerEmail}`)
        .then(response => setOwnerData(response.data))
        .catch(error => console.error("Error fetching owner profile:", error));
    }
  }, [selectedSection, ownerEmail]);

  const handlePgChange = (e) => {
    setPgData({ ...pgData, [e.target.name]: e.target.value });
  };

  const handleAddPg = async (e) => {
    e.preventDefault();

    if (!ownerEmail) {
      toast.error("User not logged in.");
      return;
    }

    const { name, location, rent } = pgData;
    if (!name || !location || !rent || isNaN(rent)) {
      toast.error("All fields are required, and rent must be a valid number.");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8080/api/owner/add-pg?email=${ownerEmail}`,
        { name, location, rent },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 201 || response.status === 200) {
        toast.success("PG added successfully!");
        fetchPgs();
        setPgData({ name: "", location: "", rent: "" });
      } else {
        toast.error("Unexpected response from the server.");
      }
    } catch (error) {
      console.error("Error adding PG:", error.response?.data || error.message);
      if (error.response && error.response.status >= 400) {
        toast.error(error.response?.data?.message || "Failed to add PG. Please try again.");
      }
    }
  };

  const handleDeletePg = async (pgId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/owner/delete-pg?pgId=${pgId}&email=${ownerEmail}`);
      if (response.status === 200) {
        toast.success("PG deleted successfully!");
        fetchPgs();
      } else {
        toast.error("Failed to delete PG. Unexpected response.");
      }
    } catch (error) {
      console.error("Error deleting PG:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Failed to delete PG. Please try again.");
    }
  };

  const handleEditPg = (pg) => {
    setSelectedPg(pg);
    setShowEditModal(true);
  };

  const handleUpdatePg = async (e) => {
    e.preventDefault();

    if (!ownerEmail || !selectedPg) {
      toast.error("User not logged in or PG not selected.");
      return;
    }

    const { id, name, location, rent } = selectedPg;
    if (!name || !location || !rent || isNaN(rent)) {
      toast.error("All fields are required, and rent must be a valid number.");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:8080/api/owner/update-pg/${id}?email=${ownerEmail}`,
        { name, location, rent },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        toast.success("PG updated successfully!");
        fetchPgs();
        setShowEditModal(false);
      } else {
        toast.error("Unexpected response from the server.");
      }
    } catch (error) {
      console.error("Error updating PG:", error.response?.data || error.message);
      if (error.response && error.response.status >= 400) {
        toast.error(error.response?.data?.message || "Failed to update PG. Please try again.");
      }
    }
  };

  const handleApproveBooking = async (bookingId) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/bookings/${bookingId}/status/APPROVED`
      );

      if (response.status === 200) {
        toast.success("Booking approved successfully!");
        fetchPendingBookings(); // Refresh pending bookings
      } else {
        toast.error("Failed to approve booking.");
      }
    } catch (error) {
      console.error("Error approving booking:", error);
      toast.error("Failed to approve booking. Please try again.");
    }
  };

  const handleRejectBooking = async (bookingId) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/bookings/${bookingId}/status/REJECTED`
      );

      if (response.status === 200) {
        toast.success("Booking rejected successfully!");
        fetchPendingBookings(); // Refresh pending bookings
      } else {
        toast.error("Failed to reject booking.");
      }
    } catch (error) {
      console.error("Error rejecting booking:", error);
      toast.error("Failed to reject booking. Please try again.");
    }
  };

  return (
    <div className="container-fluid mt-4">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="row">
        <div className="col-md-3 p-3 bg-light shadow-sm">
        <Button variant="secondary" className="mb-3" onClick={() => navigate(-1)}>← Back</Button>
          <h4>Owner Dashboard</h4>
          <button
            className="btn btn-primary w-100 mb-3 d-flex align-items-center justify-content-center"
            onClick={() => navigate("/homepage")}
          >
            <FaHome className="me-2" /> Home
          </button>
          <ul className="list-group">
            <li className={`list-group-item ${selectedSection === "profile" ? "active" : ""}`} onClick={() => setSelectedSection("profile")} style={{ cursor: "pointer" }}>
              <FaUser className="me-2" /> Profile
            </li>
            <li className={`list-group-item ${selectedSection === "add-pg" ? "active" : ""}`} onClick={() => setSelectedSection("add-pg")} style={{ cursor: "pointer" }}>
              <FaPlus className="me-2" /> Add PG
            </li>
            <li className={`list-group-item ${selectedSection === "manage-pgs" ? "active" : ""}`} onClick={() => setSelectedSection("manage-pgs")} style={{ cursor: "pointer" }}>
              <FaList className="me-2" /> Manage PGs
            </li>
            <li className={`list-group-item ${selectedSection === "manage-bookings" ? "active" : ""}`} onClick={() => setSelectedSection("manage-bookings")} style={{ cursor: "pointer" }}>
              <FaList className="me-2" /> Manage Bookings
            </li>
          </ul>
        </div>

        <div className="col-md-9 p-4">
          {selectedSection === "profile" && ownerData && (
            <Card className="p-4">
              <Card.Body>
                <Card.Title><FaUser className="me-2" /> Owner Profile</Card.Title>
                <Card.Text>
                  <strong>First Name:</strong> {ownerData.firstName} <br />
                  <strong>Last Name:</strong> {ownerData.lastName} <br />
                  <strong>Email:</strong> {ownerData.email}
                </Card.Text>
              </Card.Body>
            </Card>
          )}

          {selectedSection === "add-pg" && (
            <Card className="p-4">
              <Card.Body>
                <Card.Title><FaPlus className="me-2" /> Add PG</Card.Title>
                <Form onSubmit={handleAddPg}>
                  <Form.Group className="mb-3">
                    <Form.Label>PG Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter PG Name" value={pgData.name} onChange={handlePgChange} />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" name="location" placeholder="Enter PG Location" value={pgData.location} onChange={handlePgChange} />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Rent (per month)</Form.Label>
                    <Form.Control type="number" name="rent" placeholder="Enter Rent Amount" value={pgData.rent} onChange={handlePgChange} />
                  </Form.Group>

                  <Button variant="primary" type="submit">Add PG</Button>
                </Form>
              </Card.Body>
            </Card>
          )}

          {selectedSection === "manage-pgs" && (
            <Card className="p-4">
              <Card.Body>
                <Card.Title><FaList className="me-2" /> Manage PGs</Card.Title>
                {pgList.length > 0 ? (
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>PG Name</th>
                        <th>Location</th>
                        <th>Rent (per month)</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pgList.map((pg, index) => (
                        <tr key={index}>
                          <td>{pg.name}</td>
                          <td>{pg.location}</td>
                          <td>₹{pg.rent}</td>
                          <td>
                            <Button variant="warning" className="me-2" onClick={() => handleEditPg(pg)}>
                              <FaEdit /> Edit
                            </Button>
                            <Button variant="danger" onClick={() => handleDeletePg(pg.id)}>
                              <FaTrash /> Delete
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                ) : (
                  <p>No PGs found.</p>
                )}
              </Card.Body>
            </Card>
          )}

        {selectedSection === "manage-bookings" && (
            <Card className="p-4">
              <Card.Body>
                <Card.Title><FaList className="me-2" /> Manage Bookings</Card.Title>
                {pendingBookings.length > 0 ? (
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Booking ID</th>
                        <th>PG Name</th>
                        <th>User Email</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pendingBookings.map((booking, index) => (
                        <tr key={index}>
                          <td>{booking.id}</td>
                          <td>{booking.pgName}</td>
                          <td>{booking.userEmail}</td>
                          <td>{booking.status}</td>
                          <td>
                            <Button variant="success" className="me-2" onClick={() => handleApproveBooking(booking.id)}>
                              <FaCheck /> Approve
                            </Button>
                            <Button variant="danger" onClick={() => handleRejectBooking(booking.id)}>
                              <FaTimes /> Reject
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                ) : (
                  <p>No pending bookings found.</p>
                )}
              </Card.Body>
            </Card>
          )}
        </div>
      </div>

      {/* Edit PG Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit PG</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPg && (
            <Form onSubmit={handleUpdatePg}>
              <Form.Group className="mb-3">
                <Form.Label>PG Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={selectedPg.name}
                  onChange={(e) => setSelectedPg({ ...selectedPg, name: e.target.value })}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  value={selectedPg.location}
                  onChange={(e) => setSelectedPg({ ...selectedPg, location: e.target.value })}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Rent (per month)</Form.Label>
                <Form.Control
                  type="number"
                  name="rent"
                  value={selectedPg.rent}
                  onChange={(e) => setSelectedPg({ ...selectedPg, rent: e.target.value })}
                />
              </Form.Group>

              <Button variant="primary" type="submit">Update PG</Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default OwnerDashboard;