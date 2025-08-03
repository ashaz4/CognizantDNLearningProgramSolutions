import React from "react";

// a. Two arrays: T20players and RanjiTrophyPlayers
const T20players = ["Rohit Sharma", "Virat Kohli", "Suryakumar Yadav"];
const RanjiTrophyPlayers = ["Cheteshwar Pujara", "Ajinkya Rahane", "Hanuma Vihari"];

// b. Merge both arrays using the spread operator
const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

// Destructure for Odd (1st, 3rd, 5th) and Even (2nd, 4th, 6th) players
const [odd1, even1, odd2, even2, odd3, even3] = mergedPlayers;

export default function IndianPlayers() {
  return (
    <div>
      <h2>Merged Indian Players:</h2>
      <ul>
        {mergedPlayers.map((name, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>
      <h2>Odd Team Players</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        <li>{odd3}</li>
      </ul>
      <h2>Even Team Players</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        <li>{even3}</li>
      </ul>
    </div>
  );
}
