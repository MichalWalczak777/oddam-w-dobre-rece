import React from "react";
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";

const LoggedOut = () => {

    return (

        <div className="login container">
            <h2>Zaloguj się</h2>
            <img className="login-decoration" alt="dekoracja" src={decoration}></img>
            <div className="login-loggout-buttonWrapper">
                <button className="login-button login-button-active"><Link to={"/"}>Strona główna</Link></button>
            </div>
        </div>

    );

}

export default LoggedOut;