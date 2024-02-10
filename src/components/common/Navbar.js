import React, { useEffect } from "react";
import { useState } from "react";

// import icons
import { hi, HiOutlineMenu } from "react-icons/hi";


import { navLinks } from "../../constant";
import { agrobot } from "../../assets";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0){
                setIsSticky(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
    }, [])

    return (
        <header className="w-full fixed top-0 left-0 right-0 border-b-2">
            <nav className={`py-4 md:px-8 px-4 bg-white ${isSticky? "sticky top-0 right-0 left-0 bg-white": ""}`}>
                <div className="flex items-center justify-between">
                    <div className="font-bold text-lg cursor-pointer text-black ">
                        <img src={agrobot} alt="UBC Agrobot"/>
                    </div>
                
                {/* for larger devices */}

                <ul className="list-none lg:flex items-center gap-3 hidden">
                    {navLinks.map((nav) => (
                        <li className="block hover:text-green-600 py-2 px-4">
                             <a href={`${nav.link}`}>{nav.id}</a>
                        </li>
                    ))}
                  
                </ul>

                {/* contact me button */}
        
            
            {/* menu button for small devices */}
            <button onClick={toggleMenu} className="lg:hidden text-green-600 text-3xl ">
                <HiOutlineMenu/>
            </button>

        </div>

         {/* nav items for small devices */}
         {
            isMenuOpen && (
                <div className="mt-4 bg-green-600 text-white rounded py-4">
                    <a href="/" className="block hover:text-green-600 py-2 px-4">Home</a>
                    <a href="/" className="block hover:text-green-600 py-2 px-4">Portfolio</a>
                    <a href="/" className="block hover:text-green-600 py-2 px-4">Sponsorship</a>
                    <a href="/" className="block hover:text-green-600 py-2 px-4">Recruitment</a>
                    <a href="/" className="block hover:text-green-600 py-2 px-4">Contact us</a>
                    <a href="/" className="block hover:text-green-600 py-2 px-4">About us</a>
                </div>
            )
         }

         </nav>

        </header>
    );
}

export default Navbar;