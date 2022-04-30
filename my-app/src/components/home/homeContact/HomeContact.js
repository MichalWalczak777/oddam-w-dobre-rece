import React from "react";
import {useState} from "react";
import decoration from "../../../assets/Decoration.svg";
import axios from "axios";

const HomeContact = () => {


    const [fields, setFields] = useState(
        {
            name: [],
            email: [],
            message: []
    });

    const [errors, setErrors] = useState(
        {
            name: [],
            email: [],
            message: []
    });

    const ContactForm = () => {

        return (
            <form onSubmit={handleSubmit}>
                <div className="homeContact-formBox">
                    <div className="homeContact-inputBox">
                        <label htmlFor="name">Imię</label>
                        <div className='homeContact-inputWrapper'>
                            <input type="text" name="name" id="name" placeholder="Krzysztof" onChange={handleChange}/>
                        </div>
                        <div className="homeContact-errors">{errors.name}</div>
                    </div>
                    <div className="homeContact-inputBox">
                        <label htmlFor="email">Email</label>
                        <div className='homeContact-inputWrapper'>
                            <input type="email" name="email" id="email" placeholder="abc@xyz.pl" onChange={handleChange}/>
                        </div>
                        <div className="homeContact-errors"> {errors.email}</div>
                    </div>
                </div>
                <div className="homeContact-inputBox homeContact-messageBox">
                    <label htmlFor="message">Wiadomość</label>
                    <textarea name="message" id="message" onChange={handleChange} 
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."/>
                    <div className="homeContact-errors">{errors.message}  </div>
                </div>
                <div className="homeContact-buttonWrapper">
                    <button className="homeContact-submit" type="submit">Wyślij</button>
                </div>
        </form>
        )
    }


    const axiosHeader = {
        "Content-Type": "application/json"
      };

    const validateFields = () => {
        let errorsFound = {
            name: [],
            email: [],
            message: []
        };

        var nameRegex = /^[a-zA-Z]+$/;
        !fields.name && errorsFound.name.push("Imię nie może być puste");
        !nameRegex.test(fields.name) && errorsFound.name.push("Niepoprawne znaki w imieniu");

        const emailRegex = /^\S+@\S+\.\S+$/;
        !emailRegex.test(fields.email) && errorsFound.email.push("Niepoprawny format maila");

        fields.message.length < 120 && errorsFound.message.push("Wiadomość jest zbyt krótka");

        setErrors(errorsFound);
        return (errorsFound.name.length === 0 && errorsFound.email.length === 0 && errorsFound.message.length === 0);
    }

    const sendData = () => {
        console.log("wysłano dane");

        axios.post('https://fer-api.coderslab.pl/v1/portfolio/contact', fields, axiosHeader)
        .catch(error =>
               setErrors(
                    {
                    name: error.response.data.errors.filter(e => e.param === "name").map(e => e.msg),
                    email: error.response.data.errors.filter(e => e.param === "email").map(e => e.msg),
                    message: error.response.data.errors.filter(e => e.param === "message").map(e => e.msg)
                    }));
    }


    const handleChange = e =>{
        const {name, value} = e.target;
        setFields(prev => ({
            ...prev,
            [name] : value}));
    }

    const handleSubmit = e => {
        e.preventDefault();
        validateFields() && sendData();
    }




    return (
        <>
            <div id="contact" className="homeContact">
                <div className="homeContact-container container">
                    <div className="homeContact-text">
                        <h2>Skontaktuj się z nami</h2>
                        <img className="homeContact-decoration" alt="decoration" src={decoration}></img>
                        <ContactForm/>
                    </div>
                </div> 
            </div>
            <div id="contact" className="homeContact-mobile">
                <h2 className="homeContact-headerMobile">Skontaktuj się z nami</h2>
                <img className="homeContact-decoration" alt="decoration" src={decoration}></img>
                <ContactForm/>
            </div>
        </>
    );
}

export default HomeContact;