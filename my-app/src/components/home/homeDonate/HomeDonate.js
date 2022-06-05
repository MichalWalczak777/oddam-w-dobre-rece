import React from "react";
import { Link } from "react-router-dom";

import decoration from "../../../assets/Decoration.svg";
import shirtIcon from "../../../assets/Icon-1.svg";
import bagIcon from "../../../assets/Icon-2.svg";
import magnifierIcon from "../../../assets/Icon-3.svg";
import recycleIcon from "../../../assets/Icon-4.svg";

const donationInstructions = [
  {
    icon: shirtIcon,
    imgText: "koszula",
    header: "Wybierz rzeczy",
    description: "ubranie, zabawki, sprzęt i inne",
  },
  {
    icon: bagIcon,
    imgText: "torba",
    header: "Spakuj je",
    description: "skorzystaj z worków na śmieci",
  },
  {
    icon: magnifierIcon,
    imgText: "szkło powiększające",
    header: "Zdecyduj komu pomóc",
    description: "wybierz zaufane miejsce",
  },
  {
    icon: recycleIcon,
    imgText: "transport",
    header: "Omów się z kurierem",
    description: "kurier przyjedzie w dogodnym terminie",
  },
];

const HomeDonate = () => {
  return (
    <div id="donate" className="homeDonate">
      <div className="container homeDonate-headerContainer">
        <h2 className="homeDonate-header">Wystarczą 4 proste kroki</h2>
        <img
          className="homeDonate-decoration"
          alt="decoration"
          src={decoration}
        ></img>
      </div>
      <div className="homeDonate-background">
        <div className="homeDonate-instructions container">
          {donationInstructions?.map((instruction) => (
            <div
              className="homeDonate-instruction"
              key={instruction.description}
            >
              <img alt={instruction.imgText} src={instruction.icon}></img>
              <h4>{instruction.header}</h4>
              <p>{instruction.description}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="general-button homeDonate-button">
        <Link to={"/donateStuff"}>Oddaj rzeczy</Link>
      </button>
    </div>
  );
};

export default HomeDonate;
