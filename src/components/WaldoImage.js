import React from "react";
import "../styles/waldoimage.css";
import pokemonWaldo from "../images/pokemon.jpg";

const WaldoImage = () => {
  return (
    <>
      <img aria-label="pokemon-waldo" src={pokemonWaldo} id="waldo-image"></img>
    </>
  );
};

export default WaldoImage;
