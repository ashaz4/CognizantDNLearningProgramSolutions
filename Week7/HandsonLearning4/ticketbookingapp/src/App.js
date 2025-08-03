import React, { useState } from "react";

// Flight data
const flights = [
  { id: 1, from: "Chennai", to: "Mumbai", price: 5000, time: "10:00 AM" },
  { id: 2, from: "Delhi", to: "Goa", price: 7000, time: "1:30 PM" },
  { id: 3, from: "Bangalore", to: "Kolkata", price: 6000, time: "5:15 PM" }
];

// Guest Page
function GuestPage({ onLogin }) {
  return (
    <div>
      <h2>Guest Page - Browse Flights</h2>
      <FlightList canBook={false} />
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

// User Page
function UserPage({ onLogout }) {
  return (
    <div>
      <h2>User Page - Book Your Flight</h2>
      <FlightList canBook={true} />
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

// Flight List displays all flights. If canBook is true, shows Book button.
function FlightList({ canBook }) {
  const handleBook = (flight) => {
    alert(`Ticket booked for ${flight.from} to ${flight.to}!`);
  };

  return (
    <table border={1} cellPadding={8}>
      <thead>
        <tr>
          <th>From</th><th>To</th><th>Price</th><th>Departure Time</th>
          {canBook && <th>Action</th>}
        </tr>
      </thead>
      <tbody>
        {flights.map(flight => (
          <tr key={flight.id}>
            <td>{flight.from}</td>
            <td>{flight.to}</td>
            <td>₹{flight.price}</td>
            <td>{flight.time}</td>
            {canBook && (
              <td>
                <button onClick={() => handleBook(flight)}>Book Ticket</button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div style={{ margin: "30px", fontFamily: "sans-serif" }}>
      <h1>Ticket Booking App</h1>
      {loggedIn ? (
        <UserPage onLogout={() => setLoggedIn(false)} />
      ) : (
        <GuestPage onLogin={() => setLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
