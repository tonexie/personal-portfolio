import React from "react";
import { bgBlackToGray } from "../../tailwind-utils";
import { useMediaQuery } from "react-responsive";
import HomeImage from "../HomeImage";
import Timeline from "./Timeline";

const About = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <div id="about" className={`${bgBlackToGray} z-[-20] pt-80`}>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full z-[-1]">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        {!isDesktop && <HomeImage />}

        <p className="text-xl">
          I am a highly motivated aspiring software engineer with a background
          in structural engineering, which has equipped me with problem-solving
          skills and an acute attention to detail. I am passionate about the
          software engineering field, where I aim to leverage my diverse skill
          set to contribute to new exciting projects.
        </p>
        <br />
        <p className="text-xl mt-5">
          I am eager to join a dynamic environment that not only promotes
          continuous learning and development but also embodies a strong
          commitment to professional growth with a positive and inclusive
          company culture. In my free time, I am an avid tennis player and enjoy
          reading.
        </p>

        <h2 className="text-[1.8rem] text-center pb-4 pt-24">Timeline</h2>
        <Timeline />
      </div>
      
    </div>
  );
};

export default About;
