import React from "react";
import HomeThreeColumns from "./HomeThreeColumns";
import {Link} from "react-router-dom";

const HomeMain = () => {
    return (
        <>
            <div className="homeMain-background">
                <div className="container homeMain-container" id="start">
                    <div className="homeMain-text">
                        <h2>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h2>
                        <div className="homeMain-buttonsBox">
                                <button className="homeMain-button"><Link to={"/login"}>Oddaj <br/> rzeczy</Link></button>
                                <button className="homeMain-button"><Link to={"/login"}>Zorganizuj <br/> zbiórkę</Link></button>
                        </div> 
                    </div>
                </div>
            </div>
            <HomeThreeColumns/>
        </>

    );
}

export default HomeMain;