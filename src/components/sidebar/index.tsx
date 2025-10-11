import React from "react";

export const Sidebar = () => {
  return (
    <div>
      <h3>Inventory and Stats</h3>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          border: "1px solid #333",
          padding: "1rem 2rem",
          borderRadius: "1rem",
          fontSize: "1rem",
          margin: "1rem",
        }}
      >
        <p style={{ flex: "1", textAlign: "right" }}>Your WL tier:</p>
        <p style={{ flex: "1", textAlign: "left" }}>XX.XX</p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          border: "1px solid #333",
          padding: "1rem 2rem",
          borderRadius: "1rem",
          fontSize: "1rem",
          margin: "1rem",
        }}
      >
        <p style={{ flex: "1", textAlign: "right" }}>Your Total Deposit:</p>
        <p style={{ flex: "1", textAlign: "left" }}>XX.XX</p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          border: "1px solid #333",
          padding: "1rem 2rem",
          borderRadius: "1rem",
          fontSize: "1rem",
          margin: "1rem",
        }}
      >
        <p style={{ flex: "1", textAlign: "right" }}>$STRAND to Receive:</p>
        <p style={{ flex: "1", textAlign: "left" }}>XX.XX</p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          border: "1px solid #333",
          padding: "1rem 2rem",
          borderRadius: "1rem",
          fontSize: "1rem",
          margin: "1rem",
        }}
      >
        <p style={{ flex: "1", textAlign: "right" }}>Total Discount Applied:</p>
        <p style={{ flex: "1", textAlign: "left" }}>XX.XX</p>
      </div>
    </div>
  );
};
