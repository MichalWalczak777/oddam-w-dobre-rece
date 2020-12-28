import React from "react";
import {Link} from "react-router-dom";
import {Link as ScrollLink, Element, Events, animateScroll as scroll, scrollSpy, scroller} from "react-scroll";

const HomeHeader = () => {
    return (
        <div className="container homeHeader-container">
            <ul className="homeHeader-navlist navlist-1">
                <li>            
                    <Link to={"/login"}> Zaloguj się </Link> 
                </li>
                <li>            
                    <Link to={"/register"}> Załóż konto </Link> 
                </li>
            </ul>

            <ul className="homeHeader-navlist navlist-2">
                <li>
                    <ScrollLink activeClass="active" to="start" spy={true} smooth={true} duration={1000}>Start</ScrollLink>
                </li>
                <li>
                    <ScrollLink activeClass="active" to="donate" spy={true} smooth={true} duration={1000}>O co chodzi?</ScrollLink>
                </li>
                <li>
                    <ScrollLink activeClass="active" to="aboutUs" spy={true} smooth={true} duration={1000}>O nas</ScrollLink>
                </li>
                <li>
                    <ScrollLink activeClass="active" to="organizations" spy={true} smooth={true} duration={1000}>Fundacja i organizacje</ScrollLink>
                </li>
                <li>
                    <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>Kontakt</ScrollLink>
                </li>
            </ul>
        </div>
    );
}

export default HomeHeader;