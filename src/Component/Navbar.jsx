import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ImDownload } from "react-icons/im";
import { Link } from "react-scroll";
import Button from "../Pages/Button";


const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      class:"nav-link home"
    },
    {
      id: 2,
      link: "about",
      class:"nav-link about"
    },
    {
      id: 3,
      link: "projects",
      class:"nav-link projects"

    },
    {
      id: 4,
      link: "skills",
      class:"nav-link skills"
    },
    {
      id: 5,
      link: "contact",
      class:"nav-link contact"
    },

  ];

  return (
    <div className=" max-w-screen top-0 left-0 bg-sky-700 border-0 mx-auto flex justify-around items-center w-full h-20 px-1 py-1 text-white fixed z-10 " id="nav-menu">
      <div className=" flex items-center border-0 justify-center">
        <Link to="home"  smooth duration={1000}>
        <div  id="user-detail-name"
 className="flex items-center justify-center border-0 cursor-pointer  text-6xl  capitalize italic " data-aos="fade-right">
         Kalpita Gavas
       </div>
        </Link>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-lg text-white hover:scale-105 hover:text-teal-200 duration-300"
          >
            <Link to={link} smooth duration={1000} className="hover:underline underline-offset-8">
              {link}
            </Link>
           
          </li>
        ))}
      </ul>
     

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-20 z-10  text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue to-black-800 text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={600}
              >
                {link}
                
              </Link>
             
           
            </li>
          ))}
        </ul>
      )}
         <div class="nav-link resume" >
             <a href="Kalpita_Gavas_Resume.pdf"
                  download="Kalpita_Gavas_Resume.pdf"
                  onClick={()=>{
                  window.open("https://drive.google.com/file/d/1VavNKtUz-M_egby3XYL5TdKVz3FQFouc/view?usp=sharing")
                  }}
                  smooth
                  target="_blank" rel="noreferrer"
                  className="group md:w-20 text-white w-fit px-2 py-2 my-2 text-sm font-bold overflow-hidden flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer md:py-3 gap-3">

                  <button style={{display:"flex"}} size={30}>Resume <ImDownload ></ImDownload></button>
                  </a>
              </div>

    </div>
  );
};

export default NavBar;
