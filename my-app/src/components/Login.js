import React from "react";
import decoration from "../assets/Decoration.svg";

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
                <button>Załóż konto</button>
                <button>Zaloguj się</button>
            </div>
        </div>

    );
}

export default Login;