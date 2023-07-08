import React, { useRef, useContext } from "react";
import "../styles/waldoimage.css";
import pokemonWaldo from "../images/pokemon.jpg";
import { AppContext } from "../ContextProvider";
import SpriteMenu from "./SpriteMenu";

const WaldoImage = (props) => {
  const { setStartTimer } = useContext(AppContext);
  const imageCover = useRef();
  const spriteMenu = document.getElementById("sprite-menu");
  const { pokemon } = props;

  function verifyGuess(pos) {
    displayMenu(pos);

    const names = pokemon.map((pokemon) => pokemon.name);
    if (names.includes(pos.target.id)) {
      console.log(pos.target);
      return;
    }

    console.log("Wrong guess!");
  }

  function displayMenu(pos) {
    if (spriteMenu.classList.contains("hideSprites")) {
      spriteMenu.classList.toggle("hideSprites");
      spriteMenu.classList.toggle("showSprites");
      spriteMenu.style.top = `${pos.clientY - 100}px`;
      spriteMenu.style.left = `${pos.clientX - 250}px`;
      return;
    }

    spriteMenu.classList.toggle("hideSprites");
    spriteMenu.classList.toggle("showSprites");
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
      <SpriteMenu />
    </>
  );
};

export default WaldoImage;
