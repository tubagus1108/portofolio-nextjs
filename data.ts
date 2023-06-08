import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>nestjs-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "NestJS",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "MonggoDB",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Lumen",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Slim",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Laravel",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Microservice",
    level: "70",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "VS Code",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Monggo Compas",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "GIT",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Docker",
    level: "70",
  },
];

export const projects: IProject[] = [
  { 
    name: "Simbry",
    description:
      "",
    image_path: "/images/simbry.png",
    deployed_url: "https://ypsimlibrary.com/",
    github_url: "",
    category: ["react"],
    key_techs: ["React", "Boostrap"],
  },
  {
    name: "Simbry Admin",
    image_path: "/images/adminsimbry.png",
    deployed_url: "https://admin.ypsimlibrary.com",
    github_url: "",
    category: ["laravel",'react'],
    description:
      "",
    key_techs: ["React", "firebase", "Laravel"],
  },
];
