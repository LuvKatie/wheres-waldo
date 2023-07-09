import React from "react";
import "../styles/leaderboard.css";

const Leaderboard = (props) => {
  const { leaderboard } = props;

  const sortedBoard = leaderboard.sort((a, b) => a.score - b.score);

  return (
    <>
      <section aria-label="leaderboard" id="leaderboard">
        <span aria-label="board-title" className="board-title">
          Top 10 Players
        </span>
        <ul aria-label="board-list" className="board-list">
          {sortedBoard.slice(0, 9).map((player) => (
            <li key={player.name}>
              {player.name} : {player.score}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Leaderboard;
