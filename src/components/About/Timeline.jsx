import React from "react";
import { FaRegStar } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import experiences from "./experiences"

const experiencesWithIDs = experiences.map((experiences, index) => ({
  ...experiences,
  id: index + 1,
}));

const Timeline = () => {
  return (
    <VerticalTimeline>
      {experiencesWithIDs.map(
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
            <div className="text-base">{desc}</div>
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