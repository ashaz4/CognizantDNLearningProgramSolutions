import React, { useState } from "react";

function App() {
  // State for counter
  const [counter, setCounter] = useState(0);

  // Method to increment and say Hello!
  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
    sayHello();
  };

  // Method to decrement
  const handleDecrement = () => setCounter((prev) => prev - 1);

  // This method says Hello with a message
  const sayHello = () => {
    alert("Hello! Member1");
  };

  // Say Welcome, taking an argument
  const sayWelcome = (msg) => {
    alert(msg);
  };

  // Synthetic event handler for button click
  const handleSynthetic = (e) => {
    alert("I was clicked");
  };

  return (
    <div style={{ margin: "20px" }}>
      <div>
        <span style={{ fontSize: "1.3em" }}>{counter}</span>
        <br /><br />
        <button onClick={handleIncrement}>Increment</button>
        <br />
        <button onClick={handleDecrement} style={{ marginTop: 5 }}>Decrement</button>
        <br />
        <button onClick={() => sayWelcome("welcome")} style={{ marginTop: 5 }}>Say welcome</button>
        <br />
        <button onClick={handleSynthetic} style={{ marginTop: 5 }}>Click on me</button>
      </div>

      {/* --- Currency Convertor Below --- */}
      <CurrencyConvertor />
    </div>
  );
}

// --- Step 3: CurrencyConvertor Component ---
function CurrencyConvertor() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  // Hard-coded conversion: 1 Euro = 80 Rupees
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currency && amount) {
      if (currency.toLowerCase() === "euro") {
        // Converting rupee to euro
        // Example: 80 Rupees --> 1 Euro
        const euroValue = (parseFloat(amount) / 80).toFixed(2);
        alert(`Converting to Euro. Amount is €${euroValue}`);
      } else if (currency.toLowerCase() === "rupees" || currency.toLowerCase() === "inr") {
        // Converting euro to rupee
        // Example: 1 Euro --> 80 Rupees
        const rupeeValue = (parseFloat(amount) * 80).toFixed(2);
        alert(`Converting to Rupees. Amount is ₹${rupeeValue}`);
      } else {
        alert("Currently only Euro/Rupees conversion is supported.");
      }
    } else {
      alert("Please enter both amount and currency.");
    }
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <h1 style={{ color: "green" }}>Currency Convertor!!!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount:&nbsp;</label>
          <input value={amount} onChange={e => setAmount(e.target.value)} />
        </div>
        <div>
          <label>Currency:&nbsp;</label>
          <input value={currency} onChange={e => setCurrency(e.target.value)} />
        </div>
        <button type="submit" style={{ marginTop: 10 }}>Submit</button>
      </form>
    </div>
  );
}

export default App;
