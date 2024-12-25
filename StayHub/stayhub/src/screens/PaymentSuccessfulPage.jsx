import React from "react";
import PaymentSuccessful_png from "../images/PaymentSuccessful_png.png";
import Payment_checkmarkImage from "../images/Payment_checkmarkImage.png";
import "bootstrap/dist/css/bootstrap.min.css";

const PaymentSuccessfulPage = () => {
  return (
    <div
      className="d-flex justify-content-between align-items-center"
      style={{
        backgroundColor: "#FEF4EA",
        height: "100vh", // Full page height
        margin: 0, // Remove default margin
        padding: 0, // Remove default padding
        overflow: "hidden", // Prevent scrollbars
      }}
    >
      {/* Payment Card - Left Side */}
      <div
        className="bg-white rounded shadow p-5 text-center"
        style={{
          maxWidth: "400px",
         
          border: "1px solid #eee",
          marginLeft: "35%", // Add space on the left
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
            transform: 'translateY(138px)' // Adjust size as needed
          }}
        />
      </div>
    </div>
  );
};

export default PaymentSuccessfulPage;
