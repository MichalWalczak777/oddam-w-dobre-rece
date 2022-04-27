import React, {useContext, useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import { AuthContext } from "../authentication/Auth";

const AppHeader = () => {

    const {currentUser} = useContext(AuthContext);
    const [isOnTop, setIsOnTop] = useState(true);
    
    const contentMenuList = [{path: "/#top", description: "Start"}, {path: "/#donate", description: "O co chodzi?"}, {path: "/#aboutUs", description: "O nas"}, {path: "/#organizations", description: "Fundacje i organizacje"}, {path: "/#contact", description: "Kontakt"}];

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);

        const AuthMenu = ({user, isDesktop}) => {

        return (
            <ul className="appHeader-authMenu">
                <li className='appHeader-currentUserDisplayed'>
                {(user && isDesktop) && user.email}
                </li>
                <li>            
                {user 
                    ? <HashLink to={"/donateStuff#top"} scroll={(el) => el.scrollIntoView({ behavior: 'smooth'})}> Oddaj rzeczy </HashLink> 
                    : <Link to={"/login"}> Zaloguj się </Link>}
                </li>
                <li>{user 
                    ? <Link to={"/loggedOut"}> Wyloguj </Link> 
                    : <Link to={"/register"}> Załóż konto </Link>}
                </li>
            </ul>
        )
    }

    const ContentMenu = () => {
        return (
            <ul className="appHeader-contentMenu">
            {contentMenuList.map(menuElement => <li key={menuElement.description}>
                                                    <HashLink to={menuElement.path} scroll={(el) => el.scrollIntoView({ behavior: 'smooth'})}>{menuElement.description}</HashLink>
                                                </li>
            )}
        </ul>
        )
    }

    const handleScroll = e => {
            setIsOnTop(window.scrollY <= 20);
    }

    return (
        <>
            <div className={`${isOnTop ? "container appHeader-navMenuDesktopTop" : " appHeader-navMenuDesktopScrolled"}`}>
                <AuthMenu user={currentUser} isDesktop = {true}/>
                <ContentMenu/>
            </div>
            <div className = "appHeader-navMenuMobile">
                <div className = "appHeader-hamburger"/>
                <AuthMenu user={currentUser} isDesktop = {false}/>
            </div>
        </>
    );
}

export default AppHeader;