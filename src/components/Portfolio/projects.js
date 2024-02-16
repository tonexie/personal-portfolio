import eigenCashImg from "../../assets/portfolio/eigen-cash.png";
import fourierLabsImg from "../../assets/portfolio/fourier-labs.png";
import g2BlogImg from "../../assets/portfolio/g2-blog.png";
import pokemonImg from "../../assets/portfolio/pokemon-viewer.png";
import portfolioImg from "../../assets/portfolio/personal-website.png";

// default heights
const mobileBackHeight = "500px";
const PCBackHeight = "480px";

const projects = [
  {
    title: "Full Stack Blog Website",
    src: g2BlogImg,
    desc: "User-friendly, secure, and interactive. Features include user registration and authentication, article comments, likes, and subscriptions. WYSIWYG editor for content control. User autonomy over personal information. Analytics for insights into user-generated content.",
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
    mobileBackHeight: mobileBackHeight,
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
    title: "Eigen Cash Website",
    src: eigenCashImg,
    desc: "Led the optimization of Fourier Lab's Eigen Cash website's React-based architecture, ensuring full responsiveness and adapting the design for diverse screen sizes. Successfully integrated an extra page to inform users of the privacy policy.",
    skills: ["React", "JavaScript", "NodeJs", "GitHub", "HTML", "CSS"],
    demo: "https://www.eigen.cash/",
    code: false,
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
];

export default projects;