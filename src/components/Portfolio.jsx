import React from "react";
import { bgBlackToGray } from "../tailwind-utils";
import eigenCashImg from "../assets/portfolio/eigen-cash.png";
import fourierLabsImg from "../assets/portfolio/fourier-labs.png";
import g2BlogImg from "../assets/portfolio/g2-blog.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: eigenCashImg,
    },
    {
      id: 2,
      src: fourierLabsImg,
    },
    {
      id: 3,
      src: g2BlogImg,
    },
  ];

  return (
    <div id="portfolio" className={bgBlackToGray}>
      <div className="max-w-screen-lg p-4 m-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-12 sm:px-0">
          {projects.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-800 rounded-lg">
              <img
                src={src}
                alt={`${src} img`}
                className="rounded-md hover:scale-105 duration-200"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
