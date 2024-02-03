import React from "react";
import Sponsor from "./Sponsor"; 
import { HomeBanner } from '../components';

const Home = () => {
    return (
        <div>
            <h1>Welcome to home</h1>
            <HomeBanner></HomeBanner>
            <Sponsor />
        </div>
    );
};
 
export default Home;