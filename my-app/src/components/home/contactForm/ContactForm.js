import React from "react";
import axios from "axios";
import { useState } from "react";

const ContactForm = () => {
  const [fields, setFields] = useState({
    name: [],
    email: [],
    message: [],
  });
  const [errors, setErrors] = useState({
    name: [],
    email: [],
    message: [],
  });
  const axiosHeader = {
    "Content-Type": "application/json",
  };

  const validateFields = () => {
    let errorsFound = {
      name: [],
      email: [],
      message: [],
    };

    var nameRegex = /^[a-zA-Z]+$/;
    !fields.name && errorsFound.name.push("Imię nie może być puste");
    !nameRegex.test(fields.name) &&
      errorsFound.name.push("Niepoprawne znaki w imieniu");

    const emailRegex = /^\S+@\S+\.\S+$/;
    !emailRegex.test(fields.email) &&
      errorsFound.email.push("Niepoprawny format maila");

    fields.message.length < 120 &&
      errorsFound.message.push("Wiadomość jest zbyt krótka");

    setErrors(errorsFound);
    return (
      errorsFound.name.length === 0 &&
      errorsFound.email.length === 0 &&
      errorsFound.message.length === 0
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validateFields() && sendData();
  };

  const sendData = () => {
    console.log("wysłano dane");

    axios
      .post(
        "https://fer-api.coderslab.pl/v1/portfolio/contact",
        fields,
        axiosHeader
      )
      .catch((error) =>
        setErrors({
          name: error.response.data.errors
            .filter((e) => e.param === "name")
            .map((e) => e.msg),
          email: error.response.data.errors
            .filter((e) => e.param === "email")
            .map((e) => e.msg),
          message: error.response.data.errors
            .filter((e) => e.param === "message")
            .map((e) => e.msg),
        })
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="contactForm-formBox">
        <div className="contactForm-inputBox">
          <label htmlFor="name">Imię</label>
          <div className="contactForm-inputWrapper">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Krzysztof"
              onChange={handleChange}
            />
          </div>
          <div className="contactForm-errors">{errors.name}</div>
        </div>
        <div className="contactForm-inputBox">
          <label htmlFor="email">Email</label>
          <div className="contactForm-inputWrapper">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="abc@xyz.pl"
              onChange={handleChange}
            />
          </div>
          <div className="contactForm-errors"> {errors.email}</div>
        </div>
      </div>
      <div className="contactForm-inputBox contactForm-messageBox">
        <label htmlFor="message">Wiadomość</label>
        <textarea
          name="message"
          id="message"
          onChange={handleChange}
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
        />
        <div className="contactForm-errors">{errors.message} </div>
      </div>
      <div className="contactForm-buttonWrapper">
        <button className="contactForm-submit" type="submit">
          Wyślij
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
