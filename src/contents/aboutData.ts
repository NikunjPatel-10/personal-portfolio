import {AboutExperience, AboutSkillData } from "@/types";
import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

export const skillsData: AboutSkillData[] = [
  {
    id: 1,
    tech: "Frontend",
    icon: FaCode,
    items: ["HTML / CSS / SCSS", "JavaScript / TypeScript", "React.js / Next.js / Angular"],
    font: "font-[montserrat]",
  },
  {
    id: 2,
    tech: "Basic",
    icon: FaGraduationCap,
    items: ["C", "C++"],
    font: "font-[montserrat]",
  },
  {
    id: 3,
    tech: "worked with",
    icon: FaGraduationCap,
    items: [
      "Tailwind / Bootstrap / Ant-Design",
      "Shadcn-UI / Hero-UI / Material-UI / Mantine UI",
      "Motion / GSAP / Chart.Js",
    ],
    font: "font-[montserrat]",
  },
  {
    id: 4,
    tech: "Tools & Other",
    icon: FaGraduationCap,
    items: ["Git / GitHub", "Figma", "D3 chart"],
    font: "font-[montserrat]",
  },
  {
    id: 5,
    tech: "Working With",
    icon: FaGraduationCap,
    items: ["React.js", "Next.js", "Angular"],
    font: "font-[montserrat]",
  },
  {
    id: 6,
    tech: "Backend",
    icon: FaLaptopCode,
    items: ["Node Js"],
    font: "font-[montserrat]",
  },
  {
    id: 7,
    tech: "Database Basic",
    icon: FaLaptopCode,
    items: ["Prisma", "MongoDB", "Firebase", "PSQL"],
    font: "font-[montserrat]",
  },
];

export const experience: AboutExperience[] = [
  {
    id: 1,
    title: "Frontend Developer (Internship)",
    company: "1RIVET • Aug 2022 - Dec 2022",
    ul: [
     "Polished my skills of HTML, CSS, SCSS, JavaScript and Angular during this internship and learned many new things.",
      "Learned version controlling (Git) and its best practices (Git flow) for the organization.", 
      "Ensured cross browser compatibility.",
      "Collaborate closely with cross-functional teams, including designers and developers, to bring projects to fruition."
    ],
  },
  {
    id: 2,
    title: "Frontend Developer (Employment)",
    company: "1RIVET • Jan 2023 - Sep 2024",
    ul: [
      "Established and enforced coding standards to ensure consistency and maintainability across the codebase.",
      "Integrated MVP (Model, View, Presenter) pattern to streamline Angular component management and incorporate RESTful APIs ensuring seamless data communication between frontend and backend systems.",
      "Explored React Js from the Udemy course, completed projects like a Todo app and an employee management app etc.",
      "Explored Next Js from the Udemy course, completed projects like a Netflix Clone , crud app etc.",
      "Took the internal session in the Front-end community regarding the folders-structure in the React Js."
    ],
  },
  {
    id: 3,
    title: "Frontend Developer ",
    company: "Clapcle Infotech Private Limited • Dec 2024 - present",
    ul: [
      "Developed and maintained responsive, modular, and scalable user interfaces for multiple ERP modules including Sales, HR, Finance, and Inventory using React.js, Redux etc.",
      "Implemented dynamic, JSON-driven form generation, allowing users to customize and configure forms based on specific business requirements.",
      "Designed role-based dashboards to provide tailored data views and analytics for different user roles such as Admin, Manager, and Employee.",
      "Configured Axios interceptors for handling API requests globally — including token refresh, error handling, and unauthorized request redirection.",
      "Developed responsive and interactive UI for a share market platform using React.js, ensuring a seamless user experience.",
      "Collaborated with backend teams for API integration and ensured secure authentication."
    ],
  },
];


