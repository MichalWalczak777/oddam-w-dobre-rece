import React from "react";
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="login container">
            <h2>Zaloguj się</h2>
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
            </form>
            <div className="login-buttons">
                <button><Link to={"/register"}>Załóż konto</Link></button>
                <button className="login-button-active">Zaloguj się</button>
            </div>
        </div>

    );
}

export default Login;