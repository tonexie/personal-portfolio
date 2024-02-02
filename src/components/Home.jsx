import React from "react";
import { useGlobalContext } from "../GlobalContext";
import profileImg from "../assets/portfolio/anon-image.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { motion, MotionConfig, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const { gV } = useGlobalContext();
  const loadingDuration = gV.loadingDuration / 1000;
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [100, 1000], [1, 2]);
  const opacity = useTransform(scrollY, [100, 600, 1000], [1, 0.2, 0]);

  return (
    <MotionConfig
      transition={{
        delay: loadingDuration,
        duration: 1.5,
        ease: "easeOut",
        times: [0, 0.25, 0.5, 0.75, 1],
      }}
    >
      <div
        name="home"
        className={`z-1 relative w-full h-screen py-40 md:pt-[15rem] px-2 sm:px-12 text-white pt-24 bg-black overflow-visible overflow-x-clip`}
      >
        <motion.div
          className="z-0 absolute top-0 left-0 w-full h-full bg-cover bg-home-background"
          style={{ backgroundPosition: "center 35%", scale, opacity }}
        />
        <div
          className="max-w-screen-lg mx-auto 
      flex flex-col items-start justify-items-center 
      h-full px-4 md:flex-row"
        >
          <div className="z-10 flex flex-col justify-start md:justify-center  h-full">
            <motion.h2
              initial={{
                x: -80,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: [0, 0.1, 0.3, 0.5, 1],
              }}
              className="z-3 text-4xl lg:text-7xl font-bold text-white"
            >
              Former Structural Engineer | Future Software Engineer
            </motion.h2>
            {/* <h3 className="text-base sm:text-2xl font-bold text-white"></h3> */}
            <div className="relative z-0 my-3">
              <div className="rounded-2xl absolute inset-0 max-w-md bg-black opacity-60 z-0" />
              <motion.p
                initial={{
                  x: 60,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: [0, 0.1, 0.3, 0.5, 1],
                }}
                className="text-gray-200 max-w-md m-1 relative z-1"
              >
                Welcome to my corner of the web! 🚀 I'm passionate about
                crafting digital solutions and currently pursuing my masters
                degree in Information Technology. Explore my journey, projects,
                and skills below.
              </motion.p>
            </div>

            <div>
              <motion.button
                initial={{
                  scale: 0.5,
                  x: -20,
                  y: 20,
                  opacity: 0,
                  transformOrigin: "center center",
                }}
                animate={{
                  scale: 1,
                  x: 0,
                  y: 0,
                  opacity: [0, 0.1, 0.3, 0.5, 1],
                }}
              >
                <Link
                  to="portfolio"
                  smooth
                  duration={500}
                  offset={80}
                  className="group text-white w-fit px-6 py-3 my-2
            flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                >
                  Portfolio
                  <span className="group-hover:rotate-90 duration-300">
                    <MdKeyboardArrowRight size={25} className="ml-1" />
                  </span>
                </Link>
              </motion.button>
            </div>
          </div>

          {isDesktop && (
            <div className="z-10">
              <motion.img
                src={profileImg}
                alt="My profile img"
                initial={{
                  y: 30,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: [0, 0.1, 0.2, 0.5, 1],
                }}
                transition={{
                  delay: loadingDuration + 0.5,
                  duration: 1.5,
                  ease: "easeOut",
                  times: [0, 0.25, 0.5, 0.75, 1],
                }}
                className="rounded-2xl mx-auto w-2/3 md:w-full py-16"
              />
            </div>
          )}
        </div>
      </div>
    </MotionConfig>
  );
};

export default Home;
