import React, { useContext, useState, useEffect } from "react";
import AppHeaderAuthMenu from "./AppHeaderAuthMenu";
import AppHeaderContentMenu from "./AppHeaderContentMenu";
import { AuthContext } from "../authentication/Auth";

const AppHeader = () => {
  const { currentUser } = useContext(AuthContext);
  const [isOnTop, setIsOnTop] = useState(true);
  const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  const showSideMenu = () => {
    setIsSideMenuVisible(true);
  };

  const hideSideMenu = () => {
    setIsSideMenuVisible(false);
  };

  const handleScroll = (e) => {
    setIsOnTop(window.scrollY <= 20);
  };

  return (
    <>
      <div
        className={
          isOnTop
            ? "container appHeader-navMenuDesktopTop"
            : " appHeader-navMenuDesktopScrolled"
        }
      >
        <AppHeaderAuthMenu user={currentUser} isDesktop={true} />
        <AppHeaderContentMenu hideSideMenu={hideSideMenu} />
      </div>
      <div className="appHeader-navMenuMobile">
        <div className="appHeader-hamburger" onClick={showSideMenu} />
        <AppHeaderAuthMenu user={currentUser} isDesktop={false} />
        <div
          className={
            isSideMenuVisible ? "appHeader-sideMenu" : "appHeader-hiddenElement"
          }
        >
          <div className="appHeader-closeSideMenuIcon" onClick={hideSideMenu} />
          <AppHeaderContentMenu hideSideMenu={hideSideMenu} />
        </div>
        <div
          className={
            isSideMenuVisible
              ? "appHeader-backgroundFilter"
              : "appHeader-hiddenElement"
          }
        />
      </div>
    </>
  );
};

export default AppHeader;
