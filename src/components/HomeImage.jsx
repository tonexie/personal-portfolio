import React from "react";
import { useGlobalContext } from "../GlobalContext";
import { motion } from "framer-motion";


import profileImg from "../assets/portfolio/civil-software1.png";

const HomeImage = () => {
  const { gV } = useGlobalContext();
  const loadingDuration = gV.loadingDuration / 1000;

  return (
    <div
      className="relative rounded-full
      md:py-0 md:min-w-[40%] md:left-[2rem]"
    >
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
        className="z-20 rounded-2xl m-0 w-[150%]"
      />
    </div>
  );
};

export default HomeImage;
