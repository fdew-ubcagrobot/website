import React, { useEffect } from "react";
import { useState } from "react";

// import icons
import { hi, HiOutlineMenu } from "react-icons/hi";

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
                        <a href="/"> UBC Agrobots</a>
                    </div>
                
                {/* for larger devices */}

                <div className="lg:flex items-center gap-3 hidden">
                    <a href="/" className="block hover:text-grey-400 py-2 px-4">About us</a>
                    <a href="/" className="block hover:text-grey-400 py-2 px-4">Recruitment</a>
                    <a href="/" className="block hover:text-grey-400 py-2 px-4">Sponsorship</a>
                    <a href="/" className="block hover:text-grey-400 py-2 px-4">Home</a>
                </div>

                {/* contact me button */}
           <div className="lg:block hidden">
                <button className="">Contact US</button>
           </div>
            
            {/* menu button for small devices */}
            <button onClick={toggleMenu} className="lg:hidden text-indigo-600 text-3xl ">
                <HiOutlineMenu/>
            </button>

        </div>

         {/* nav items for small devices */}
         {
            isMenuOpen && (
                <div className="mt-4 bg-indigo-500 text-white rounded py-4">
                    <a href="/" className="block hover:text-grey-400 py-2 px-4">About us</a>
                    <a href="/" className="block hover:text-grey-400 py-2 px-4">Recruitment</a>
                    <a href="/" className="block hover:text-grey-400 py-2 px-4">Sponsorship</a>
                    <a href="/" className="block hover:text-grey-400 py-2 px-4">Home</a>
                </div>
            )
         }

         </nav>

        </header>
    );
}

export default Navbar;