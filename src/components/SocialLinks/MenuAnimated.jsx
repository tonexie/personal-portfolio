import React from "react";
import { motion, MotionConfig } from "framer-motion";

const MenuAnimated = (nav) => {
  let active = nav.active;

  return (
    <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
      <motion.button
        initial={false}
        className="relative h-[3.5rem] w-[3.5rem] rounded-full bg-white/0
      transition colors hover:bg-white/20 z-50"
        animate={active ? "open" : "closed"}
      >
        <motion.span
          style={{
            left: "50%",
            top: "33%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute h-[0.25rem] w-[1.65rem] bg-white"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["33%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "33%"],
            },
          }}
        />
        <motion.span
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute h-[0.25rem] w-[1.65rem] bg-white"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        />
        <motion.span
          style={{
            left: "50%",
            bottom: "33%",
            x: "-50%",
            y: "50%",
          }}
          className="absolute h-[0.25rem] w-[1.65rem] bg-white"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              bottom: ["33%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              bottom: ["50%", "50%", "33%"],
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

export default MenuAnimated;