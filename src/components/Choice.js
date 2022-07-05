import "./Choice.css";

// Choice component will include the img that represents the choice as an icon,
// its value as a string, and have an onClick prop that will trigger the function
//when any icons are pressed (as a selection made by user)
export const Choice = ({ value, choiceIcon, onClick }) => {
  return (
    <div value={value} onClick={onClick}>
      <img className="choice-icon" src={choiceIcon} alt="icon" />
    </div>
  );
};