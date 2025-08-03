import React, { useState } from "react";
import ListofPlayers from "./ListofPlayers";
import IndianPlayers from "./IndianPlayers";

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div>
      <h1>Cricket App</h1>
      <button onClick={() => setFlag(!flag)}>
        {flag ? "Show IndianPlayers" : "Show ListofPlayers"}
      </button>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
