import spaceshipImg from "../../assets/portfolio/spaceship-game.png";
import fourierLabsImg from "../../assets/portfolio/fourier-labs.png";
import g2BlogImg from "../../assets/portfolio/g2-blog.png";
import pokemonImg from "../../assets/portfolio/pokemon-viewer.png";
import portfolioImg from "../../assets/portfolio/personal-website.png";
import avatarImg from "../../assets/portfolio/avatar-test.png";
import lecturmoImg from "../../assets/portfolio/lecturmo.png";
import GJHouseImg from "../../assets/portfolio/GJHouse.webp";

// default heights
const mobileBackHeight = "500px";
const PCBackHeight = "480px";

const projects = [
  {
    title: "Lecturmo - MERN Stack",
    src: lecturmoImg,
    desc: "Lecturmo is a student course review website enhanced with technology. It uses a dynamic QR code system for real-time attendance tracking, linked to a badge system where students obtain ranks based on attendance, displayed alongside their reviews to enhance credibility. The platform also includes AI-driven technology, leveraging OpenAI API, to generate concise summaries of course reviews, making them more accessible and informative. Additionally, Lecturmo ensures all users are verified university students by requiring registration via university email addresses, maintaining a reliable and relevant user base. Finally, there is a comprehensive account and profile management system in place.",
    skills: [
      "MongoDB",
      "ExpressJs",
      "React",
      "NodeJs",
      "PassportJs",
      "MUI",
      "AJAX",
      "API",
      "PR Review",
      "HTML",
      "CSS",
      "GitHub",
    ],
    demo: "https://lecturmo.org",
    code: "https://github.com/tonexie/lecturmon",
    mobileBackHeight: "700px",
    PCBackHeight: "650px",
  },
  {
    title: "Full Stack Blog Website",
    src: g2BlogImg,
    desc: "User-friendly, secure, and interactive. Features include user registration and authentication, article comments, likes, and subscriptions. WYSIWYG editor for content control. User autonomy over personal information. Analytics for insights into user-generated content. Primary reviewer for PRs and merge conflicts.",
    skills: [
      "ExpressJs",
      "NodeJs",
      "VanillaJs",
      "UUID",
      "AJAX",
      "API",
      "Handlebars",
      "HTML",
      "CSS",
      "SQL",
      "ER Diagram",
      "GitHub",
    ],
    demo: "https://full-stack-blog-f6yb.onrender.com/",
    code: "https://github.com/tonexie/fullstack-blog",
    mobileBackHeight: "550px",
    PCBackHeight: PCBackHeight,
    warning: true,
  },
  {
    title: "Fourier Labs Landing Page",
    src: fourierLabsImg,
    desc: "In the Vue development role for the Fourier Labs landing page, successfully integrated new components based on Figma design specifications, encompassing the creation of numerous page views and visual elements. Ensured the website's responsive design, improved footer link functionality, and addressed existing bugs for enhanced performance.",
    skills: [
      "VueJs",
      "JavaScript",
      "NodeJs",
      "GitHub",
      "HTML",
      "CSS",
      "Tailwind",
    ],
    demo: "https://fourierlabs.io/",
    code: false,
    mobileBackHeight: mobileBackHeight,
    PCBackHeight: PCBackHeight,
    warning: false,
  },
  {
    title: "Avatar Quiz Website",
    src: avatarImg,
    desc: "This application uses Svelte integrated with the Flowbite UI component library to deliver a fun and interactive web application. My app features a dynamic quiz platform, a results page utilizing Svelte's slug routing, an search page with API integration to a TV database, and a visually appealing credits page. ",
    skills: ["Svelte", "Flowbite", "Tailwind", "AJAX", "JavaScript", "HTML", "CSS"],
    demo: "https://avatar-character-quiz.netlify.app/",
    code: "https://github.com/tonexie/avatar-character-test",
    mobileBackHeight: "550px",
    PCBackHeight: PCBackHeight,
    warning: false,
  },
  {
    title: "Spaceship Game 2-Player",
    src: spaceshipImg,
    desc: "This project implements a two-player spaceship game using the Pygame library. Players control yellow and red spaceships, aiming to defeat each other by reducing their opponent's health points to zero. The game features mechanics such as spaceship movement, bullet firing, booster pickups with various effects, and winner determination.",
    skills: ["Python", "PyGame", "OOP"],
    demo: false,
    code: "https://github.com/tonexie/spaceship-game",
    mobileBackHeight: mobileBackHeight,
    PCBackHeight: PCBackHeight,
    warning: false,
  },
  {
    title: "Pokemon Viewer Website",
    src: pokemonImg,
    desc: "Developed a dynamic Pokémon viewer website, leveraging HTML, CSS, and JavaScript to bring interactivity to the platform. Implemented multiple theme selectors to enhance the user experience and employed AJAX requests and API calls to third-party applications, providing comprehensive and real-time Pokémon information. Incoporated engaging animations to increase site visual appeal",
    skills: ["ExpressJs", "NodeJs", "AJAX", "JavaScript", "HTML", "CSS"],
    demo: "https://pokemon-viewer-1g8o.onrender.com/#",
    code: false,
    mobileBackHeight: "550px",
    PCBackHeight: PCBackHeight,
    warning: true,
  },
  {
    title: "Personal Portfolio Website",
    src: portfolioImg,
    desc: "Explore my dynamic personal portfolio website, built with React and Tailwind CSS, enhanced with fluid animations powered by Framer Motion! With a focus on modular input data, ensuring effortless updates to showcase my evolving skills and projects.",
    skills: [
      "React",
      "Tailwind",
      "Framer Motion",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    code: "https://github.com/tonexie/personal-portfolio",
    mobileBackHeight: mobileBackHeight,
    PCBackHeight: PCBackHeight,
    warning: false,
  },
  {
    title: "G.J. Gardner Showhome",
    src: GJHouseImg,
    desc: "As the structural engineer for a G.J. Gardner showhome, I led the engineering design, focusing on ensuring structural integrity and compliance with safety standards, as well as coordinating the building consent. My role involved optimizing material use and implementing bespoke engineering solutions to meet both aesthetic and functional requirements.",
    skills: [
      "Structual Engineering",
      "AS/NZS Codes",
      "Site Inspections",
      "SpaceGass",
      "AutoCAD",
      "Revit",
      "Excel",
    ],
    demo: "https://www.gjgardner.co.nz/show-homes/hamptons-meets-paerata",
    mobileBackHeight: mobileBackHeight,
    PCBackHeight: PCBackHeight,
    warning: false,
  },
];

// PROJECTS ARCHIVE
// {
//   title: "Eigen Cash Website",
//   src: eigenCashImg,
//   desc: "Led the optimization of Fourier Lab's Eigen Cash website's React-based architecture, ensuring full responsiveness and adapting the design for diverse screen sizes. Successfully integrated an extra page to inform users of the privacy policy.",
//   skills: ["React", "JavaScript", "NodeJs", "GitHub", "HTML", "CSS"],
//   demo: "https://www.eigen.cash/",
//   code: false,
//   mobileBackHeight: mobileBackHeight,
//   PCBackHeight: PCBackHeight,
//   warning: false,
// },

export default projects;