import React from "react";
import "../styles/leaderboard.css";

const Leaderboard = () => {
  return (
    <>
      <section aria-label="leaderboard" id="leaderboard">
        <span aria-label="board-title" className="board-title">
          Top 10 Players
        </span>
        <ul aria-label="board-list" className="board-list">
          <li id="top-1"></li>
          <li id="top-2"></li>
          <li id="top-3"></li>
          <li id="top-4"></li>
          <li id="top-5"></li>
          <li id="top-6"></li>
          <li id="top-7"></li>
          <li id="top-8"></li>
          <li id="top-9"></li>
          <li id="top-10"></li>
        </ul>
      </section>
    </>
  );
};

export default Leaderboard;
