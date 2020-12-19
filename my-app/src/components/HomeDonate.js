import React from "react";
import {Link} from "react-router-dom";

import decoration from "../assets/Decoration.svg";
import shirtIcon from "../assets/Icon-1.svg";
import bagIcon from "../assets/Icon-2.svg";
import magnifierIcon from "../assets/Icon-3.svg";
import recycleIcon from "../assets/Icon-4.svg";

const HomeDonate = () => {
    return (
        <div id="donate" className="homeDonate">
            <div className="container homeDonate-headerContainer">
                <h2>Wystarczą 4 proste kroki</h2>
                <img className="homeDonate-decoration" alt="decoration" src={decoration}></img>
            </div>
            <div className="homeDonate-background">
                <div className="homeDonate-instructionContainer container">
                    <div className="homeDonate-instruction">
                        <img alt="koszula" src={shirtIcon}></img>
                        <h4>Wybierz rzeczy</h4>
                        <p>ubranie, zabawki, <br/> sprzęt i inne</p>
                    </div>
                    <div className="homeDonate-instruction">
                        <img alt="torba" src={bagIcon}></img>
                        <h4>Spakuj je</h4>
                        <p>skorzystaj z <br/> worków na śmieci</p>
                    </div>
                    <div className="homeDonate-instruction">
                        <img alt="lupa" src={magnifierIcon}></img>
                        <h4>Zdecyduj komu <br/> chcesz pomóc</h4>
                        <p>wybierz zaufane <br/> miejsce</p>
                    </div>
                    <div className="homeDonate-instruction">
                        <img alt="transport" src={recycleIcon}></img>
                        <h4>Zamów kuriera</h4>
                        <p> kurier przyjedzie <br/> w dogodnym terminie </p>
                    </div>
                </div>
            </div>
            <button className="general-button homeDonate-button"><Link to={"/login"}>Oddaj <br/> rzeczy</Link></button>
        </div>
    );
}

export default HomeDonate;