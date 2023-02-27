import React from "react";
import professionimg from "../../src/assets/professionimg.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Button from "./Button";

const About = () => {
  useEffect(() => {
    AOS.init({ delay: 50 });
  }, []);

  return (
    <div id="about" class="about section"
      name="about"
      className=" w-scree-full h-fit  bg-gradient-to-b from-black-800 to-black text-blue-300 pt-10 border-0 border-white" 
    >
      <div className="hidden md:block ">
        <div>
          <Button />
        </div>
      </div>
      <div style={{ textAlign: "center", border: "0px solid white" }} data-aos="fade-right">
        <p
          className="text-4xl text-gray-100 uppercase font-bold inline border-b-4 border-gray-100"
        >
          About me
        </p>
      </div>

      <div className="w-9/12 mb-60 mx-auto grid lg:grid-cols-2 pt-4 border-0 border-red items-center ">
        <div className="hidden lg:block lg:mt-1 border-0 border-red ">
          <img  class="home-img"
            className=" w-10/12 rounded-xl "
            src={professionimg}
            alt="logo"
            data-aos="fade-up"
          />
        </div>

        <div className="px-8 py-8 max-w-md mx-auto sm:max-w-xl lg:px-0 lg:py-4 lg:max-w-screen-lg ">
          <img
            className="rounded-full shadow-xl sm:mt-3 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
            src={professionimg}
            alt="logo"
            data-aos="fade-up"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "left",
              border: "0px solid white",
              marginTop: "10px",
            }}
          >
            <p id="user-detail-intro"
              className="mt-6 text-xl text-white lg:text-lg md:text-md sm:text-sm"
              data-aos="fade-up"
            >
             Passionate Full Stack Web Developer with expertise in
             developing websites with a wide range of front-end skills.
             Hands-on experience in 1000+ hours of DSA and
             Coding. Also done 2+ major group projects and 100+ mini
             projects from scratch at Masa School. Looking for a challenging role in a growth oriented organization.
            </p>
            <p className="mt-4 ml-60 text-6xl text-white lg:text-lg md:text-md sm:text-sm font-sarif">-Kalpita Gavas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;