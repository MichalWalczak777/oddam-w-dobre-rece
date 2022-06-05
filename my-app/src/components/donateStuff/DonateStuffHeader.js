import React from "react";
import decoration from "../../assets/Decoration.svg";

const DonateStuffHeader = () => {
  const donateStuffInstructions = [
    { number: 1, text: "Wybierz rzeczy" },
    { number: 2, text: "Spakuj je w worki" },
    { number: 3, text: "Wybierz fundację" },
    { number: 4, text: "Zamów kuriera" },
  ];

  return (
    <div className="donateStuff-header">
      <div className="donateStuff-headerText">
        <div className="donateStuff-headerTextContent">
          <h2>
            Oddaj rzeczy, których już nie chcesz <br />{" "}
            <span>POTRZEBUJĄCYM</span>
          </h2>
          <img className="donateStuff-decoration" src={decoration}></img>
          <p className="donateStuff-headerParagraph">
            {" "}
            Wystarczą 4 proste kroki:
          </p>
          <div className="donateStuff-headerSquares">
            {donateStuffInstructions?.map((instruction) => (
              <div
                className="donateStuff-headerSquare"
                key={instruction.number + instruction.text}
              >
                <div className="donateStuff-squareText">
                  <h6> {instruction.number} </h6>
                  <p> {instruction.text} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateStuffHeader;
