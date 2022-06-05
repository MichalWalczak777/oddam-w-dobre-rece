import React from "react";
import { useState, useEffect } from "react";
import HomeFundationsDisplay from "./HomeFundationsDisplay";
import decoration from "../../../assets/Decoration.svg";

const HomeFundations = () => {
  const [currentTab, setCurrentTab] = useState("fundations");
  const [fundationsList, setFundationsList] = useState([]);
  const [organizationsList, setOrganizationsList] = useState([]);
  const [fundraisingsList, setFundraisingsList] = useState([]);

  const [fundationsHeader] = useState(
    "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują."
  );
  const [organizationsHeader] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
  );
  const [fundraisingsHeader] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
  );

  const handleClick = (e) => {
    setCurrentTab(e.target.getAttribute("name"));
  };

  useEffect(() => {
    const fundations = [];
    for (let i = 0; i < 9; i++) {
      const fundation = {
        name: `Fundacja ${i + 1}`,
        description: "lorem ipsum dolor sit amet",
        needs: "jedzenie, ubrania, zabawki",
      };
      fundations.push(fundation);
    }
    setFundationsList(fundations);

    const organizations = [];
    for (let i = 0; i < 6; i++) {
      const organization = {
        name: `Organizacja ${i + 1}`,
        description: "lorem ipsum dolor sit amet",
        needs: "lorem, ipsum, dolor",
      };
      organizations.push(organization);
    }
    setOrganizationsList(organizations);

    const fundraisings = [];
    for (let i = 0; i < 3; i++) {
      const fundraising = {
        name: `Zbiórka ${i + 1}`,
        description: "lorem ipsum dolor sit amet",
        needs: "lorem, ipsum, dolor",
      };
      fundraisings.push(fundraising);
    }
    setFundraisingsList(fundraisings);
  }, []);

  let content = null;

  return (
    <div id="organizations" className="container homeFundations">
      <div className="homeFundations-headerWrapper">
        <h2 className="homeFundations-header"> Komu pomagamy? </h2>
        <img
          className="homeFundations-decoration"
          alt="decoration"
          src={decoration}
        ></img>
      </div>
      <div className="homeFundations-navigation">
        <button
          className="homeFundations-navButton"
          name="fundations"
          onClick={handleClick}
        >
          Fundacjom{" "}
        </button>
        <button
          className="homeFundations-navButton"
          name="organizations"
          onClick={handleClick}
        >
          Organizacjom pozarządowym
        </button>
        <button
          className="homeFundations-navButton"
          name="fundraisings"
          onClick={handleClick}
        >
          Lokalnym zbiórkom
        </button>
      </div>
      {currentTab === "fundations" && (
        <HomeFundationsDisplay
          data={fundationsList}
          header={fundationsHeader}
        ></HomeFundationsDisplay>
      )}
      {currentTab === "organizations" && (
        <HomeFundationsDisplay
          data={organizationsList}
          header={organizationsHeader}
        ></HomeFundationsDisplay>
      )}
      {currentTab === "fundraisings" && (
        <HomeFundationsDisplay
          data={fundraisingsList}
          header={fundraisingsHeader}
        ></HomeFundationsDisplay>
      )}
    </div>
  );
};

export default HomeFundations;
