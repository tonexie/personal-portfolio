import React, { useState } from "react";
import { motion } from "framer-motion";

const CardFlip = ({ content }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setisAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setisAnimating(true);
    }
  }
  return (
    <div className="flip-card" onClick={handleFlip}>
      <motion.div
        className="flip-card-inner w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => setisAnimating(false)}
      >
        <div className="flip-card-front w-full h-full">
          <h1>Hello World</h1>
          {content}
        </div>

        <div className="flip-card-back w-full h-full">
          <h1>Hello World</h1>
        </div>
      </motion.div>
    </div>
  );
};

export default CardFlip;
