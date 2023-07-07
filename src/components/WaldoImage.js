import React, { useRef, useContext } from "react";
import "../styles/waldoimage.css";
import pokemonWaldo from "../images/pokemon.jpg";
import { AppContext } from "../ContextProvider";

const WaldoImage = () => {
  const { setStartTimer } = useContext(AppContext);
  const imageCover = useRef();

  function grabCoords(pos) {
    console.log(pos.target);
  }

  return (
    <>
      <img
        aria-label="pokemon-waldo"
        src={pokemonWaldo}
        id="waldo-image"
        onClick={(e) => {
          grabCoords(e);
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
      <div id="mew-box" onClick={(e) => grabCoords(e)}></div>
      <div id="abra-box" onClick={(e) => grabCoords(e)}></div>
      <div id="ponyta-box" onClick={(e) => grabCoords(e)}></div>
      <div id="eevee-box" onClick={(e) => grabCoords(e)}></div>
    </>
  );
};

export default WaldoImage;
