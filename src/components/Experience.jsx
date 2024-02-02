import React from "react";
import { bgBlackToGray } from "../tailwind-utils";
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
import tailwindIcon from "../assets/icons/tailwind.svg";
import { FaGithub } from "react-icons/fa";

const Experience = () => {
  const technologies = [
    {
      id: 1,
      src: javaIcon,
      name: "Java",
      style: { boxShadow: "2px 2px 4px #1565c0, -2px 0px 4px #f44336" },
    },
    {
      id: 2,
      src: jsIcon,
      name: "JavaScript",
      style: { boxShadow: "2px 2px 4px #ffd600, -2px 2px 4px #ffd600" },
    },
    {
      id: 3,
      src: reactIcon,
      name: "React",
      style: { boxShadow: "2px 2px 4px #4e7ab5, -2px 2px 4px #4e7ab5" },
    },
    {
      id: 4,
      src: vueIcon,
      name: "VueJs",
      style: { boxShadow: "2px 2px 4px #81c784, -2px 0px 4px #455a64" },
    },
    {
      id: 5,
      src: htmlIcon,
      name: "HTML",
      style: { boxShadow: "2px 2px 4px #ff6d00, -2px 2px 4px #e65100" },
    },
    {
      id: 6,
      src: cssIcon,
      name: "CSS",
      style: { boxShadow: "2px 2px 4px #039be5, -2px 2px 4px #0277bd" },
    },
    {
      id: 7,
      src: tailwindIcon,
      name: "Tailwind",
      style: { boxShadow: "2px 2px 4px #00b4d3, -2px 2px 4px #00b4d3" },
    },
    {
      id: 8,
      src: nodeIcon,
      name: "NodeJs",
      style: { boxShadow: "2px 2px 4px #21a366, -2px 2px 4px #21a366" },
    },
    {
      id: 9,
      src: expressIcon,
      name: "ExpressJs",
      style: { boxShadow: "2px 2px 4px #66798f, -2px 2px 4px #66798f" },
    },
    {
      id: 10,
      src: <FaGithub size={80}/>,
      name: "GitHub",
      style: { boxShadow: "2px 2px 4px gray, -2px 2px 4px gray" },
    },
    {
      id: 11,
      src: pythonIcon,
      name: "Python",
      style: { boxShadow: "2px 2px 4px #0277bd, -2px 0px 4px #ffc107" },
    },
    {
      id: 12,
      src: sqlIcon,
      name: "SQL",
      style: { boxShadow: "2px 2px 4px #3d4b89, -2px 2px 4px #5663af" },
    },
  ];

  return (
    <div name="experience" className={bgBlackToGray}>
      <div className="max-w-screen-lg p-4 m-auto flex flex-col justify-center w-full h-full">
        <div className="pb-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">
            These are the technologies that I have worked with:
          </p>
        </div>

        <div className="max-w-screen-md m-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 px-0 md:px-12 sm:px-0">
          {technologies.map(({ id, src, name, style }) => (
            <div
              key={id}
              style={style}
              className={`shadow-md hover:scale-105 duration-300 py-2 px-8 rounded-lg bg-white bg-opacity-5`}
            >
              {id === 10 ? ( // to conditionally render github
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

export default Experience;
