import React from "react";
import {Link} from "react-router-dom";

const HomeMain = () => {
    return (
        <div className="container mainContainer" id="start">
           <h2>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h2>
           <div className="homeMain-buttons">
                <button><Link to={"/login"}>Oddaj rzeczy</Link></button>
                <button><Link to={"/login"}>Zorganizuj zbiórkę</Link></button>
            </div> 
        </div>
    );
}

export default HomeMain;