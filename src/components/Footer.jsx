import React from "react";
import links from "./SocialLinks/links";

const socialLinks = links;

export const Footer = () => {
  return (
    <div className="flex flex-col py-12 pt-0 z-20 justify-center items-center w-full px-4 text-white bg-black">
      <div
        className="flex flex-col items-center
      md:flex-row md:gap-[4rem] md:items-start md:pb-8"
      >
        {/* Get in Touch */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold md:pl-4">Get in Touch</h3>
          <div className="flex gap-[1rem] p-4 pt-2 w-full">
            {socialLinks.map(({ id, title, child30, href, download }) => (
              <div key={id} className="flex gap-8">
                <a
                  href={href}
                  className="w-full text-white"
                  download={download}
                  target="_blank" // opens new tab
                  rel="noreferrer"
                >
                  <div className="flex flex-col items-center text-[0.6rem]">
                    {child30}
                    {title}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* credit */}
        <div
          className="flex flex-col justify-center items-center
          py-8 md:py-0 md:items-start
          text-[0.7rem]"
        >
          <h3 className="font-bold text-[1rem] pb-2">Credit</h3>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.freepik.com/free-vector/pillar-crane-code-composition_23246910.htm#query=structural%20engineer,%20coding&position=0&from_view=search&track=ais&uuid=ff2399f8-59ed-4194-9f7f-685f9c335510#position=0&query=structural%20engineer,%20coding"
            >
              Civil & Tech Image by macrovector
            </a>{" "}
            on Freepik
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://codesandbox.io/p/sandbox/css-shooting-stars-animation-w96ut"
            >
              Shooting Star Animation Sourced from Codepen
            </a>
          </div>
        </div>
      </div>

      {/* bottom message */}
      <div
        className="flex flex-col justify-center items-center
        text-[0.9rem]"
      >
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/tonexie/personal-portfolio"
          >
            Created with ❤️ using React, click to view code.
          </a>
        </div>
        <div>© 2024 Tone Xie Porfolio Website. All rights reserved. </div>
      </div>
    </div>
  );
};

export default Footer;