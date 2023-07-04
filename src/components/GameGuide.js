import React, { useRef } from "react";
import "../styles/gameguide.css";

const GameGuide = () => {
  const howModal = useRef();

  return (
    <>
      <div className="button-container">
        <button
          aria-label="how-to-play"
          id="how-to-play"
          onClick={() => {
            if (howModal.current.classList.contains("hide-modal")) {
              howModal.current.classList.toggle("hide-modal");
              howModal.current.classList.toggle("show-modal");
              return;
            }
            howModal.current.classList.toggle("hide-modal");
            howModal.current.classList.toggle("show-modal");
          }}
        >
          How To Play
        </button>
      </div>

      <div
        ref={howModal}
        data-testid="how-to-modal"
        id="how-to-modal"
        className="hide-modal"
      ></div>
    </>
  );
};

export default GameGuide;
