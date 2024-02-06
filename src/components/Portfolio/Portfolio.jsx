import React from "react";
import { bgGrayToBlack } from "../../tailwind-utils";
import CardFlip from "./CardFlip/CardFlip";
import { useMediaQuery } from "react-responsive";

import projects from "./projects";

const Portfolio = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <div id="portfolio" className={bgGrayToBlack}>
      <div className="max-w-screen-lg p-4 m-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="text-base md:text-xl py-6">Check out some of my work right here:</p>
        </div>

        <div className="grid md:grid-cols-2 gap-[0.2rem_2rem] px-0 sm:p-2">
          {projects.map(
            ({
              id,
              title,
              src,
              desc,
              skills,
              demo,
              code,
              mobileBackHeight,
              PCBackHeight,
              warning,
            }) => (
              <CardFlip
                className="w-full h-full"
                key={id}
                title={title}
                front={
                  <img
                    src={src}
                    alt={`${src} img`}
                    className="relative block rounded-md p-[1px]"
                  />
                }
                back={
                  <div className="flex flex-col items-center justify-between p-4 md:p-8 h-full">
                    <h1 className="text-[1.2rem] font-bold border-b-[1px] w-fit self-center mb-2">
                      {title}
                    </h1>
                    <p className="text-[1rem]">{desc}</p>
                    <div className="flex justify-center flex-wrap gap-[0.3rem_0.4rem]">
                      {skills.map((skill, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-l from-cyan-600 to-purple-600
                           p-[0.2rem_0.5rem] rounded-full text-[0.8rem] hover:scale-105"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col justify-end">
                      {warning && (
                        <p className="text-[0.7rem] text-center">
                          *Please be aware that the live demo may take up to a
                          minute to open, as it is hosted on a free service.
                          Thank you for your patience.
                        </p>
                      )}
                      <div className="flex justify-evenly justify-self-end">
                        {demo && (
                          <a
                            href={demo}
                            target="_blank"
                            rel="noreferrer"
                            className="exclude-clicks m-1"
                          >
                            <button className="exclude-clicks w-[6rem] md:w-[8rem] h-full px-2 py-[0.8rem] md:py-[1rem] bg-[#DADFF7] cursor-pointer rounded-3xl border-2 border-[#232C33] shadow-[inset_0px_-2px_0px_1px_#232C33] group hover:bg-[#232C33] transition duration-300 ease-in-out">
                              <span className="exclude-clicks font-medium text-[#232C33] group-hover:text-[#DADFF7]">
                                Demo
                              </span>
                            </button>
                          </a>
                        )}
                        {code && (
                          <a
                            href={code}
                            target="_blank"
                            rel="noreferrer"
                            className="exclude-clicks m-1"
                          >
                            <button className="exclude-clicks w-[6rem] md:w-[8rem] h-full px-2 py-[0.8rem] md:py-[1rem] bg-[#DADFF7] cursor-pointer rounded-3xl border-2 border-[#232C33] shadow-[inset_0px_-2px_0px_1px_#232C33] group hover:bg-[#232C33] transition duration-300 ease-in-out">
                              <span className="exclude-clicks font-medium text-[#333] group-hover:text-[#DADFF7]">
                                Code
                              </span>
                            </button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                }
                backHeight={isDesktop ? PCBackHeight : mobileBackHeight}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;