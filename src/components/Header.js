import React, { useContext } from "react";
import "../styles/header.css";
import mew from "../images/mew.png";
import abra from "../images/abra.png";
import ponyta from "../images/ponyta.png";
import eevee from "../images/eevee.png";
import ScoreTimer from "./ScoreTimer";
import { AppContext } from "../ContextProvider";

const Header = () => {
  const { startTimer } = useContext(AppContext);

  return (
    <nav aria-label="navigation bar">
      <div id="sprite-container">
        <img aria-label="mew-sprite" src={mew}></img>
        <img aria-label="abra-sprite" src={abra}></img>
        <img aria-label="ponyta-sprite" src={ponyta}></img>
        <img aria-label="eevee-sprite" src={eevee}></img>
      </div>
      <span aria-label="app-title" id="app-title">
        Pokemon Where's Waldo
      </span>
      {startTimer && <ScoreTimer />}
    </nav>
  );
};

export default Header;
