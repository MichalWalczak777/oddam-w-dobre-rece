import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const AppHeaderAuthMenu = ({ user, isDesktop }) => {
  return (
    <ul className="appHeader-authMenu">
      <li className="appHeader-currentUserDisplayed">
        {user && isDesktop && user.email}
      </li>
      <li>
        {user ? (
          <HashLink
            to={"/donateStuff#top"}
            scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
          >
            {" "}
            Oddaj rzeczy{" "}
          </HashLink>
        ) : (
          <Link to={"/login"}> Zaloguj się </Link>
        )}
      </li>
      <li>
        {user ? (
          <Link to={"/loggedOut"}> Wyloguj </Link>
        ) : (
          <Link to={"/register"}> Załóż konto </Link>
        )}
      </li>
    </ul>
  );
};

export default AppHeaderAuthMenu;
