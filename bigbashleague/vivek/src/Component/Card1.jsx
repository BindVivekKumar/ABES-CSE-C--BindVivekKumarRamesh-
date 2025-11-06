import React from "react";

function Cardh({ name, edu }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        width: "250px",
        textAlign: "center",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        margin: "20px auto",
      }}
    >
      <h1 style={{ fontSize: "20px", marginBottom: "10px" }}>{name}</h1>

      <img
        src="https://cdn.create.vista.com/api/media/small/622625848/stock-photo-pizza-traditional-italian-cuisine-fast-food-gourmet-fresh-delicious-homemade"
        alt="Example"
        width="200"
        height="150"
        style={{
          borderRadius: "8px",
          margin: "10px 0",
          objectFit: "cover",
        }}
      />

      <h2 style={{ fontSize: "18px", color: "#555" }}>{edu}</h2>
    </div>
  );
}

export default Cardh;
