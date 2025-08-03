import React from "react";
import "./App.css";

// 1. Office space data (object list)
const offices = [
  {
    name: "DBS",
    rent: 50000,
    address: "Chennai",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "WeWork",
    rent: 70000,
    address: "Bangalore",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Regus",
    rent: 45000,
    address: "Mumbai",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
  }
];

// 2. Main App
function App() {
  return (
    <div className="App">
      {/* Heading */}
      <h1>Office Space, at Affordable Range</h1>

      {/* Loop through office spaces */}
      {offices.map((office, idx) => (
        <div key={idx} className="office-card">
          <img
            src={office.img}
            alt="Office Space"
            width="250"
            height="180"
          />
          <h2>Name: {office.name}</h2>
          <h3
            className={office.rent <= 60000 ? "textRed" : "textGreen"}
          >
            Rent: Rs. {office.rent}
          </h3>
          <h4>Address: {office.address}</h4>
        </div>
      ))}
    </div>
  );
}

export default App;
