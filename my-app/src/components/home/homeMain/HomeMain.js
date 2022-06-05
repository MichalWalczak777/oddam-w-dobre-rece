import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/Home-Hero-Image.jpg";
import decoration from "../../../assets/Decoration.svg";

const HomeMainButtons = () => {
  return (
    <div className="homeMain-buttonsBox">
      <button className="general-button homeMain-button">
        <Link to={"/donateStuff"}>Oddaj rzeczy</Link>
      </button>
      <button className="general-button homeMain-button">
        <Link to={"/donateStuff"}>Zorganizuj zbiórkę</Link>
      </button>
    </div>
  );
};

const HomeMain = () => {
  return (
    <div className="homeMain" id="start">
      <div className="container homeMain-desktop">
        <img alt="" src={image}></img>
        <div className="homeMain-content">
          <h2>
            Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce
          </h2>
          <img
            className="homeMain-decoration"
            alt="decoration"
            src={decoration}
          ></img>
          <HomeMainButtons />
        </div>
      </div>
      <div className="homeMain-mobile">
        <h2 className="homeMain-upperHeader">Zacznij pomagać!</h2>
        <h2 className="homeMain-lowerHeader">
          {" "}
          Oddaj niechciane rzeczy w zaufane ręce
        </h2>
        <img
          className="homeMain-decoration"
          alt="decoration"
          src={decoration}
        ></img>
        <HomeMainButtons />
      </div>
    </div>
  );
};

export default HomeMain;
