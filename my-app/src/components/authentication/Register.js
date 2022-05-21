import React from "react";
import {useState, useRef} from "react";
import { Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import app from "../../firebase";
import decoration from "../../assets/Decoration.svg";

const Register = () => {

    const [fields, setFields] = useState(
        {
            email: [],
            password: [],
            passwordRepeated: []
    });

    const [errors, setErrors] = useState(
        {
            email: [],
            password: [],
            passwordRepeated: []
    });

    const [ifRedirect, setIfRedirect] = useState(false);

    const validateFields = () => {
        let errorsFound = {
            email: [],
            password: [],
            passwordRepeated: []
        };

        const emailRegex = /^\S+@\S+\.\S+$/;
        !emailRegex.test(fields.email) && errorsFound.email.push("niepoprawny format maila");

        fields.password.length < 6 && errorsFound.password.push("hasło musi mieć co najmniej 6 znaków");
        
        fields.passwordRepeated !== fields.password && errorsFound.passwordRepeated.push("hasła muszą być takie same!");

        setErrors(errorsFound);
        return (errorsFound.email.length === 0 && errorsFound.password.length === 0  && errorsFound.passwordRepeated.length === 0);
    }


    const handleChange = e =>{
        const {name, value} = e.target;
        setFields(prev => ({
            ...prev,
            [name] : value}));
    }

    const handleSubmit = e => {

        validateFields() &&
        e.preventDefault();
        app.auth().createUserWithEmailAndPassword(fields.email, fields.password)
        .then(() => setIfRedirect(true))        
        .catch (error => alert(error));
    }


    return (

        ifRedirect
        ? <Redirect to={"/"} /> 
        : (
        <div className="login container">
            <h2 className="login-header">Załóż konto</h2>
            <img className="login-decoration" alt="dekoracja" src={decoration}></img>
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
                <div className="login-inputBox">
                    <label htmlFor="password-repeat">Powtórz hasło</label>
                    <input type="password" name="passwordRepeated" id="password-repeat" onChange={handleChange}/>
                    <div>{errors.passwordRepeated}</div>
                </div>
            </form>
            <div className="login-buttons">
                <button className="login-button-active" type="submit" onClick={handleSubmit}>Załóż konto</button>
                <button className="login-button-inactive"><Link to={"/login"}>Zaloguj się</Link></button>
            </div>
        </div>
        )

    );
}

export default Register;