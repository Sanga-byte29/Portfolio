import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Image1 from "@/public/image-1.png";
import Image2 from "@/public/image-2.png";
import Image3 from "@/public/image-3.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Achievements",
    hash: "#achievements",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Internship Trainee",
    location: "Ropar, India",
    description:[
      "•Working on the Industry Grade Project Using Ansys Digital TwinMode",
      "•Working on the simulation of photoelectric effect in ANSYS",
      "•Making Progress Report and Documentation for every month of given project for the final evaluation",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer Intern",
    location: "Gurgaon, India",
    description:[
      "•Designed and Developed a product called Briefly-Vendor.",
      "•Added some features like Chat-App in which client able to communicate with the Briefly Company.",
      "•Added a Calendar app in which company can schedule appointments with their clients in order to create a brief",
      "•Added notifications so that client will get notified whether he/she created a brief or not",
    ],
    icon: React.createElement(FaReact),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer Trainee",
    location: "Houston, TX",
    description: [
        "•Fixed bugs in the Stack Overflow clone project.",
        "•Learned NodeJS from the Training cum Internship program.",
        "•Added Chatbot to the project using Chatbot API.",
        "•Improved responsiveness for all mobile devices."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
}
] as const;

export const projectsData = [
  {
    title: "NotePal",
    description:
    ["• An AI Note Taking app for Developers",
      "• Users can create note and note will automatically get saved in the database",
      "• Implemented OpenAI Plugin to autocomplete the notes"],
    tags: ["React", "Next.js", "OpenAI", "Tailwind", "Clerk"],
    imageUrl: Image1,
  },
  {
    title: "Shopify Creative Dashboard",
    description:
      "• A fully functional creative dashboard for business purposes which has lots of features like CRUD and Drag and Drop , Calendar and graphs.",
    tags: ["React", "Tailwind", "Syncfusion"],
    imageUrl: Image2,
  },
  {
    title: "Harmony - ECommerce Website",
    description:
      "• A fullstack website where products can be ordered and placed and integrated with Stripe API",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: Image3,
  },
] as const;

export const achievementsData = [
  {title: "Smart India Hackathon Hardware Edition 2022",
description:[
  "• My Team bagged 1st runner's up in Smart India Hackathon Hardware Edition 2022 held in Durg Chattisgarh",
],
},
  {title: "Innominds Hackathon For Entrepreuners",
description: "• My Team bagged 6th Rank out of Top 10 in Innominds Hancakton organised by Startup Odisha 2023",},
  {title: " Global Rank - 1620",description: "• Secured in CodeChef Cookoff June 2021"},
  {title: "Gold Medal ",description: "• Secured9 AIR - 362 in Computer Olympiad Silverzone"},
] as const

export const skillsData = [
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "AWS",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;