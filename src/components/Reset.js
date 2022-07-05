import { settings } from "../configs/game";
import "./Reset.css";

// reset component make sure user can restart the game,
// will be displayed in only two states, when game is in progress or when game is finished
// if game finishes, button text will change from reset to play again
export const Reset = ({ onClick, userSelection, userScore, pcScore }) => {
  return (
    userSelection !== "" && (
      <div onClick={onClick} className="reset-btn">
        <h3>
          {userScore === settings.winTarget || pcScore === settings.winTarget
            ? "Play again"
            : "Reset"}
        </h3>
      </div>
    )
  );
};