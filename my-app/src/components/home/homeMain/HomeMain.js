import React from "react";
import HomeThreeColumns from "../homeThreeColumns/HomeThreeColumns";
import {Link} from "react-router-dom";
import image from "../../../assets/Home-Hero-Image.jpg";
import decoration from "../../../assets/Decoration.svg";



const HomeMain = () => {
    return (
        <>
                <div className="container homeMain-container" id="start">
                    <img alt="" src={image}></img>
                    <div className="homeMain-text">
                        <h2>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h2>
                        <img className="homeMain-decoration" alt="decoration" src={decoration}></img>
                        <div className="homeMain-buttonsBox">
                                <button className="general-button homeMain-button"><Link to={"/donateStuff"}>Oddaj <br/> rzeczy</Link></button>
                                <button className="general-button homeMain-button"><Link to={"/donateStuff"}>Zorganizuj <br/> zbiórkę</Link></button>
                        </div> 
                    </div>
                </div>
            <HomeThreeColumns/>
        </>

    );
}

export default HomeMain;