import { HashLink } from "react-router-hash-link";

const contentList = [
  { path: "/#top", description: "Start" },
  { path: "/#donate", description: "O co chodzi?" },
  { path: "/#aboutUs", description: "O nas" },
  { path: "/#organizations", description: "Fundacje i organizacje" },
  { path: "/#contact", description: "Kontakt" },
];

const AppHeaderContentMenu = ({ hideSideMenu }) => {
  return (
    <ul className="appHeader-contentMenu">
      {contentList.map((listElement) => (
        <li key={listElement.description} onClick={hideSideMenu}>
          <HashLink
            to={listElement.path}
            scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
          >
            {listElement.description}
          </HashLink>
        </li>
      ))}
    </ul>
  );
};

export default AppHeaderContentMenu;
