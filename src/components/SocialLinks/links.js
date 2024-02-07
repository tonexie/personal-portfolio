import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const links = [
  {
    id: 1,
    title: "LinkedIn",
    child30: (
      <>
        <FaLinkedin size={30} />
      </>
    ),
    child45: (
      <>
        <FaLinkedin size={45} />
      </>
    ),
    href: "https://www.linkedin.com/in/tone-xie-87a5b3141/",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    title: "GitHub",
    child30: (
      <>
        <FaGithub size={30} />
      </>
    ),
    child45: (
      <>
        <FaGithub size={45} />
      </>
    ),
    href: "https://github.com/tonexie",
  },
  {
    id: 3,
    title: "E-mail",
    child30: (
      <>
        <HiOutlineMail size={30} />
      </>
    ),
    child45: (
      <>
        <HiOutlineMail size={45} />
      </>
    ),
    href: "mailto:tone.xie@gmail.com",
  },
  {
    id: 4,
    title: "Resume",
    child30: (
      <>
        <BsFillPersonLinesFill size={30} />
      </>
    ),
    child45: (
      <>
        <BsFillPersonLinesFill size={45} />
      </>
    ),
    href: "/Resume_XIE_TONE.pdf",
    style: "rounded-br-md",
    download: true,
  },
];

export default links;