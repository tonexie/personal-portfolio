import React from "react";
import ClimbingBoxLoader
from "react-spinners/ClimbingBoxLoader";

const override = {
  display: "block",
};

const LoadingScreen = ({ display }) => {

  return (
    <div
      className={`bg-black fixed flex w-full h-screen justify-center items-center content-center z-20 `}
      style={{ display: display ? "flex" : "none" }}
    >
      <ClimbingBoxLoader 
        color={"#ffffff"}
        speedMultiplier={1.5}
        cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingScreen;
