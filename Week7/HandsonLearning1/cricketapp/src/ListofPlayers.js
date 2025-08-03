import React from "react";

const players = [
  { name: "Player 1", score: 85 },
  { name: "Player 2", score: 60 },
  { name: "Player 3", score: 77 },
  { name: "Player 4", score: 45 },
  { name: "Player 5", score: 70 },
  { name: "Player 6", score: 30 },
  { name: "Player 7", score: 99 },
  { name: "Player 8", score: 75 },
  { name: "Player 9", score: 62 },
  { name: "Player 10", score: 88 },
  { name: "Player 11", score: 78 },
];

export default function ListofPlayers() {
  // All players
  const allPlayers = players.map((p, idx) => (
    <li key={idx}>
      {p.name} - {p.score}
    </li>
  ));

  // Players with score < 70
  const lowScorers = players.filter(p => p.score < 70);
  const lowScorersList = lowScorers.map((p, idx) => (
    <li key={idx}>
      {p.name} - {p.score}
    </li>
  ));

  return (
    <div>
      <h2>All Players</h2>
      <ul>{allPlayers}</ul>
      <h2>Players with Score Below 70</h2>
      <ul>{lowScorersList}</ul>
    </div>
  );
}
