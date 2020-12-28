import React from "react";
import {useState, useRef} from "react";
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";

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

    const emailErrors = useRef(null);
    const passwordErrors = useRef(null);
    const passwordRepeatedErrors = useRef(null);

    const printErrors = () => {
        emailErrors.current.innerText = errors.email;
        passwordErrors.current.innerText = errors.password;
        passwordRepeatedErrors.current.innerText = errors.passwordRepeated;
    }

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
        e.preventDefault();
        validateFields() && console.log("zarejestrowano");
        printErrors();
    }


    return (
        <div className="login container">
            <h2>Załóż konto</h2>
            <img className="general-decoration" alt="dekoracja" src={decoration}></img>
            <form className="login-form">
                <div className="login-inputBox">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={handleChange}/>
                    <div ref={emailErrors}></div>
                </div>
                <div className="login-inputBox">
                    <label htmlFor="password">Hasło</label>
                    <input type="password" name="password" id="password" onChange={handleChange}/>
                    <div ref={passwordErrors}></div>
                </div>
                <div className="login-inputBox">
                    <label htmlFor="password-repeat">Powtórz hasło</label>
                    <input type="password" name="passwordRepeated" id="password-repeat" onChange={handleChange}/>
                    <div ref={passwordRepeatedErrors}></div>
                </div>
            </form>
            <div className="login-buttons">
                <button className="login-button-active" type="submit" onClick={handleSubmit}>Załóż konto</button>
                <button><Link to={"/login"}>Zaloguj się</Link></button>
            </div>
        </div>

    );
}

export default Register;