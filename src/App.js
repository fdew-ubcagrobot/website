import React from "react";
import {
    Navbar
} from "./components";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {
    Home,
    Portfolio,
    Sponsorship,
    Recruitment,
    ContactUs,
    AboutUs,
} from "./pages";

import {
    footer
} from "./components/common"

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/sponsorship" element={<Sponsorship />} />
                <Route path="/recruitment" element={<Recruitment />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/aboutUs" element={<AboutUs />} />
            </Routes>
            <footer />
        </Router>
    );
}

export default App;