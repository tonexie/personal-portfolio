import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";

export const Navbar = () => {
  const [navMenu, setNav] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const links = [
    { id: 1, link: "home", offset: 0 },
    { id: 2, link: "about", offset: 0 },
    { id: 3, link: "portfolio", offset: -80 },
    { id: 4, link: "experience", offset: 0 },
    { id: 5, link: "contact", offset: 0 },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed bg-black">
      <div>
        <h1 className="text-5xl font-signature ml-2">Tone</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!navMenu)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {navMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {navMenu && (
        <ul // navMenu needs to be true for this element to render
          className="flex flex-col justify-center items-center 
      absolute top-0 left-0 w-full h-screen 
      bg-gradient-to-b from-black to-gray-800 text-gray-500"
        >
          {links.map(({ id, link, offset }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!navMenu)}
                to={link}
                smooth
                duration={500}
                offset={isDesktop ? 0 : offset}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
