import React, {useContext, useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import {Link as ScrollLink, Element, Events, animateScroll as scroll, scrollSpy, scroller} from "react-scroll";
import { AuthContext } from "./Auth";

const HomeHeader = () => {

    const {currentUser} = useContext(AuthContext);

    const [isOnTop, setIsOnTop] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);

    const handleScroll = e => {
            console.log(isOnTop);
            console.log(window.scrollY);
            setIsOnTop(window.scrollY <= 20);
    }

    return (
        <div className={`${isOnTop ? "container homeHeader-navMenuTop" : " homeHeader-navMenuScrolled"}`}>
            <ul className="homeHeader-navlist homeHeader-navlist-1">
                <li>
                {currentUser?.email}
                </li>
                <li>            
                {currentUser 
                    ? <Link to={"/donateStuff"}> Oddaj rzeczy </Link> 
                    : <Link to={"/login"}> Zaloguj się </Link>}
                </li>
                <li>{currentUser 
                    ? <Link to={"/loggedOut"}> Wyloguj </Link> 
                    : <Link to={"/register"}> Załóż konto </Link>}
                </li>
            </ul>

            <ul className="homeHeader-navlist homeHeader-navlist-2">
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