import htmlIcon from "../../assets/icons/html.svg";
import cssIcon from "../../assets/icons/css.svg";
import jsIcon from "../../assets/icons/js.svg";
import reactIcon from "../../assets/icons/react.svg";
import vueIcon from "../../assets/icons/vue.svg";
import nodeIcon from "../../assets/icons/nodejs.svg";
import expressIcon from "../../assets/icons/expressjs.svg";
import javaIcon from "../../assets/icons/java.svg";
import sqlIcon from "../../assets/icons/sql.png";
import pythonIcon from "../../assets/icons/python.svg";
import tailwindIcon from "../../assets/icons/tailwind.svg";
import { FaGithub } from "react-icons/fa";
import mongoDBIcon from "../../assets/icons/mongoDB.png";
import svelteIcon from "../../assets/icons/svelte.svg";
import autocadIcon from "../../assets/icons/autocad.svg";

const technologies = [

  {
    src: mongoDBIcon,
    name: "MongoDB",
    style: { boxShadow: "2px 2px 4px #499d4a, -2px 2px 4px #499d4a" },
  },
  {
    src: expressIcon,
    name: "ExpressJs",
    style: { boxShadow: "2px 2px 4px #66798f, -2px 2px 4px #66798f" },
  },
  {
    src: reactIcon,
    name: "React",
    style: { boxShadow: "2px 2px 4px #4e7ab5, -2px 2px 4px #4e7ab5" },
  },
  {
    src: nodeIcon,
    name: "NodeJs",
    style: { boxShadow: "2px 2px 4px #21a366, -2px 2px 4px #21a366" },
  },
  {
    src: javaIcon,
    name: "Java",
    style: { boxShadow: "2px 2px 4px #1565c0, -2px 0px 4px #f44336" },
  },
  {
    src: svelteIcon,
    name: "Svelte",
    style: { boxShadow: "2px 2px 4px #ef4823, -2px 2px 4px #ffffff" },
  },
  {
    src: vueIcon,
    name: "VueJs",
    style: { boxShadow: "2px 2px 4px #81c784, -2px 0px 4px #455a64" },
  },
  {
    src: jsIcon,
    name: "JavaScript",
    style: { boxShadow: "2px 2px 4px #ffd600, -2px 2px 4px #ffd600" },
  },
  {
    src: htmlIcon,
    name: "HTML",
    style: { boxShadow: "2px 2px 4px #ff6d00, -2px 2px 4px #e65100" },
  },
  {
    src: cssIcon,
    name: "CSS",
    style: { boxShadow: "2px 2px 4px #039be5, -2px 2px 4px #0277bd" },
  },
  {
    src: tailwindIcon,
    name: "Tailwind",
    style: { boxShadow: "2px 2px 4px #00b4d3, -2px 2px 4px #00b4d3" },
  },
  {
    src: <FaGithub size={80} />,
    name: "GitHub",
    style: { boxShadow: "2px 2px 4px gray, -2px 2px 4px gray" },
  },
  {
    src: pythonIcon,
    name: "Python",
    style: { boxShadow: "2px 2px 4px #0277bd, -2px 0px 4px #ffc107" },
  },
  {
    src: sqlIcon,
    name: "SQL",
    style: { boxShadow: "2px 2px 4px #3d4b89, -2px 2px 4px #5663af" },
  },
  {
    src: autocadIcon,
    name: "AutoCAD",
    style: { boxShadow: "2px 2px 4px #cb2123, -2px 2px 4px #cb2123" },
  },

];

export default technologies;