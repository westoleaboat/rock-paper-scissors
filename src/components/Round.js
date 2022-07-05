import "./Round.css";

// Round component will display the No rounds yet message if the game hasnt been started
export const Round = ({ userSelection, round }) => {
  return (
    <h1 className="round">
      {userSelection === "" ? "No rounds yet!" : `Round: ${round}`}
    </h1>
  );
};