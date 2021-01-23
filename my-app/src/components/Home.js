import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import HomeMain from "./HomeMain";
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