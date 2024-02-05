import React from "react";
import { useGlobalContext } from "../../GlobalContext";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { motion, MotionConfig, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Typewriter } from "react-simple-typewriter";
import HomeImage from "./HomeImage";
import ShootingStar from "../Animations/ShootingStar/ShootingStar";

const Home = () => {
  const { gV } = useGlobalContext();
  const loadingDuration = gV.loadingDuration / 1000;
  const isDesktop = useMediaQuery({ minWidth: 768 });

  // scroll animation for home image
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [100, 1000], [1, 2]);
  const opacity = useTransform(
    scrollY,
    [100, 300, 600, 1000],
    [1, 0.3, 0.1, 0]
  );

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
        className={`z-1 relative w-full h-screen py-[6rem] md:py-40 px-2 sm:px-12 text-white bg-black overflow-visible overflow-x-clip`}
      >
        <motion.div
          className="z-0 absolute top-0 left-0 w-full h-[110vh] bg-cover bg-home-background"
          style={{ backgroundPosition: "center 20%", scale, opacity }}
        />

        <ShootingStar />

        <div className="max-w-screen-lg mx-auto flex flex-col items-start justify-items-center h-screen px-4 md:flex-row ">
          <div className="z-10 w-full md:min-w-[65%] flex flex-col justify-start md:justify-center">
            {/* home Header */}
            <motion.div
              initial={{
                x: -80,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: [0, 0.1, 0.3, 0.5, 1],
              }}
              className="z-3 text-[2.3rem] sm:text-[3rem] md:text-5xl lg:text-7xl font-bold text-white h-[6.5rem] lg:min-h-[9rem]"
            >
              <Typewriter
                words={[
                  "Future Software\nEngineer",
                  "Former Structural\nEngineer",
                ]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </motion.div>

            {/* home description */}
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
                crafting digital solutions and currently pursuing my Masters
                degree in Information Technology. Explore my journey, projects,
                and skills below!
              </motion.p>
            </div>

            {/* home to portfolio button */}
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
                  className="group text-white w-fit px-6 py-3 my-2 hover:scale-[1.05] duration-150
                  flex items-center rounded-md bg-gradient-to-l from-cyan-600 to-purple-600 cursor-pointer"
                >
                  Portfolio
                  <span className="group-hover:rotate-90 duration-300">
                    <MdKeyboardArrowRight size={25} className="ml-1" />
                  </span>
                </Link>
              </motion.button>
            </div>
          </div>

          {isDesktop && <HomeImage />}
        </div>
      </div>
    </MotionConfig>
  );
};

export default Home;
