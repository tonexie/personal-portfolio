import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const LoadingScreen = ({ display }) => {

  return (
    <div
      className="fixed flex w-full h-screen justify-center items-center content-center z-20 bg-white"
      style={{ display: display ? "flex" : "none" }}
    >
      <ClipLoader
        color={"#ffffff"}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingScreen;
