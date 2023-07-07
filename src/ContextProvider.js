import React, { createContext, useState } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const [timer, setTimer] = useState(0);
  const [startTimer, setStartTimer] = useState(false);

  return (
    <AppContext.Provider
      value={{
        timer: timer,
        setTimer: setTimer,
        startTimer: startTimer,
        setStartTimer: setStartTimer,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
