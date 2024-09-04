import React from "react";
import { bgBlackToGray } from "../../tailwind-utils";
import technologies from "./technologies";

const Skills = () => {
  return (
    <div name="skills" className={bgBlackToGray}>
      <div className="max-w-screen-lg p-4 m-auto flex flex-col justify-center w-full h-full">
        <div className="pb-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
          <p className="py-6 text-xl">
            These are the skills that I have demonstrated in work and projects:
          </p>
        </div>

        <div className="max-w-screen-md m-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 px-0 md:px-12 sm:px-0">
          {technologies.map(({ id, src, name, style }, index) => (
            <div
              key={index}
              style={style}
              className={`shadow-md hover:scale-105 duration-300 py-2 px-8 rounded-lg bg-white bg-opacity-5`}
            >
              {name === "GitHub" ? ( // it is different format
                <div key={id}>{src}</div>
              ) : (
                <img src={src} alt={`${src} icon`} className="m-auto w-20" />
              )}
              <p className="m-auto">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;