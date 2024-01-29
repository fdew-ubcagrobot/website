import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                <NavLink to="/Home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/Sponsorship" activeStyle>
                        Sponsorship
                    </NavLink>
                    <NavLink to="/Recruitment" activeStyle>
                        Recruitment
                    </NavLink>
                    <NavLink to="/ContactUs" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to="/AboutUs" activeStyle>
                        aboutUs
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;