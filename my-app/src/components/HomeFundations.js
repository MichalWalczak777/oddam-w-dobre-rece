import React from "react";
import {useState} from "react";

const HomeFundations = () => {

    const [currentTab, setCurrentTab] = useState("fundations");

    const handleClick = e => {
            debugger;
            setCurrentTab(e.target.getAttribute("name"));
    }

    let content = null;

    switch(currentTab){
        case "fundations":
            content = (
                <div>
                    <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                </div>
            )
        break;
        case "organizations":
            content = (
                <div>
                    Organizacje
                </div>
            )
        break;
        case "fundraisings":
            content = (
                <div>
                    Zbiórki
                </div>
            )
        break;
    }


    return (
        <div id="organizations">
            <div className="homeFundations-navigation">
                <button className="homeFundations-navButton" name="fundations" onClick={handleClick}>Fundacjom</button>
                <button className="homeFundations-navButton" name="organizations" onClick={handleClick}>Organizacjom pozarządowym</button>
                <button className="homeFundations-navButton" name="fundraisings" onClick={handleClick}>Lokalnym zbiórkom</button>
            </div>
            {content}
        </div>
    );
}

export default HomeFundations;