import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import experiences from "./experiences";
import "./Timeline.css";

const Timeline = () => {
  return (
    <VerticalTimeline>
      {experiences.map(
        (
          {
            title,
            sub,
            desc,
            date,
            backCol,
            icon,
            iconCol,
            arrowCol,
            textCol,
          },
          index
        ) => (
          <VerticalTimelineElement
            key={index}
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
            <div className="text-base">{desc}</div>
          </VerticalTimelineElement>
        )
      )}

      {/* <VerticalTimelineElement
        iconStyle={{ background: "#ffc300", color: "#fff" }}
        icon={<FaRegStar />}
      /> */}
    </VerticalTimeline>
  );
};

export default Timeline;
