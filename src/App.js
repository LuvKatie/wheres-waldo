import React from "react";
import "./styles/app.css";
import Header from "./components/Header";
import GameGuide from "./components/GameGuide";
import WaldoImage from "./components/WaldoImage";
import ContextProvider from "./ContextProvider";

function App() {
  return (
    <ContextProvider>
      <div className="main-container">
        <Header />
        <GameGuide />
        <main className="image-container" aria-label="image-container">
          <WaldoImage />
        </main>
      </div>
    </ContextProvider>
  );
}

export default App;
