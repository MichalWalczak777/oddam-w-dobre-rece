import React from "react";
import {useState, useRef} from "react";
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";

const Login = () => {


    const [fields, setFields] = useState(
        {
            email: [],
            password: []
    });

    const [errors, setErrors] = useState(
        {
            email: [],
            password: []
    });

    const validateFields = () => {
        let errorsFound = {
            email: [],
            password: []
        };

        const emailRegex = /^\S+@\S+\.\S+$/;
        !emailRegex.test(fields.email) && errorsFound.email.push("niepoprawny format maila");

        fields.password.length < 6 && errorsFound.password.push("hasło musi mieć co najmniej 6 znaków");

        setErrors(errorsFound);
        return (errorsFound.email.length === 0 && errorsFound.password.length === 0);
    }




    const handleChange = e =>{
        const {name, value} = e.target;
        setFields(prev => ({
            ...prev,
            [name] : value}));
    }

    const handleSubmit = e => {
        e.preventDefault();
        validateFields() && console.log("zalogowano");
    }


    return (
        <div className="login container">
            <h2>Zaloguj się</h2>
            <img className="general-decoration" alt="dekoracja" src={decoration}></img>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="login-inputBox">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={handleChange}/>
                    <div>{errors.email}</div>
                </div>
                <div className="login-inputBox">
                    <label htmlFor="password">Hasło</label>
                    <input type="password" name="password" id="password" onChange={handleChange}/>
                    <div>{errors.password}</div>
                </div>
            </form>
            <div className="login-buttons">
                <button><Link to={"/register"}>Załóż konto</Link></button>
                <button className="login-button-active" type="submit" onClick={handleSubmit}>Zaloguj się</button>
            </div>
        </div>

    );
}

export default Login;