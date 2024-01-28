import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const Navbar = () => {
  const [navMenu, setNav] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const siteLinks = [
    { id: 1, link: "home", offset: 0 },
    { id: 2, link: "about", offset: 0 },
    { id: 3, link: "portfolio", offset: 80 },
    { id: 4, link: "experience", offset: 80 },
    { id: 5, link: "contact", offset: 80 },
  ];

  const socialLinks = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={45} />
        </>
      ),
      href: "https://www.linkedin.com/in/tone-xie-87a5b3141/",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={45} />
        </>
      ),
      href: "https://github.com/tonexie",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={45} />
        </>
      ),
      href: "mailto:tone.xie@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={45} />
        </>
      ),
      href: "/Resume_XIE_TONE.pdf",
      download: true,
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed bg-black shadow-md shadow-gray-900">
      <div>
        <h1 className="text-5xl font-signature ml-2">Tone</h1>
      </div>

      <ul className="hidden md:flex">
        {siteLinks.map(({ id, link, offset }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500} offset={offset}>
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
          {siteLinks.map(({ id, link, offset }) => (
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

          <div className="flex gap-8 mt-16">
            {socialLinks.map(({ id, child, href, download }) => (
              <div
                key={id}
                className="flex gap-8"
              >
                <a
                  href={href}
                  className="w-full text-white"
                  download={download}
                  target="_blank" // opens new tab
                  rel="noreferrer"
                >
                  {child}
                </a>
              </div>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
