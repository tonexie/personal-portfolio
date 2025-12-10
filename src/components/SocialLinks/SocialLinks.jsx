import React from "react";
import links from "./links";

const SocialLinks = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-10">
      <ul>
        {links.map(({ id, title, child30, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" +
              " " +
              style
            }
            style={{ backgroundColor: "rgba(51, 51, 51, 0.7)" }}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank" // opens new tab
              rel="noreferrer"
            >
              <div className="flex justify-between items-center w-full">
                {title}
                {child30}
              </div>
            </a>
          </li>
        ))}
        ;
      </ul>
    </div>
  );
};

export default SocialLinks;
