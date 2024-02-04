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
    desc: "Software Engineering and stuff",
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
    desc: "Software Engineering and stuff",
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
    desc: "Software Engineering and stuff",
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
    sub: "University of Auckland",
    desc: "Software Engineering and stuff",
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
    desc: "Software Engineering and stuff",
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
    desc: "Software Engineering and stuff",
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
    desc: "Software Engineering and stuff",
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
    desc: "Software Engineering and stuff",
    date: "2017 Feb - 2021 Jan",
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
