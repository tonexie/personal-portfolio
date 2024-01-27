import React from "react";
import { bgGrayToBlack } from "../tailwind-utils";
import htmlIcon from "../assets/icons/html.svg";
import cssIcon from "../assets/icons/css.svg";
import jsIcon from "../assets/icons/js.svg";
import reactIcon from "../assets/icons/react.svg";
import vueIcon from "../assets/icons/vue.svg";
import nodeIcon from "../assets/icons/nodejs.svg";
import expressIcon from "../assets/icons/expressjs.svg";
import javaIcon from "../assets/icons/java.svg";
import sqlIcon from "../assets/icons/sql.png";
import pythonIcon from "../assets/icons/python.svg";

const Experience = () => {
  const technologies = [
    { id: 1, src: htmlIcon, name: "HTML", style: "shadow-orange-500" },
    { id: 2, src: cssIcon, name: "CSS", style: "shadow-blue-500" },
    { id: 3, src: jsIcon, name: "JavaScript" },
    { id: 4, src: reactIcon, name: "React" },
    { id: 5, src: vueIcon, name: "VueJs" },
    { id: 6, src: nodeIcon, name: "NodeJs" },
    { id: 7, src: expressIcon, name: "ExpressJs" },
    { id: 8, src: javaIcon, name: "Java" },
    { id: 9, src: sqlIcon, name: "SQL" },
    { id: 10, src: pythonIcon, name: "Python" },
  ];

  return (
    <div name="experience" className={bgGrayToBlack}>
      <div className="max-w-screen-lg p-4 m-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">
            These are the technologies that I have worked with:
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {technologies.map(({ id, src, name, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-300 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={`${src} icon`} className="m-auto w-20" />
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
