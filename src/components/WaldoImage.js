import React from "react";
import "../styles/waldoimage.css";
import pokemonWaldo from "../images/pokemon.jpg";

const WaldoImage = () => {
  return (
    <>
      <img aria-label="pokemon-waldo" src={pokemonWaldo} id="waldo-image"></img>
      <div data-testid="image-cover" className="image-cover cover">
        <button aria-label="start-game" id="start-game">
          Start
        </button>
      </div>
    </>
  );
};

export default WaldoImage;
