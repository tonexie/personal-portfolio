import { MdOutlineWorkOutline } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";

const blueGradient = "linear-gradient(to bottom, #023e8a, #0077b6, #0096c7)";
const blue = "#023e8a"
const greenGradient =
  "linear-gradient(to bottom, #1b4332, #2d6a4f, #40916c, #52b788)";
const green = "#2d6a4f"
const purpleGradient =
  "linear-gradient(to bottom, #070F2B, #1B1A55, #535C91, #9290C3)";
const purple = "#1B1A55"

const experiences = [
  {
    title: "Most Google APIs Award | Google Developer Student Clubs Hackathon",
    sub: "University of Auckland",
    desc: "Won 'Most Google APIs Used' award for integrating 7 Google APIs to enhance physical health in the digital age. Built a health tracking app where a virtual pet reflects user health metrics, integrating data on sleep, heart rate, etc. Used React for the frontend, Express with Supabase and Prisma for the backend, and OAuth for authentication.",
    date: "2024 Sep",
    backCol: purple,
    icon: <FaRegStar />,
    iconCol: purpleGradient,
    arrowCol: purple,
    textCol: "#fff",
  },
  {
    title: "People's Choice Award | AI for the Environment Hackathon | AI Forum NZ",
    sub: "Datacom, Auckland",
    desc: "Won People's Choice Award for our pitch on protecting biodiversity through a pest control strategy to eliminate stoats. Prototyped an AI model trained on historical and environmental data to predict stoat behavior, guiding trap placement to make pest control more effective.",
    date: "2024 Aug",
    backCol: purple,
    icon: <FaRegStar />,
    iconCol: purpleGradient,
    arrowCol: purple,
    textCol: "#fff",
  },
  {
    title: "Graduate Teaching Assistant | Web Development",
    sub: "University of Auckland",
    desc: "Guided postgraduate students in mastering web development technologies as a COMPSCI 719 tutor, emphasizing foundational concepts, responsive design, frontend and backend frameworks, database management, and version control systems.",
    date: "2024 Feb - 2024 Jun",
    backCol: blue,
    icon: <MdOutlineWorkOutline />,
    iconCol: blueGradient,
    arrowCol: blue,
    textCol: "#fff",
  },
  {
    title: "Masters of Information Technology",
    sub: "University of Auckland",
    desc: (
      <ul className="list-disc">
        Key Courses include:
        <li className="ml-6 ">Creating Maintainable Software</li>
        <li className="ml-6 ">Cloud Computing Architecture</li>
        <li className="ml-6 ">Advanced Topics in Database Systems</li>
        <li className="ml-6 ">Software Tools and Techniques</li>
        <li className="ml-6 ">Advanced Information Security</li>
      </ul>
    ),
    date: "2024 Feb - Present",
    backCol: green,
    icon: <IoSchool />,
    iconCol: greenGradient,
    arrowCol: green,
    textCol: "#fff",
  },
  {
    title: "Frontend Engineer Internship",
    sub: "Fourier Labs | Remote",
    desc: "Led the optimization of a React website's responsiveness using Tailwind CSS, ensuring seamless user experience. Implemented new components and enhanced functionality for a Vue.js website based on Figma design specifications. Rapidly acquired proficiency in React, Vue.js, and Tailwind CSS, showcasing a strong commitment to learning and staying ahead of emerging technologies.",
    date: "2023 Nov - 2024 Jan",
    backCol: blue,
    icon: <MdOutlineWorkOutline />,
    iconCol: blueGradient,
    arrowCol: blue,
    textCol: "#fff",
  },
  {
    title: "Postgraduate Certificate of Information Technology",
    sub: "University of Auckland | Grade: A+ (96%)",
    desc: (
      <ul className="list-disc">
        Core Courses include:
        <li className="ml-6 ">
          Programming for Industry (Java, Swing, OOP, Industry Design Patterns,
          Unit Tests)
        </li>
        <li className="ml-6 ">
          Programming with Web Technologies (JavaScript, Node.js, Express.js,
          Handlebars, HTML, CSS)
        </li>
      </ul>
    ),
    date: "2023 Jun - 2023 Nov",
    backCol: green,
    icon: <IoSchool />,
    iconCol: greenGradient,
    arrowCol: green,
    textCol: "#fff",
  },
  {
    title: "Structural Engineer",
    sub: "Harris Foster Consulting Group | Auckland",
    desc: "Successfully managed a diverse portfolio of over 200 projects, ranging from individual homes to large-scale developments, demonstrating exceptional time management and efficiency, while consistently meeting deadlines and delivering within budget.",
    date: "2022 Mar - 2023 Apr",
    backCol: blue,
    icon: <MdOutlineWorkOutline />,
    iconCol: blueGradient,
    arrowCol: blue,
    textCol: "#fff",
  },
  {
    title: "Graduate Structural Engineer",
    sub: "TMC Consulting Engineers | Auckland",
    desc: "Completed over 60 projects, including detailed structural calculations, accurate CAD drawings, and preparation of BC documents.",
    date: "2021 Jun - 2022 Feb",
    backCol: blue,
    icon: <MdOutlineWorkOutline />,
    iconCol: blueGradient,
    arrowCol: blue,
    textCol: "#fff",
  },
  {
    title: "Intern -> Graduate Structural Engineer",
    sub: "MEC Consultant Engineering  | Auckland",
    desc: "Conducted weekly site inspections, completed CAD projects for beam and floor plans, and collaborated on various civil projects.",
    date: "2019 Dec - 2021 Feb",
    backCol: blue,
    icon: <MdOutlineWorkOutline />,
    iconCol: blueGradient,
    arrowCol: blue,
    textCol: "#fff",
  },
  {
    title: "Bachelor of Engineering Honours",
    sub: "The University of Queensland | Brisbane",
    desc: "Structural Engineering | Civil Engineering | Geotechnical Engineering | Transportation Design | Hydrology | Material Science",
    date: "2017 Feb - 2021 Jan",
    backCol: green,
    icon: <IoSchool />,
    iconCol: greenGradient,
    arrowCol: green,
    textCol: "#fff",
  },
  {
    title: "International Baccalaureate",
    sub: "Auckland International College",
    desc: "Physics | Chemistry | Math | English | Chinese | Economics",
    date: "2014 Jun - 2016 July",
    backCol: green,
    icon: <IoSchool />,
    iconCol: greenGradient,
    arrowCol: green,
    textCol: "#fff",
  },
];

export default experiences;