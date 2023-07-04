import React from "react";
import "../styles/header.css";
import mew from "../images/mew.png";
import abra from "../images/abra.png";
import ponyta from "../images/ponyta.png";
import eevee from "../images/eevee.png";

const Header = () => {
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
      <span data-testid="highscore-timer" id="highscore-timer">
        00:00
      </span>
    </nav>
  );
};

export default Header;
