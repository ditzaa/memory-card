import ScoreBoard from "./ScoreBoard";
import "../styles/header.css";

function Header() {
  return (
    <>
      <h1>Memory Card Game</h1>
      <ScoreBoard></ScoreBoard>
      <h4>
        Get points by clicking on a different image each time. You'll lose all
        points if you don't!
      </h4>
    </>
  );
}

export default Header;
