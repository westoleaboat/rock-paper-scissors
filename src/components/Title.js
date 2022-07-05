import { settings } from "../configs/game";
import "./Title.css";

// Display name of game
export const Title = () => {
  return <h1 className="title">{settings.gameName}</h1>;
};