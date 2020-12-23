import React from "react";
import {useState} from "react";
import decoration from "../assets/Decoration.svg";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";
import axios from "axios";

const HomeContact = () => {

    const [fields, setFields] = useState(
        {
            name: [],
            email: [],
            message: []
    });

    const axiosHeader = {
        "Content-Type": "application/json"
      };

    const validateFields = () => {
        let errors = {
            name: [],
            email: [],
            message: []
        };

        var nameRegex = /^\S*$/;
        !fields.name && errors.name.push("Imię nie może być puste");
        !nameRegex.test(fields.name) && errors.name.push("Imię nie może zawierać spacji");

        const emailRegex = /^\S+@\S+\.\S+$/;
        !emailRegex.test(fields.email) && errors.email.push("niepoprawny format maila");

        fields.message.length < 120 && errors.message.push("wiadomość jest zbyt krótka");

        console.log(errors);
        return (errors.name.length === 0 && errors.email.length === 0 && errors.message.length === 0);
    }

    const sendData = () => {
        console.log("wysłano dane");
        axios.post('https://fer-api.coderslab.pl/v1/portfolio/contact', fields, axiosHeader);
    }


    const handleChange = e =>{
        const {name, value} = e.target;
        setFields(prev => ({
            ...prev,
            [name] : value}));
    }

    const handleSubmit = e => {
        e.preventDefault();
        validateFields()? sendData(): console.log("Niepoprawne dane");
    }




    return (
        <div id="contact" className="homeContact">
            <div id="contact" className="homeContact-container container">
                <div className="homeContact-text">
                    <h2>Skontaktuj się z nami</h2>
                    <img className="homeContact-decoration" alt="decoration" src={decoration}></img>
                    <form onSubmit={handleSubmit}>
                        <div className="homeContact-formBox">
                            <div className="homeContact-inputBox">
                                <label htmlFor="name">Wpisz swoje imię</label>
                                <input type="text" name="name" id="name" placeholder="Krzysztof" onChange={handleChange}/>
                            </div>
                            <div className="homeContact-inputBox">
                                <label htmlFor="email">Wpisz swój email</label>
                                <input type="email" name="email" id="email" placeholder="abc@xyz.pl" onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="homeContact-inputBox homeContact-messageBox">
                            <label htmlFor="message">Wpisz swoją wiadomość</label>
                            <textarea name="message" id="message" onChange={handleChange} 
                                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                        </div>
                        <div className="homeContact-buttonWrapper">
                            <button className="homeContact-submit" type="submit">Wyślij</button>
                        </div>
                    </form>
                </div>
                <div className="homeContact-footer">
                    <div></div>
                    <p>Copyright by Coderslab</p>
                    <div className="homeContact-footerIcons">
                        <img alt="facebookIcon" src={facebook}></img>
                        <img alt="instagramIcon" src={instagram}></img>
                    </div>
                </div>
            </div>  
        </div>
    );
}

export default HomeContact;