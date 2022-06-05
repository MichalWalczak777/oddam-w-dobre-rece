import React from "react";
import decoration from "../../../assets/Decoration.svg";
import ContactForm from "../contactForm/ContactForm";

const HomeContact = () => {
  return (
    <div id="contact">
      <div className="homeContact">
        <div className="homeContact-container container">
          <div className="homeContact-text">
            <h2>Skontaktuj się z nami</h2>
            <img
              className="homeContact-decoration"
              alt="decoration"
              src={decoration}
            ></img>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="homeContact-mobile">
        <h2 className="homeContact-headerMobile">Skontaktuj się z nami</h2>
        <img
          className="homeContact-decoration"
          alt="decoration"
          src={decoration}
        ></img>
        <ContactForm />
      </div>
    </div>
  );
};

export default HomeContact;
