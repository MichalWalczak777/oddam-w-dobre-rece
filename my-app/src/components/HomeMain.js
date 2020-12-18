import React from "react";
import HomeThreeColumns from "./HomeThreeColumns";
import {Link} from "react-router-dom";
import image from "../assets/Home-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg";



const HomeMain = () => {
    return (
        <>
                <div className="container homeMain-container" id="start">
                    <img alt="" src={image}></img>
                    <div className="homeMain-text">
                        <h2>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h2>
                        <img class="homeMain-decoration" alt="decoration" src={decoration}></img>
                        <div className="homeMain-buttonsBox">
                                <button className="homeMain-button"><Link to={"/login"}>Oddaj <br/> rzeczy</Link></button>
                                <button className="homeMain-button"><Link to={"/login"}>Zorganizuj <br/> zbiórkę</Link></button>
                        </div> 
                    </div>
                </div>
            <HomeThreeColumns/>
        </>

    );
}

export default HomeMain;