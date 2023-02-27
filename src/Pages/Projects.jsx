import React from "react";

//spotify
import HomePageU from "../assets/projectimgs/spotify/homePage.png";

//Uboric
import HomePageT from "../assets/projectimgs/Uboric/homePage.png";

//Todoapp
import HomePageC from "../assets/projectimgs/todoapp/homePage.png";

//Rentomojo
import HomePageB from "../assets/projectimgs/rontomojo/homePage.png";

import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiBootstrap,
} from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    AOS.init({ delay: 200 });
  }, []);

  return (
    <div
      name="projects" id="projects"
      className="bg-gradient-to-b to w-full text-white-200 pt-32 pb-32"
    >
      <div className="w-10/12 mx-auto p-2 " data-aos="fade-right">
        <div style={{ textAlign: "center" }}>
          <p className="text-4xl text-gray-100 uppercase font-bold inline border-b-4 border-white">
            Projects
          </p>
        </div>
      </div>


      <div className="w-10/14 dark:text-white grid grid-rows-2 grid-flow-col gap-4 " class="project-card">
      {/* TodoApp project */}
        <div class="project-card" className="py-5 shadow-md shadow-blue-400 mt-0 md:mt-10">
          <div data-aos="fade-up">
            <a
              href="https://todoappusingreacthook.netlify.app/"
              target={"_blank"}
              rel="noreferrer"
            >
              <img
                className="w-11/12 mb-5 hover:scale-110 mx-auto object-contain  duration-700 hover:cursor-pointer "
                src={HomePageC}
                alt="Todoapp-homepage"
                class="project-image"
              />
            </a>
          </div>
          <div style={{ textAlign: "center",  color:"white"}}>
            <h1
              style={{
                fontSize: 30,
                fontKerning: 2,
                fontWeight: 700,
                background: "linear-gradient(to right, #7ce8ff, #3a86f6)",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
              }}
              data-aos="fade-right"
              class="project-title"
            >
             TODO APP
            </h1>
            <p
              className="px-5 mt-2 text-white sm:mt-2 sm:text-lg"
              data-aos="fade-right" class="project-description"
            >
             Todo App for creating list of items with Add Update as well as Delete functionality and also with good UI
            </p>
          </div>
          <div class="project-tech-stack" 
            className="flex justify-center items-center gap-x-2 mt-5"
           
          >
            <div>
              <SiCss3
                size="32px"
                color="#264de4"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
            <div>
              <SiHtml5
                size="32px"
                color="#e34c26"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
            <div>
              <SiJavascript
                size="32px"
                color="yellow"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>

            <div>
              <SiReact
                size="32px"
                color="#04D8FE"
                className="hover:animate-spin hover:cursor-pointer"
              />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center",gap:10,marginTop:"30px"  }}>
              <div className="mt-4 sm:mt-6" class="project-github-link">
                <a 
                  href="https://github.com/kalpitagavas/TodoApp"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button className="inline-flex gap-3 px-4 py-2 rounded-full  hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointershadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                    GitHub
                    <BsGithub size={22} />
                  </button>
                </a>
              </div>
              <div className="mt-4 sm:mt-6" class="project-deployed-link">
                <a
                  href="https://todoappusingreacthook.netlify.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button className="inline-flex gap-3 px-4 py-2 rounded-full hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                    View
                    <FaExternalLinkAlt size={18} />
                  </button>
                </a>
              </div>
          
          </div>
        </div>

        {/*Rentomojo  */}
        <div className="py-5 shadow-md shadow-blue-400 mt-0 md:mt-10  ">
          <div data-aos="fade-up">
            <a
              href="https://effervescent-cucurucho-64f7b0.netlify.app/"
              target={"_blank"}
              rel="noreferrer"
            >
              <img
                className="w-10/12 mb-5 hover:scale-110 mx-auto object-contain  duration-700 hover:cursor-pointer "
                src={HomePageB}
                alt="Rentomojo-homepage"
              />
            </a>
          </div>
          <div style={{ textAlign: "center" ,  color:"white"}}>
            <h1
              style={{
                fontSize: 30,
                fontKerning: 2,
                fontWeight: 700,
                background: "linear-gradient(to right, #7ce8ff, #3a86f6)",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
              }}
              data-aos="fade-right"
              class="project-title"
            >
              Rentomojo (Clone)
            </h1>
            <p
              className="px-5 mt-2 text-white sm:mt-2 sm:text-lg"
              data-aos="fade-right"class="project-description"
            >
           Rentomojo is India's leading rental platform brings to you a wide range of products on rent
            </p>
          </div>
          <div class="project-tech-stack"
            className="flex justify-center items-center gap-x-2 mt-5"
            data-aos="zoom-out"
          >
            <div>
              <SiCss3
                size="32px"
                color="#264de4"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
            <div>
              <SiHtml5
                size="32px"
                color="#e34c26"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
            <div>
              <SiJavascript
                size="32px"
                color="yellow"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
            <div>
              <SiBootstrap 
              size="32px"
              color="blue"
              className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center",gap:10,marginTop:"30px"  }}>
              <div className="mt-4 sm:mt-6"  class="project-github-link">
                <a
                  href="https://github.com/saikiran12040/far-amusement-2846"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button className="inline-flex gap-3 px-4 py-2 rounded-full  hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointershadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                    GitHub
                    <BsGithub size={22} />
                  </button>
                </a>
              </div>
              <div className="mt-4 sm:mt-6"  class="project-deployed-link">
                <a
                  href="https://effervescent-cucurucho-64f7b0.netlify.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button className="inline-flex gap-3 px-4 py-2 rounded-full hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                  View
                    <FaExternalLinkAlt size={18} />
                  </button>
                </a>
              </div>
           
          </div>
        </div>

        {/* Uboric */}
        <div className="py-5 shadow-md shadow-blue-400 mt-0 md:mt-10  ">
          <div data-aos="fade-up">
            <a
              href="https://musical-parfait-580c0f.netlify.app/index.html#"
              target={"_blank"}
              rel="noreferrer"
            >
              <img
                className="w-10/12 mb-5 hover:scale-110 mx-auto object-contain  duration-700 hover:cursor-pointer "
                src={HomePageT}
                alt="uboric-homepage"
              />
            </a>
          </div>
          <div style={{ textAlign: "center",  color:"white" }}>
            <h1
              style={{
                fontSize: 30,
                fontKerning: 2,
                fontWeight: 700,
                background: "linear-gradient(to right, #7ce8ff, #3a86f6)",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
              }}
              data-aos="fade-right"
              class="project-title"
            >
               Uboric (Clone)
            </h1>
            <p
              className="px-5 mt-2 text-white sm:mt-2 sm:text-lg"
              data-aos="fade-right" class="project-description"
            >
              Online shopping with Uboric is quick, convenient and trouble-free. You can shop for the desired product right from the comfort of your home and get them delivered straight to your doorstep. Uboric offers you the chance to choose top branded products sitting in the comfort of your homes and just clicking on your requirements to get it delivered atyour doorstep.
            </p>
          </div>
          <div class="project-tech-stack"
            className="flex justify-center items-center gap-x-2 mt-5"
            data-aos="zoom-out"
          >
            <div>
              <SiCss3
                size="32px"
                color="#264de4"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
            <div>
              <SiHtml5
                size="32px"
                color="#e34c26"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
            <div>
              <SiJavascript
                size="32px"
                color="yellow"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center",gap:10,marginTop:"30px"  }} >
            <div className="mt-4 sm:mt-6"  class="project-github-link">
                <a
                  href="https://github.com/Omchand27/Uboric-Clone"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button className="inline-flex gap-3 px-4 py-2 rounded-full hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointershadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                    GitHub
                    <BsGithub size={22} />
                  </button>
                </a>
              </div>
              <div className="mt-4 sm:mt-6"  class="project-deployed-link">
                <a
                  href="https://musical-parfait-580c0f.netlify.app/index.html#"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button className="inline-flex gap-3 px-4 py-2 rounded-full hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                   View
                    <FaExternalLinkAlt size={18} />
                  </button>
                </a>
              </div>
            
          </div>
        </div>

        {/* spotify */}
        <div className="py-5 shadow-md shadow-blue-400 mt-0 md:mt-10  ">
          <div data-aos="fade-up">
            <a
              href="https://fastidious-concha-b07348.netlify.app/"
              target={"_blank"}
              rel="noreferrer"
            >
              <img
                className="w-11/12 mb-5 hover:scale-110 mx-auto object-contain  duration-700 hover:cursor-pointer "
                src={HomePageU}
                alt="spotify-homepage"
              />
            </a>
          </div>
          <div style={{ textAlign: "center" ,  color:"white"}}>
            <h1
              style={{
                fontSize: 30,
                fontKerning: 2,
                fontWeight: 700,
                background: "linear-gradient(to right, #7ce8ff, #3a86f6)",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
              }}
              data-aos="fade-right"
              class="project-title"
            >
              Spotify (Clone)
            </h1>
            <p
              className=" px-5 mt-2 text-white sm:mt-2 sm:text-lg"
              data-aos="fade-right" class="project-description"
            >
              Spotify is a digital music service that gives you access to millions of songs.
            </p>
          </div>
          <div class="project-tech-stack"
            className="flex justify-center items-center gap-x-2 mt-5"
            data-aos="zoom-out"
          >
            <div>
              <SiCss3
                size="32px"
                color="#264de4"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
            <div>
              <SiHtml5
                size="32px"
                color="#e34c26"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
            <div>
              <SiJavascript
                size="32px"
                color="yellow"
                className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
            <div>
            <SiReact
              size="32px"
              color="blue"
              className="hover:animate-bounce hover:cursor-pointer"
              />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center",gap:10,marginTop:"30px" }}>
              <div className="mt-4 sm:mt-6"  class="project-github-link">
                <a
                  href="https://github.com/kalpitagavas/spotifyclone"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button className="inline-flex gap-3 px-4 py-2 rounded-full  hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointershadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                    GitHub
                    <BsGithub size={22} />
                  </button>
                </a>
              </div>
              <div className="mt-4 sm:mt-6"  class="project-deployed-link">
                <a
                  href="https://fastidious-concha-b07348.netlify.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button className="inline-flex gap-3 px-4 py-2 rounded-full hover:opacity-70 bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer shadow-lg uppercase tracking-wide font-semibold text-sm text-white sm:text-base">
                    View
                    <FaExternalLinkAlt size={18} />
                  </button>
                </a>
              </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
