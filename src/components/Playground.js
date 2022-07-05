import "./Playground.css";

// Playground component will be the wrapper component, which will hold
// both Profile component for user and Computter and the Message component between them
export const Playground = ({ children }) => {
  return <div className="play-ground">{children}</div>;
};