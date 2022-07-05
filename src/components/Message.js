import "./Message.css";

// Message component will display the "VS" message on the initial launch of the game,
// to indicate game has not been started
// when game started, it will show results of individual round and final status of game.
export const Message = ({ userSelection, message }) => {
  return (
    <div className="message-box">
      <h2>{userSelection === "" ? "VS" : message}</h2>
    </div>
  );
};