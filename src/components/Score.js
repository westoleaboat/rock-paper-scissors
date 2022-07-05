import "./Score.css";

// Show number of wins for the user and computer during active game in progress
export const Score = ({ score }) => {
  return <h1 className="score">{score}</h1>;
};