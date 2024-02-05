import React from "react";
import { bgGrayToBlack } from "../../tailwind-utils";
import eigenCashImg from "../../assets/portfolio/eigen-cash.png";
import fourierLabsImg from "../../assets/portfolio/fourier-labs.png";
import g2BlogImg from "../../assets/portfolio/g2-blog.png";
import pokemonImg from "../../assets/portfolio/pokemon-viewer.png";
import CardFlip from "./CardFlip";
import { useMediaQuery } from "react-responsive";

const Portfolio = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const mobileBackHeight = "400px"
  const PCBackHeight = "350px"

  const projects = [
    {
      id: 1,
      title: "Full Stack Blog Website",
      src: g2BlogImg,
      desc: "Full Stack Blog Website: User-friendly, secure, and interactive. Features include user registration and authentication, article comments, likes, and subscriptions. WYSIWYG editor for content control. User autonomy over personal information. Analytics for insights into user-generated content.",
      demo: "https://full-stack-blog-f6yb.onrender.com/",
      code: "https://github.com/tonexie/fullstack-blog",
      mobileBackHeight: mobileBackHeight,
      PCBackHeight: PCBackHeight,
      warning: true,
    },
    {
      id: 2,
      title: "Eigen Cash Website",
      src: eigenCashImg,
      desc: "hello world",
      demo: "https://www.eigen.cash/",
      code: false,
      mobileBackHeight: mobileBackHeight,
      PCBackHeight: PCBackHeight,
      warning: true,
    },
    {
      id: 3,
      title: "Fourier Labs Landing Page",
      src: fourierLabsImg,
      demo: "https://fourierlabs.io/",
      code: false,
      mobileBackHeight: mobileBackHeight,
      PCBackHeight: PCBackHeight,
      warning: true,
    },
    {
      id: 4,
      title: "Pokemon Viewer Website",
      src: pokemonImg,
      desc: "hello world",
      demo: "https://pokemon-viewer-1g8o.onrender.com/#",
      code: false,
      mobileBackHeight: mobileBackHeight,
      PCBackHeight: PCBackHeight,
      warning: true,
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

        <div className="grid md:grid-cols-2 gap-[0.2rem_2rem] px-0 sm:p-2">
          {projects.map(
            ({ id, title, src, desc, demo, code, mobileBackHeight, PCBackHeight, warning }) => (
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
                    <p>{desc}</p>
                    <div className="flex flex-col justify-end">
                      {warning && (
                        <p className="text-[0.7rem] text-center">
                          *Please be aware that the live demo may take up to a
                          minute to open, as it is hosted on a free service.
                          Thank you for your patience.
                        </p>
                      )}
                      <div className="flex justify-evenly justify-self-end">
                        <a
                          href={demo}
                          target="_blank"
                          rel="noreferrer"
                          className="m-1"
                        >
                          <button class="w-[4.5rem] md:w-[6rem] h-full px-2 py-[0.3rem] md:px-4 md:py-2 bg-[#DADFF7] cursor-pointer rounded-3xl border-2 border-[#232C33] shadow-[inset_0px_-2px_0px_1px_#232C33] group hover:bg-[#232C33] transition duration-300 ease-in-out">
                            <span class="font-medium text-[#232C33] group-hover:text-[#DADFF7]">
                              Demo
                            </span>
                          </button>
                        </a>
                        <a
                          href={code}
                          target="_blank"
                          rel="noreferrer"
                          className="m-1"
                        >
                          <button class="w-[4.5rem] md:w-[6rem] h-full px-2 py-[0.3rem] md:px-4 md:py-2 bg-[#DADFF7] cursor-pointer rounded-3xl border-2 border-[#232C33] shadow-[inset_0px_-2px_0px_1px_#232C33] group hover:bg-[#232C33] transition duration-300 ease-in-out">
                            <span class="font-medium text-[#333] group-hover:text-[#DADFF7]">
                              Code
                            </span>
                          </button>
                        </a>
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
