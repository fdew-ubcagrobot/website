import React from "react";
import { HomeBanner, Sponsors } from '../components';

const Home = () => {
    return (
        <div>
            <h1>Welcome to home</h1>
            <HomeBanner></HomeBanner>
            <Sponsors />
        </div>
    );
};
 
export default Home;