import React from "react";
import { bgGrayToBlack } from "../tailwind-utils";
import eigenCashImg from "../assets/portfolio/eigen-cash.png";
import fourierLabsImg from "../assets/portfolio/fourier-labs.png";
import g2BlogImg from "../assets/portfolio/g2-blog.png";
// import CardFlip from "./CardFlip";


const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: eigenCashImg,
      demo: "https://www.eigen.cash/",
    },
    {
      id: 2,
      src: fourierLabsImg,
      demo: "https://fourierlabs.io/",
    },
    {
      id: 3,
      src: g2BlogImg,
      demo: "https://full-stack-blog-f6yb.onrender.com/",
      code: "https://github.com/tonexie/fullstack-blog",
    },
  ];

  return (
    <div id="portfolio" className={bgGrayToBlack}>
      <div className="max-w-screen-lg p-4 m-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 px-0 sm:p-2">
          {projects.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-800 rounded-lg">
              <img
                src={src}
                alt={`${src} img`}
                className="rounded-md hover:scale-105 duration-200"
              />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200">
                    Demo
                  </button>
                </a>
                <a href={code} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
