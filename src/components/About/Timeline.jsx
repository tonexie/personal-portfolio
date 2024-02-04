import React from "react";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const blueGradient = "linear-gradient(to bottom, #023e8a, #0077b6, #0096c7)";
const greenGradient =
  "linear-gradient(to bottom, #1b4332, #2d6a4f, #40916c, #52b788)";

const experiences = [
  {
    id: 1,
    title: "Postgraduate Web-Development Tutor",
    sub: "University of Auckland",
    desc: "As a Postgraduate Web-Development Tutor at the University of Auckland, I guide students in building dynamic web applications with a focus on HTTP, HTML, URIs, client-side technologies, servlets, and databases for COMPSCI 719.",
    date: "2024 Feb - Present",
    backCol: blueGradient,
    icon: <MdOutlineWorkOutline />,
    iconCol: blueGradient,
    arrowCol: "#023e8a",
    textCol: "#fff",
  },
  {
    id: 2,
    title: "Masters of Information Technology",
    sub: "University of Auckland",
    desc: (
      <ul className="list-disc">
        Key Courses include:
        <li className="ml-6 ">Advanced Information Security</li>
        <li className="ml-6 ">Creating Maintainable Software</li>
        <li className="ml-6 ">Advanced Topics in Database Systems</li>
        <li className="ml-6 ">Software Tools and Techniques</li>
      </ul>
    ),
    date: "2024 Feb - Present",
    backCol: greenGradient,
    icon: <IoSchool />,
    iconCol: greenGradient,
    arrowCol: "#1b4332",
    textCol: "#fff",
  },
  {
    id: 3,
    title: "Frontend Engineer Internship",
    sub: "Fourier Labs | Remote",
    desc: "Played a key role in enhancing React and Vue websites, showcasing rapid skill acquisition in technologies that were previously unfamilar to me. Additionally, I effectively communicated with the team, underlining my commitment to ongoing learning and technical proficiency.",
    date: "2023 Dec - 2024 Jan",
    backCol: blueGradient,
    icon: <MdOutlineWorkOutline />,
    iconCol: blueGradient,
    arrowCol: "#023e8a",
    textCol: "#fff",
  },
  {
    id: 4,
    title: "Postgraduate Cerfticate of Information Technology",
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
    backCol: greenGradient,
    icon: <IoSchool />,
    iconCol: greenGradient,
    arrowCol: "#1b4332",
    textCol: "#fff",
  },
  {
    id: 5,
    title: "Structural Engineer",
    sub: "Harris Foster Consulting Group | Auckland",
    desc: "Successfully managed a diverse portfolio of over 200 projects, ranging from individual homes to large-scale developments, demonstrating exceptional time management and efficiency, while consistently meeting deadlines and delivering within budget.",
    date: "2022 Mar - 2023 Apr",
    backCol: blueGradient,
    icon: <MdOutlineWorkOutline />,
    iconCol: blueGradient,
    arrowCol: "#023e8a",
    textCol: "#fff",
  },
  {
    id: 6,
    title: "Graduate Structural Engineer",
    sub: "TMC Consulting Engineers | Auckland",
    desc: "Completed over 60 projects, including detailed structural calculations, accurate CAD drawings, and preparation of BC documents.",
    date: "2021 Jun - 2022 Feb",
    backCol: blueGradient,
    icon: <MdOutlineWorkOutline />,
    iconCol: blueGradient,
    arrowCol: "#023e8a",
    textCol: "#fff",
  },
  {
    id: 7,
    title: "Intern -> Graduate Structural Engineer",
    sub: "MEC Consultant Engineering  | Auckland",
    desc: "Conducted weekly site inspections, completed CAD projects for beam and floor plans, and collaborated on various civil projects.",
    date: "2019 Dec - 2021 Feb",
    backCol: blueGradient,
    icon: <MdOutlineWorkOutline />,
    iconCol: blueGradient,
    arrowCol: "#023e8a",
    textCol: "#fff",
  },
  {
    id: 8,
    title: "Bachelor of Engineering Honours",
    sub: "The University of Queensland | Brisbane",
    desc: "Structural Engineering | Civil Engineering | Geotechnical Engineering | Transportation Design | Hydrology | Material Science",
    date: "2017 Feb - 2021 Jan",
    backCol: greenGradient,
    icon: <IoSchool />,
    iconCol: greenGradient,
    arrowCol: "#1b4332",
    textCol: "#fff",
  },
  {
    id: 9,
    title: "International Baccalaureate",
    sub: "Auckland International College",
    desc: "Physics | Chemistry | Math | English | Chinese | Economics",
    date: "2014 Jun - 2016 July",
    backCol: greenGradient,
    icon: <IoSchool />,
    iconCol: greenGradient,
    arrowCol: "#1b4332",
    textCol: "#fff",
  },
];

const Timeline = () => {
  return (
    <VerticalTimeline>
      {experiences.map(
        ({
          id,
          title,
          sub,
          desc,
          date,
          backCol,
          icon,
          iconCol,
          arrowCol,
          textCol,
        }) => (
          <VerticalTimelineElement
            key={id}
            className="vertical-timeline-element--work"
            contentStyle={{ background: backCol, color: textCol }}
            contentArrowStyle={{ borderRight: `7px solid ${arrowCol}` }}
            date={date}
            iconStyle={{ background: iconCol, color: textCol }}
            icon={icon}
          >
            <h3 className="vertical-timeline-element-title text-lg">{title}</h3>
            <h4 className="vertical-timeline-element-subtitle text-[0.8rem]">
              {sub}
            </h4>
            <p>{desc}</p>
          </VerticalTimelineElement>
        )
      )}

      <VerticalTimelineElement
        iconStyle={{ background: "#ffc300", color: "#fff" }}
        icon={<FaRegStar />}
      />
    </VerticalTimeline>
  );
};

export default Timeline;
