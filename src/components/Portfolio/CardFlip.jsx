import React, { useState } from "react";
import { motion } from "framer-motion";
import { PiHandTapFill } from "react-icons/pi";

const CardFlip = ({ title, front, back, backHeight }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }
  return (
    <div className="flex items-center justify-center cursor-pointer">
      <div
        className="aspect-[1.4/1] flip-card w-full h-fit rounded-lg hover:scale-105 duration-200"
        onClick={handleFlip}
      >
        <motion.div
          className="flip-card-inner w-full h-full shadow-lg shadow-gray-600 rounded-lg"
          initial={false}
          animate={{
            rotateY: isFlipped ? 180 : 360,
            height: isFlipped ? backHeight : "",
          }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            className="flex flex-col items-center flip-card-front w-full h-full 
            bg-gradient-to-r from-gray-700 via-gray-900 to-black
          text-white rounded-lg"
          >
            {front}
            <h1 className="flex-grow flex items-center justify-center text-sm md:text-lg font-bold w-full gap-4 /">
              {title}
              <PiHandTapFill size={30} />
            </h1>
          </div>

          <div
            className="flip-card-back w-full h-full 
          text-white rounded-lg overflow-hidden"
          >
            <div className="z-[-1] absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-gray-700 via-gray-900 to-black bg-cover rounded-lg" />
            {back}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardFlip;