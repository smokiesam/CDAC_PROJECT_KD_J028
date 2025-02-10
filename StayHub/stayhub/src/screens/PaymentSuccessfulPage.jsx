import React from "react";
import { useNavigate } from "react-router-dom";
import PaymentSuccessful_png from "../images/PaymentSuccessful_png.png";
import Payment_checkmarkImage from "../images/Payment_checkmarkImage.png";
import "bootstrap/dist/css/bootstrap.min.css";

const PaymentSuccessfulPage = () => {
  const navigate = useNavigate();

  const handleShowBookingsClick = () => {
    navigate("/userdashboard");
  };

  return (
    <div
      className="d-flex justify-content-between align-items-center"
      style={{
        backgroundColor: "#FEF4EA",
        height: "100vh", 
        margin: 0, 
        padding: 0, 
        overflow: "hidden", 
      }}
    >
      {/* Payment Card - Left Side */}
      <div
        className="bg-white rounded shadow p-5 text-center"
        style={{
          maxWidth: "400px",
          border: "1px solid #eee",
          marginLeft: "35%", 
        }}
      >
        <div className="text-success mb-4 d-flex justify-content-center">
          <img
            src={Payment_checkmarkImage}
            alt="Checkmark"
            style={{ maxWidth: "80px" }}
          />
        </div>
        <h2 className="mt-3 text-center">Payment successful!</h2>
        <button
          className="btn"
          style={{
            backgroundColor: "#FF7700",
            color: "white",
            padding: "15px 80px",
            borderRadius: "5px",
          }}
          onClick={handleShowBookingsClick}
        >
          SHOW BOOKINGS
        </button>
      </div>

      {/* Illustration - Right Side */}
      <div style={{ marginRight: "5%" }}>
        <img
          src={PaymentSuccessful_png}
          alt="Payment Illustration"
          className="img-fluid"
          style={{
            maxWidth: "500px",
            transform: 'translateY(138px)', 
          }}
        />
      </div>
    </div>
  );
};

export default PaymentSuccessfulPage;
