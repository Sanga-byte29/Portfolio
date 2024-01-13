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
      "Working on the Industry Grade Project Using Ansys Digital TwinMode",
      "Working on the simulation of photoelectric effect in ANSYS",
      "Making Progress Report and Documentation for every month of given project for the final evaluation",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer Intern",
    location: "Gurgaon, India",
    description:[
      "Designed and Developed a product called Briefly-Vendor.",
      "Added some features like Chat-App in which client able to communicate with the Briefly Company.",
      "Added a Calendar app in which company can schedule appointments with their clients in order to create a brief",
      "Added notifications so that client will get notified whether he/she created a brief or not",
    ],
    icon: React.createElement(FaReact),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer Trainee",
    location: "Houston, TX",
    description: [
        "Fixed bugs in the Stack Overflow clone project.",
        "Learned NodeJS from the Training cum Internship program.",
        "Added Chatbot to the project using Chatbot API.",
        "Improved responsiveness for all mobile devices."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
}
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: Image1,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: Image2,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: Image3,
  },
] as const;

export const achievementsData = [
  {title: ""},
  {title: ""},
  {title: ""},
  {title: ""},
] as const

export const skillsData = [
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
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;