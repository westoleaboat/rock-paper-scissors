// import settings object to access its values
import { settings } from "../configs/game";
import "./User.css";

// User component logic is based on two conditions,
// if no selection by user, display Pick one!, if game is active,
// display selected choice
// if user wins, display victory trophy
export const User = ({ userScore, userSelection, trophyIcon, children }) => {
  return (
    <div className="user-card">
      <h1>{settings.userName}</h1>
      {userScore < settings.winTarget ? (
        <>
          <div className="choice-grid">{children}</div>
          <h3>
            {userSelection === ""
            ? "Pick one!"
            : `Your choice: ${userSelection}`}
          </h3>
        </>
      ) : (
        <>
          <img src={trophyIcon} alt="trophy" />
          <h3>Victory!</h3>
        </>
      )}
   </div>
  );
};