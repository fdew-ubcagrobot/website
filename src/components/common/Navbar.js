import React from "react";
import { useState } from "react";

// import icons
import { HiOutlineMenu } from "react-icons/hi";
import { FaChevronDown } from 'react-icons/fa';

import { navLinks } from "../../constant";
import { agrobot } from "../../assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const dropdown_hover_timing = 0;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close the mobile menu when toggling the portfolio dropdown
    setIsSubMenuOpen(false);
  };

  function togglePortfolioMenu(hasDropdown) {
    if (hasDropdown)
      setIsSubMenuOpen(!isSubMenuOpen);
  }

  return (
    <header className="h-[10vh] bg-[#f8f7f1ea] hover:bg-[#f8f7f1] backdrop-blur-md w-full sticky top-0 left-0 right-0 z-[100]">
      <nav className="h-full py-4 md:px-8 px-4">
        <div className="h-full flex items-center justify-between">
          <div className="h-full font-bold cursor-pointer ">
            <a href="/"><img className="h-full" src={agrobot} alt="UBC Agrobot" /></a>
          </div>

          <ul className="list-none lg:flex items-center gap-8 hidden">
            {navLinks.map((e) => (
              <li
                key={e.id}
                className="relative"
                onMouseEnter={() => togglePortfolioMenu(e.dropdown)}
                onMouseLeave={() => togglePortfolioMenu(e.dropdown)}
              >
                <a
                  href={e.link}
                  className="text-[#8cbc24] hover:text-[#8cbc24] transition-all duration-200 flex items-center"
                >
                  {e.id} {e.dropdown && <FaChevronDown size='16px' style={{margin: '3px 0 0 4px'}}/>}
                </a>
                {e.dropdown && isSubMenuOpen && (
                  <ul
                    className="absolute top-full left-[-40px] px-[40px] pb-[20px]  bg-[#f8f7f1] backdrop-blur-md rounded"
                    style={{ transition: `all ${dropdown_hover_timing}ms` }}
                  >
                    {e.dropdown.map((item) => (
                      <li key={item.id}>
                        <a
                          href={item.link}
                          className="block text-[#8cbc24] py-[2px] px-0"
                        >
                          {item.id}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* contact me button */}

          {/* menu button for small devices */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-[#8cbc24] text-3xl "
          >
            <HiOutlineMenu />
          </button>
        </div>

        {/* nav items for small devices */}
        {isMenuOpen && (
          <div className="mt-4 bg-[#8cbc24] text-white rounded py-4">
            <a href="/" className="block hover:text-grey-400 py-2 px-4">
              Home
            </a>
            <a href="/portfolio" className="block hover:text-grey-400 py-2 px-4">
              Portfolio
            </a>
            <a href="/sponsorship" className="block hover:text-grey-400 py-2 px-4">
              Sponsorship
            </a>
            <a href="/recruitment" className="block hover:text-grey-400 py-2 px-4">
              Recruitment
            </a>
            <a href="/aboutus" className="block hover:text-grey-400 py-2 px-4">
              About us
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
