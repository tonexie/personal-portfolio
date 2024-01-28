import React from "react";
import profileImg from "../assets/portfolio/anon-image.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { bgBlackToGray } from "../tailwind-utils";

const Home = () => {
  return (
    <div
      name="home"
      className={`${bgBlackToGray} pt-24 bg-gradient-to-b from-black via-black to-gray-800`}
    >
      <div
        className="max-w-screen-lg mx-auto 
      flex flex-col items-center justify-items-center 
      h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
          Former Structural Engineer | Future Software Engineer
          </h2>
          <h3 className="text-base sm:text-2xl font-bold text-white">
            
          </h3>
          <p className="text-gray-500 py-4 max-w-md">
            Welcome to my corner of the web! 🚀 I'm passionate about crafting
            digital solutions and currently pursuing my masters degree in Information Technology. Explore my journey, projects, and skills below.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2
            flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={profileImg}
            alt="My profile img"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
