import React, {useContext, useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
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

    const contentMenuList = [{path: "/#top", description: "Start"}, {path: "/#donate", description: "O co chodzi?"}, {path: "/#aboutUs", description: "O nas"}, {path: "/#organizations", description: "Fundacje i organizacje"}, {path: "/#contact", description: "Kontakt"}];

    return (
        <div className={`${isOnTop ? "container appHeader-navMenuTop" : " appHeader-navMenuScrolled"}`}>
            <ul className="appHeader-authMenu">
                <li className='appHeader-currentUserDisplayed'>
                {currentUser?.email}
                </li>
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

            <ul className="appHeader-contentMenu">
                {contentMenuList.map(menuElement => <li key={menuElement.description}>
                                                        <HashLink to={menuElement.path} scroll={(el) => el.scrollIntoView({ behavior: 'smooth'})}>{menuElement.description}</HashLink>
                                                    </li>
                )}
            </ul>
        </div>
    );
}

export default AppHeader;