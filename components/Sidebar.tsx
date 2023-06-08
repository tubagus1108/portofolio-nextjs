import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";

import avatar from "../public/images/bagus.jpg"; // Assuming the image file is in the "public" directory

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div className="mx-auto border rounded-full">
        <Image
          src={avatar}
          alt="avatar"
          className="border rounded-full"
          layout="responsive"
          width={128}
          height={128}
        />
      </div>
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Muhamamd</span> Tubagus Sananto S.Kom
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        BackEnd Developer
      </p>
      {/* Resume */}
      <a
        href="/resume.pdf"
        download="CV_Tubagus.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="hhttps://youtube.com/@TubagusOfficial">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://id.linkedin.com/in/muhammad-tubagus-sananto-a486771b6/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/tubagusofficial">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500">
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Medan, Sumatra Utara, Indonesia</span>
        </div>
        <p className="my-2">tubagussananto2000@gmail.com</p>
        <p className="my-2">+6282284395802 / +6285760716816</p>
      </div>

      {/* Email Button */}
      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:tubagussananto2000@gmail.com")}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105"
      >
        {/* //TODO remove bg black */}
        Toggle Theme
      </button>
    </>
  );
};

export default Sidebar;
