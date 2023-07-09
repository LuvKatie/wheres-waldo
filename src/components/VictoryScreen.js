import React, { useRef } from "react";
import "../styles/victoryscreen.css";

const VictoryScreen = (props) => {
  const { score, supabase, leaderboard } = props;
  const nameInput = useRef();

  async function submitScore(e) {
    e.preventDefault();
    console.log(nameInput.current.value);
    await supabase.from("leaderboard").insert({
      id: leaderboard.length + 1,
      name: nameInput.current.value,
      score: score,
    });
  }
  return (
    <>
      <div data-testid="victory" id="victory">
        <p id="player-score">
          Congratulations! Your final score is: {score} seconds
        </p>
        <input
          type="text"
          placeholder="Bug"
          id="name-input"
          minLength={1}
          maxLength={16}
          ref={nameInput}
        ></input>
        <button id="submit-score" onClick={(e) => submitScore(e)}>
          Submit Score
        </button>
      </div>
    </>
  );
};

export default VictoryScreen;
