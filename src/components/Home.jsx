import React from "react";
import { useGlobalContext } from "../GlobalContext";
import profileImg from "../assets/portfolio/anon-image.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { backIn, backInOut, motion } from "framer-motion";

const Home = () => {
  const { gV } = useGlobalContext();
  const loadingDuration = gV.loadingDuration / 1000;
  return (
    <div
      name="home"
      className={`relative w-full h-full md:h-screen py-40 md:pt-[15rem] px-2 sm:px-12 text-white pt-24 `}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-home-background z-[-1]"
        style={{ backgroundPosition: "center 25%" }}
      />
      <div
        className="max-w-screen-lg mx-auto 
      flex flex-col items-center justify-items-center align-items-center
      h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center align-middle h-full">
          <motion.h2
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: [0, 0.1, 0.3, 0.5, 1],
            }}
            transition={{
              delay: loadingDuration,
              duration: 1.5,
              ease: "easeOut",
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
            className="text-4xl lg:text-7xl font-bold text-white"
          >
            Former Structural Engineer | Future Software Engineer
          </motion.h2>
          {/* <h3 className="text-base sm:text-2xl font-bold text-white"></h3> */}
          <div className="relative z-0 my-3">
            <div className="rounded-2xl absolute inset-0 max-w-md bg-black opacity-60 z-0" />
            <p className="text-gray-300 max-w-md m-1 relative z-1">
              Welcome to my corner of the web! 🚀 I'm passionate about crafting
              digital solutions and currently pursuing my masters degree in
              Information Technology. Explore my journey, projects, and skills
              below.
            </p>
          </div>

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
            className="rounded-2xl mx-auto w-2/3 md:w-full py-16"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
