import React from "react";
import image from "../assets/Background-Contact-Form.jpg";
import decoration from "../assets/Decoration.svg";


const HomeContact = () => {
    return (
        <div id="contact" className="homeContact">
            <img className="homeContact-image"alt="" src={image}></img>
            <div className="homeContact-text">
                <h2>Skontaktuj się z nami</h2>
                <img className="homeContact-decoration" alt="decoration" src={decoration}></img>
                <form>
                    <div className="homeContact-formBox">
                        <div className="homeContact-inputBox">
                            <label htmlFor="name">Wpisz swoje imię</label>
                            <input type="text" name="name" id="name" placeholder="Krzysztof"/>
                        </div>
                        <div className="homeContact-inputBox">
                            <label htmlFor="email">Wpisz swój email</label>
                            <input type="email" name="email" id="email" placeholder="abc@xyz.pl"/>
                        </div>
                    </div>
                    <div className="homeContact-inputBox homeContact-messageBox">
                        <label htmlFor="message">Wpisz swoją wiadomość</label>
                        <textarea name="message" id="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                    </div>
                    <div className="homeContact-buttonWrapper">
                        <button className="homeContact-submit" type="submit">Wyślij</button>
                    </div>
                </form>
            </div>  
        </div>
    );
}

export default HomeContact;