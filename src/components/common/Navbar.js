import React, { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMene = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0){
                setIsSticky(true);
            }
        };

        window.addEventListener("scroll",)
    }, [])

    return (
        <header>

        </header>
    );
}