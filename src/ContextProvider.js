import React, { createContext, useState } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const [timer, setTimer] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [selected, setSelected] = useState(false);
  const [victory, setVictory] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <AppContext.Provider
      value={{
        timer: timer,
        setTimer: setTimer,
        startTimer: startTimer,
        setStartTimer: setStartTimer,
        selected: selected,
        setSelected: setSelected,
        victory: victory,
        setVictory: setVictory,
        score: score,
        setScore: setScore,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
