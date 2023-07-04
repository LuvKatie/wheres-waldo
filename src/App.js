import React from "react";
import "./styles/app.css";
import Header from "./components/Header";
import GameGuide from "./components/GameGuide";
import WaldoImage from "./components/WaldoImage";

function App() {
  return (
    <div className="main-container">
      <Header />
      <GameGuide />
      <main className="image-container" aria-label="image-container">
        <WaldoImage />
      </main>
    </div>
  );
}

export default App;
