import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import app from "../firebase";
import decoration from "../assets/Decoration.svg";

const LoggedOut = () => {

    const [ifRedirect, setIfRedirect] = useState(false);

    useEffect(()=>{
        app.auth().signOut()
        .then(() => setIfRedirect(true))        
        .catch (error => alert(error));
    }, [])

    return (

        ifRedirect
        ? <Redirect to={"/"} /> 
        : (
        <div className="login container">
            <h2>Zaloguj się</h2>
            <img className="login-decoration" alt="dekoracja" src={decoration}></img>
            <div className="login-loggout-buttonWrapper">
                <button className="login-button login-button-active"><Link to={"/"}>Strona główna</Link></button>
            </div>
        </div>
        )

    );

}

export default LoggedOut;