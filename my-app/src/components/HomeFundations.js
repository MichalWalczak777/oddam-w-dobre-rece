import React from "react";
import {useState, useEffect} from "react";
import HomeFundationsDisplay from "./HomeFundationsDisplay";

const HomeFundations = () => {

    const [currentTab, setCurrentTab] = useState("fundations");
    const [fundationsList, setFundationsList] = useState([]);
    const [organizationsList, setOrganizationsList] = useState([]);
    const [fundraisingsList, setFundraisingsList] = useState([]);

    const handleClick = e => {
            setCurrentTab(e.target.getAttribute("name"));
    }

    useEffect( () => {
        const fundations = [];
        for (let i = 0; i < 9; i++){
            const fundation = {
                name: `Fundacja ${i+1}`,
                description: "lorem ipsum dolor sit amet",
                needs: "jedzenie, ubrania, zabawki"
            }
            fundations.push(fundation);
        }
            console.log(fundations);
            setFundationsList(fundations);
        

        const organizations = [];
        for (let i = 0; i < 6; i++){
            const organization = {
                name: `Organizacja ${i+1}`,
                description: "lorem ipsum dolor sit amet",
                needs: "lorem, ipsum, dolor"
            }
            organizations.push(organization);
        }
            console.log(organizations);
            setOrganizationsList(organizations);
        

            const fundraisings = [];
            for (let i = 0; i < 3; i++){
                const fundraising = {
                    name: `Zbiórka ${i+1}`,
                    description: "lorem ipsum dolor sit amet",
                    needs: "lorem, ipsum, dolor"
                }
                fundraisings.push(fundraising);
            }
            console.log(fundraisings);
            setFundraisingsList(fundraisings);

    },[]);

    let content = null;

    switch(currentTab){
        case "fundations":
            content = (
                <HomeFundationsDisplay data={fundationsList}></HomeFundationsDisplay>
            )
        break;
        case "organizations":
            content = (
                <HomeFundationsDisplay data={organizationsList}></HomeFundationsDisplay>
            )
        break;
        case "fundraisings":
            content = (
                <HomeFundationsDisplay data={fundraisingsList}></HomeFundationsDisplay>
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