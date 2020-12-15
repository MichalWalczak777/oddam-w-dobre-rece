import React from "react";
import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeMain";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeDonate from "./HomeDonate";
import HomeAboutUs from "./HomeAboutUs";
import HomeBeneficiaries from "./HomeBeneficiaries";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";


const Home = () => {
    return (
        <>
            <HomeHeader/>
            <HomeMain/>
            <HomeThreeColumns/>
            <HomeDonate/>
            <HomeAboutUs/>
            <HomeBeneficiaries/>
            <HomeContact/>
            <HomeFooter/>
        </>
    )
}

export default Home;