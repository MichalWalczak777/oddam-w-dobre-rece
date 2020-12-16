import React from "react";
import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeMain";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeDonate from "./HomeDonate";
import HomeAboutUs from "./HomeAboutUs";
import HomeBeneficiaries from "./HomeBeneficiaries";
import HomeContact from "./HomeContact";

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <HomeMain/>
            <HomeDonate/>
            <HomeAboutUs/>
            <HomeBeneficiaries/>
            <HomeContact/>
        </>
    )
}

export default Home;