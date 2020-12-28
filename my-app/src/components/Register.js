import React from "react";
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div className="login container">
            <h2>Załóż konto</h2>
            <img className="general-decoration" alt="dekoracja" src={decoration}></img>
            <form className="login-form">
                <div className="login-inputBox">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"/>
                </div>
                <div className="login-inputBox">
                    <label htmlFor="password">Hasło</label>
                    <input type="password" name="password" id="password"/>
                </div>
                <div className="login-inputBox">
                    <label htmlFor="password-repeat">Powtórz hasło</label>
                    <input type="password" name="password-repeat" id="password-repeat"/>
                </div>
            </form>
            <div className="login-buttons">
                <button className="login-button-active">Załóż konto</button>
                <button><Link to={"/login"}>Zaloguj się</Link></button>
            </div>
        </div>

    );
}

export default Register;