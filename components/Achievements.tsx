"use client";


import React from "react";
import SectionHeading from "./section-heading";
// import 'react-vertical-timeline-component/style.min.css';
import { achievementsData, experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
// import { useTheme } from "@/context/theme-context";

const Experience = () => {
  const { ref } = useSectionInView("Experience");
  // const { theme } = useTheme();
  return (
    <section id="achievements" ref={ref} className="items-center scroll-mt-28 mb-28 sm:mb-40">
       <SectionHeading>My Achievements</SectionHeading>
       <VerticalTimeline lineColor="">
        {achievementsData.map((item,index) => (
          <React.Fragment key={index}>
          <VerticalTimelineElement
          contentStyle={{
            background: "#f3f4f6",
            boxShadow: "none",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            textAlign: "left",
            padding: "1.3rem 2rem",
          }}
          contentArrowStyle={{
            borderRight: "0.4rem solid #9ca3af",
          }}
          >
            <h3 className="font-semibold capitalize">{item.title}</h3>
            <p className="!mt-1 !font-normal text-gray-700">{item.description}</p>


          </VerticalTimelineElement>
          </React.Fragment>
        ))}
       </VerticalTimeline>
    </section>
  )
}

export default Experience;