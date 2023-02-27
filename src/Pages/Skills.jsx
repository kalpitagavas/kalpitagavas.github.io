import React from "react";
import "./skills.css";
//frontend
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.png";
import chakra from "../assets/chakra.png";
import typescript from "../assets/typescript.png";


//backend
import node from "../assets/node.png";


//other tools
import npm from "../assets/npm.png";
import github from "../assets/github.png";
import photoshop from "../assets/photoshop.webp";


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  const frontend = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-700",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-700",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-900",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-700",
    },
    {
      id: 5,
      src: redux,
      title: "Redux",
      style: "shadow-purple-900",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-700",
    },
    {
      id: 7,
      src: chakra,
      title: "Chakra UI",
      style: "shadow-cyan-700",
    },
    {
      id: 8,
      src: typescript,
      title: "Typescript",
      style: "shadow-blue-800",
    },
  
    {
      id: 9,
      src: node,
      title: "Node JS",
      style: "shadow-green-900",
    },
    
    
    
  ];

  const tools = [
    {
      id: 1,
      src: npm,
      title: "NPM",
      style: "shadow-red-800",
    },
    {
      id: 2,
      src: github,
      title: "GitHub",
      style: "shadow-gray-700",
    },
    {
      id: 3,
      src: photoshop,
      title: "Photoshop",
      style: "shadow-blue-900",
    },
    
  ];

  useEffect(() => {
    AOS.init({ delay: 200 });
  }, []);

  return (
    <div
      name="skills" id="skills"
      className="bg-gradient-to-b to-black-800 bg-sky-700 w-full pt-2 md:pt-28 text-blue-100 "
    >
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div style={{ textAlign: "center" }} data-aos="fade-right">
          <p
            className="text-4xl
           font-bold border-b-4  uppercase border-blue-100 p-2 inline">
            Technical Skills
          </p>
        </div>
        <div className="w-10/12 mx-auto grid grid-cols-2 mt-10 text-black  border-0 border-white sm:grid-cols-3 lg:grid-cols-5 gap-10 text-center py-8 ">
          {frontend.map(({ id, src, title, style }) => (
            <div
              key={id}
              className="hexagon"
              data-aos="fade-up"
            >
              <img
                src={src}
                alt={title}
                className={`  mx-auto shadow-lg ${style}`}
              />
              <p className="mt-4 mb-8 bg-blue-100">{title}</p>
            </div>
          ))}
        </div>

        {/* otherTools */}
        <div className="flex justify-center mt-10">
          <p
            className="text-4xl
           font-bold border-b-4 uppercase border-blue-100 p-2 inline"
            data-aos="fade-right"
          >
            Other Tools
          </p>
        </div>
        <div className="w-11/12 mx-auto grid grid-cols-2 mt-8 text-black  border-0 border-white sm:grid-cols-3 lg:grid-cols-5 gap-10 text-center py-8 ">
          {tools.map(({ id, src, title, style }) => (
            <div key={id} className="hexagon">
              <img
                src={src}
                alt={title}
                className={` mx-auto shadow-lg ${style}`}
              />
              <p className="mt-4 mb-8">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
