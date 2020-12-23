import React from "react";
import HomeMain from "./HomeMain";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeDonate from "./HomeDonate";
import HomeAboutUs from "./HomeAboutUs";
import HomeFundations from "./HomeFundations";
import HomeContact from "./HomeContact";

const Home = () => {
    return (
        <>
            <HomeMain/>
            <HomeDonate/>
            <HomeAboutUs/>
            <HomeFundations/>
            <HomeContact/>
        </>
    )
}

export default Home;