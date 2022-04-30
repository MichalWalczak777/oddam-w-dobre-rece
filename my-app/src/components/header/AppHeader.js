import React, {useContext, useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import { AuthContext } from "../authentication/Auth";

const AppHeader = () => {

    const {currentUser} = useContext(AuthContext);
    const [isOnTop, setIsOnTop] = useState(true);
    const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);
    
    const contentMenuList = [{path: "/#top", description: "Start"}, {path: "/#donate", description: "O co chodzi?"}, {path: "/#aboutUs", description: "O nas"}, {path: "/#organizations", description: "Fundacje i organizacje"}, {path: "/#contact", description: "Kontakt"}];

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);

    const showSideMenu = () => {
        setIsSideMenuVisible(true);
    }

    const hideSideMenu = () => {
        setIsSideMenuVisible(false);
    }

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
            {contentMenuList.map(menuElement => <li key={menuElement.description} onClick={hideSideMenu}>
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
            <div className={isOnTop ? "container appHeader-navMenuDesktopTop" : " appHeader-navMenuDesktopScrolled"}>
                <AuthMenu user={currentUser} isDesktop = {true}/>
                <ContentMenu/>
            </div>
            <div className = "appHeader-navMenuMobile">
                <div className = "appHeader-hamburger" onClick={showSideMenu}/>
                <AuthMenu user={currentUser} isDesktop = {false}/>
                <div className={isSideMenuVisible ? "appHeader-sideMenu" : "appHeader-hiddenElement"}>
                    <div className= "appHeader-closeSideMenuIcon" onClick={hideSideMenu}/>
                    <ContentMenu/>
                </div>
                <div className={isSideMenuVisible ? "appHeader-backgroundFilter" : "appHeader-hiddenElement"}/>
            </div>

        </>
    );
}

export default AppHeader;