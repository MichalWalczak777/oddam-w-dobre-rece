import React, {useContext, useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import {Link as ScrollLink, Element, Events, animateScroll as scroll, scrollSpy, scroller} from "react-scroll";
import { AuthContext } from "../authentication/Auth";

const AppHeader = () => {

    const {currentUser} = useContext(AuthContext);

    const [isOnTop, setIsOnTop] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);

    const handleScroll = e => {
            setIsOnTop(window.scrollY <= 20);
    }

    return (
        <div className={`${isOnTop ? "container appHeader-navMenuTop" : " appHeader-navMenuScrolled"}`}>
            <ul className="appHeader-navlist appHeader-navlist-1">
                <p>
                {currentUser?.email}
                </p>
                <li>            
                {currentUser 
                    ? <HashLink to={"/donateStuff#top"} scroll={(el) => el.scrollIntoView({ behavior: 'smooth'})}> Oddaj rzeczy </HashLink> 
                    : <Link to={"/login"}> Zaloguj się </Link>}
                </li>
                <li>{currentUser 
                    ? <Link to={"/loggedOut"}> Wyloguj </Link> 
                    : <Link to={"/register"}> Załóż konto </Link>}
                </li>
            </ul>

            <ul className="appHeader-navlist appHeader-navlist-2">
                <li>
                    <HashLink to={"/#top"} scroll={(el) => el.scrollIntoView({ behavior: 'smooth'})}>Start</HashLink>
                </li>
                <li>
                    <HashLink to={"/#donate"} scroll={(el) => el.scrollIntoView({ behavior: 'smooth'})}>O co chodzi?</HashLink>
                </li>
                <li>
                    <HashLink to={"/#aboutUs"} scroll={(el) => el.scrollIntoView({ behavior: 'smooth'})}>O nas</HashLink>
                </li>
                <li>
                    <HashLink to={"/#organizations"} scroll={(el) => el.scrollIntoView({ behavior: 'smooth'})}>Fundacje i organizacje</HashLink>
                </li>
                <li>
                    <HashLink to={"/#contact"} scroll={(el) => el.scrollIntoView({ behavior: 'smooth'})}>Kontakt</HashLink>
                </li>
            </ul>
        </div>
    );
}

export default AppHeader;