import React, { useState } from "react";

const OwnerPage = () => {
  const [hostelData] = useState([
    {
      id: 1,
      name: "Krishna House",
      description: "Spacious and affordable hostel.",
      address: "123 Pattaya Street, City",
      facilities: "WiFi, Laundry, Meals",
      price: "$200/month",
      maleBeds: 4,
      mixedBeds: 2,
      image: "https://via.placeholder.com/300x200?text=Hostel+1",
    },
    {
      id: 2,
      name: "Krishna House",
      description: "Spacious and affordable hostel.",
      address: "123 Pattaya Street, City",
      facilities: "WiFi, Laundry, Meals",
      price: "$200/month",
      maleBeds: 4,
      mixedBeds: 2,
      image: "https://via.placeholder.com/300x200?text=Hostel+2",
    },
    {
      id: 3,
      name: "Krishna House",
      description: "Spacious and affordable hostel.",
      address: "123 Pattaya Street, City",
      facilities: "WiFi, Laundry, Meals",
      price: "$200/month",
      maleBeds: 4,
      mixedBeds: 2,
      image: "https://via.placeholder.com/300x200?text=Hostel+3",
    },
    {
      id: 4,
      name: "Krishna House",
      description: "Spacious and affordable hostel.",
      address: "123 Pattaya Street, City",
      facilities: "WiFi, Laundry, Meals",
      price: "$200/month",
      maleBeds: 4,
      mixedBeds: 2,
      image: "https://via.placeholder.com/300x200?text=Hostel+4",
    },
    // Add more hostels...
  ]);

  const formStyle = {
    backgroundColor: "#fef4ea",
    fontFamily: "'Poppins', sans-serif",
  };

  const buttonStyle = {
    backgroundColor: "#FF7700",
    color: "white",
    borderColor: "#FF7700",
    fontFamily: "'Poppins', sans-serif",
  };

  return (
    <div className="container py-5 pt-0.5" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Header Section */}
      {/* <header className="text-center mb-4">
        <h1 className="fw-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>
          StayHub
        </h1>
        <p style={{ fontFamily: "'Poppins', sans-serif" }}>Manage your hostel listings efficiently.</p>
      </header> */}

      {/* Form Section */}
      <form className="mb-5" style={formStyle}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Name of PG
            </label>
            <input type="text" className="form-control" placeholder="Enter name" />
          </div>
          <div className="col-md-6">
            <label className="form-label" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Address
            </label>
            <input type="text" className="form-control" placeholder="Enter address" />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Description
          </label>
          <textarea className="form-control" rows="3" placeholder="Enter description"></textarea>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <label className="form-label" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Facilities
            </label>
            <select className="form-select">
              <option value="" disabled selected>
                Select facilities
              </option>
              <option value="WiFi">WiFi</option>
              <option value="Laundry">Laundry</option>
              <option value="Meals">Meals</option>
              <option value="Parking">Parking</option>
              <option value="Gym">Gym</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Price
            </label>
            <input type="text" className="form-control" placeholder="Enter price" />
          </div>
          <div className="col-md-4">
            <label className="form-label" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Beds
            </label>
            <select className="form-select">
              <option>Male Beds</option>
              <option>Mixed Beds</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn w-100" style={buttonStyle}>
          Add Hostel
        </button>
      </form>

      {/* Hostel Cards Section */}
      <div className="row">
        {hostelData.map((hostel) => (
          <div key={hostel.id} className="col-md-4 mb-4">
            <div
              className="card shadow-sm"
              style={{ backgroundColor: "#fef4ea", fontFamily: "'Poppins', sans-serif" }}
            >
              <img
                src={hostel.image}
                alt={hostel.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {hostel.name}
                </h5>
                <p className="card-text" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Description: {hostel.description}
                </p>
                <p className="card-text" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Address: {hostel.address}
                </p>
                <p className="card-text" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Facilities: {hostel.facilities}
                </p>
                <p className="card-text" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Price: {hostel.price}
                </p>
                <p className="card-text" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Male Beds: {hostel.maleBeds}
                </p>
                <p className="card-text" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Mixed Beds: {hostel.mixedBeds}
                </p>
                <button type="submit" className="btn w-100" style={buttonStyle}>
                  View Hostel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OwnerPage;
