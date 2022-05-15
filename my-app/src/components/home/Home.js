import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import HomeMain from "./homeMain/HomeMain";
import HomeThreeColumns from "./homeThreeColumns/HomeThreeColumns"
import HomeDonate from "./homeDonate/HomeDonate";
import HomeAboutUs from "./homeAboutUs/HomeAboutUs";
import HomeFundations from "./homeFundations/HomeFundations";
import HomeContact from "./homeContact/HomeContact";

const Home = () => {

    return (
        <>
            <HomeMain/>
            <HomeThreeColumns/>
            <HomeDonate/>
            <HomeAboutUs/>
            <HomeFundations/>
            <HomeContact/>
        </>
    )
}

export default Home;