import React, { useRef, useContext, useEffect } from "react";
import "../styles/waldoimage.css";
import pokemonWaldo from "../images/pokemon.jpg";
import { AppContext } from "../ContextProvider";
import SpriteMenu from "./SpriteMenu";

const WaldoImage = (props) => {
  const { selected, setSelected, setStartTimer } = useContext(AppContext);
  const imageCover = useRef();
  const spriteMenu = document.getElementById("sprite-menu");
  const { pokemon, setVictory, setScore } = props;

  function verifyGuess(option) {
    const optionName = option.parentNode.lastChild.textContent.toLowerCase();
    if (selected === optionName) {
      correctGuess(option, optionName);
      return;
    }
    wrongGuess();
  }

  function correctGuess(option, optionName) {
    const headerSprite = document.querySelector(`.${optionName}`);
    headerSprite.classList.add("correct-guess");
    document.getElementById(`${optionName}`).classList.remove("hide-hitbox");
    checkWin();
  }

  function wrongGuess() {
    const sprites = document.querySelectorAll("#sprite-container img");
    for (let i = 0; i < sprites.length; i++) {
      if (!sprites[i].classList.contains("correct-guess")) {
        sprites[i].classList.add("wrong-guess");
        setTimeout(() => {
          sprites[i].classList.remove("wrong-guess");
        }, 1000);
      }
    }
  }

  function checkWin() {
    const sprites = document.querySelectorAll("#sprite-container img");
    for (let i = 0; i < sprites.length; i++) {
      if (!sprites[i].classList.contains("correct-guess")) {
        return;
      }
    }
    const timer = document.getElementById("highscore-timer");
    timer.remove();
    setTimeout(() => {
      setScore(timer.textContent);
      setVictory(true);
    }, 1000);
  }

  function handleClick(pos) {
    changeState(pos);
    displayMenu(pos);
  }

  function changeState(pos) {
    const names = pokemon.map((pokemon) => pokemon.name);
    if (names.includes(pos.target.id)) {
      setSelected(`${pos.target.id}`);
      return;
    }

    setSelected("wrong");
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
          handleClick(e);
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
      <div
        className="hide-hitbox"
        id="mew"
        onClick={(e) => handleClick(e)}
      ></div>
      <div
        className="hide-hitbox"
        id="abra"
        onClick={(e) => handleClick(e)}
      ></div>
      <div
        className="hide-hitbox"
        id="ponyta"
        onClick={(e) => handleClick(e)}
      ></div>
      <div
        className="hide-hitbox"
        id="eevee"
        onClick={(e) => handleClick(e)}
      ></div>
      <SpriteMenu verifyGuess={verifyGuess} />
    </>
  );
};

export default WaldoImage;
