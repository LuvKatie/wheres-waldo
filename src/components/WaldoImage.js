import React, { useRef, useContext } from "react";
import "../styles/waldoimage.css";
import pokemonWaldo from "../images/pokemon.jpg";
import { AppContext } from "../ContextProvider";

const WaldoImage = (props) => {
  const { setStartTimer } = useContext(AppContext);
  const imageCover = useRef();
  const { pokemon } = props;

  function verifyGuess(pos) {
    const names = pokemon.map((pokemon) => pokemon.name);
    if (names.includes(pos.target.id)) {
      console.log(pos.target);
      return;
    }

    console.log("Wrong guess!");
  }

  return (
    <>
      <img
        aria-label="pokemon-waldo"
        src={pokemonWaldo}
        id="waldo-image"
        onClick={(e) => {
          verifyGuess(e);
        }}
      ></img>
      <div
        ref={imageCover}
        data-testid="image-cover"
        className="image-cover cover"
      >
        <button
          aria-label="start-game"
          id="start-game"
          onClick={(e) => {
            setStartTimer(true);
            imageCover.current.classList.toggle("cover");
            imageCover.current.classList.toggle("uncover");
            e.target.parentNode.removeChild(e.target);
          }}
        >
          Start
        </button>
      </div>
      <div id="mew" onClick={(e) => verifyGuess(e)}></div>
      <div id="abra" onClick={(e) => verifyGuess(e)}></div>
      <div id="ponyta" onClick={(e) => verifyGuess(e)}></div>
      <div id="eevee" onClick={(e) => verifyGuess(e)}></div>
    </>
  );
};

export default WaldoImage;
