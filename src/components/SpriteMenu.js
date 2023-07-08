import React from "react";
import "../styles/waldoimage.css";
import mew from "../images/mew.png";
import abra from "../images/abra.png";
import ponyta from "../images/ponyta.png";
import eevee from "../images/eevee.png";
import "../styles/spritemenu.css";

const SpriteMenu = () => {
  return (
    <div data-testid="sprite-menu" className="hideSprites" id="sprite-menu">
      <div aria-label="mew-sprite-menu" className="sprite-option">
        <img src={mew} alt="Icon of Mew" id="mew-icon" />
        <p>Mew</p>
      </div>
      <div aria-label="abra-sprite-menu" className="sprite-option">
        <img src={abra} alt="Icon of Abra" id="abra-icon" />
        <p>Abra</p>
      </div>
      <div aria-label="eevee-sprite-menu" className="sprite-option">
        <img src={eevee} alt="Icon of Eevee" id="eevee-icon" />
        <p>Eevee</p>
      </div>
      <div aria-label="ponyta-sprite-menu" className="sprite-option">
        <img src={ponyta} alt="Icon of Ponyta" id="ponyta-icon" />
        <p>Ponyta</p>
      </div>
    </div>
  );
};

export default SpriteMenu;
