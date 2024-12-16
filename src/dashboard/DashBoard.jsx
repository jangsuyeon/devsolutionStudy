import React from "react";

function DashBoard() {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "50px" }}>
      <div style={{ width: "200px", padding: "20px", backgroundColor: "#f8f9fa", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", borderRadius: "8px" }}>
        <h3>Card 1</h3>
        <p>Test content for Card 1</p>
      </div>
      <div style={{ width: "200px", padding: "20px", backgroundColor: "#f8f9fa", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", borderRadius: "8px" }}>
        <h3>Card 2</h3>
        <p>Test content for Card 2</p>
      </div>
    </div>
  );
}

export default DashBoard;
//  예시
