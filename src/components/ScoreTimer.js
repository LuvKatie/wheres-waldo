import React, { useEffect, useContext } from "react";
import "../styles/header.css";
import { AppContext } from "../ContextProvider";

const ScoreTimer = () => {
  const { timer, setTimer, startTimer } = useContext(AppContext);

  useEffect(() => {
    if (!startTimer) {
      return;
    }

    const interval = setInterval(() => {
      setTimer((seconds) => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTimer]);

  return (
    <span data-testid="highscore-timer" id="highscore-timer">
      {timer}
    </span>
  );
};

export default ScoreTimer;
