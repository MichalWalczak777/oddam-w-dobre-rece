import React from "react";
import decoration from "../../assets/Decoration.svg";


const DonateStuffHeader = () => {

    return (
        <div className="donateStuff-header">
            <div className="donateStuff-headerText">
                <div className="donateStuff-headerTextContent">
                    <h2>Oddaj rzeczy, których już nie chcesz <br/> POTRZEBUJĄCYM</h2>
                    <img className="donateStuff-decoration" src={decoration}></img>
                    <p className="donateStuff-headerParagraph"> Wystarczą 4 proste kroki:</p>
                    <div className="donateStuff-headerSquares">
                        <div className="donateStuff-headerSquare">
                            <div className="donateStuff-squareText">
                                <h6> 1 </h6>
                                <p>Wybierz rzeczy</p>
                            </div>
                        </div>
                        <div className="donateStuff-headerSquare">
                            <div className="donateStuff-squareText">
                                <h6> 2 </h6>
                                <p>Spakuj je w worki</p>
                            </div>
                        </div>
                        <div className="donateStuff-headerSquare">
                            <div className="donateStuff-squareText">
                                <h6> 3 </h6>
                                <p>Wybierz fundację</p>
                            </div>
                        </div>
                        <div className="donateStuff-headerSquare">
                            <div className="donateStuff-squareText">
                                <h6> 4 </h6>
                                <p>Zamów kuriera</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DonateStuffHeader;

