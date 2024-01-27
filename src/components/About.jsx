import React from "react";
import { bgGrayToBlack } from "../tailwind-utils";

const About = () => {
  return (
    <div id="about" className={bgGrayToBlack}>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore totam
          perferendis quam odit voluptate ullam magni, omnis quibusdam sit
          maiores repellendus suscipit amet eum atque! Quia optio quo sapiente
          commodi!
        </p>
        <br />
        <p className="text-xl mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quia
          nisi ad recusandae impedit. Vel, nisi, porro dolor quasi suscipit,
          repellat aut placeat nobis voluptatum sint mollitia animi illo
          deserunt.
        </p>
      </div>
    </div>
  );
};

export default About;
