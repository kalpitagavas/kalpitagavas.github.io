import React from 'react'
import {Typewriter,useTypewriter} from "react-simple-typewriter"
import {GiHand} from "react-icons/gi"
import {ImDownload} from "react-icons/im"
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import "../Pages/Home.css"
import vector2 from "../../src/assets/vector2.png"
import professionimg from "../assets/professionimg.png"
import { BsGithub } from 'react-icons/bs';
const Home = () => {

  return (
    <div id="home" className='intro'>
      <div className="i-left">
        <div className="i-name">
        <span>Hi, I am </span>
          <span id="user-detail-name" style={{fontSize:60,fontWeight:'bold'}}>Kalpita Gavas</span>
          <h1 className='typewriter'>I'm a {' '}
          <span className='typewriter'
                style={{
                  fontSize:60,
                  fontKerning: 2,
                  fontWeight: 'bolder',
                  // border:"1px solid red",
                  background: "linear-gradient(to right, #7ce8ff, #3a86f6)",
                  webkitBackgroundClip: "text",
                  webkitTextFillColor: "transparent",
                }}
              >
                <Typewriter className="typewriter"
                  words={["  Full Stack Developer.", "  Web Developer.","UI Developer."]}
                  loop={Infinity}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />
              </span><br/>
              <span  id="user-detail-intro">
            I am an enthusiastic and creative Full-Stack Web Developer with
            appropriate skills who's always willing to learn and work across
            technology and domains.
              </span>
          </h1>
          <div>
          <div className="max-w-screen-lg mx-auto ">
            <div
              className="max-w-screen-sm flex justify-start items-center space-x-8"
              data-aos="fade-up"
            >
              <div  id="contact-github">
                <a href="https://github.com/kalpitagavas" target="_blank" rel="noreferrer">
                  <BsGithub size="38px" color="white" />
                </a>
              </div>
              <div id="contact-linkedin">
                <a
                  href="https://www.linkedin.com/in/kalpita-gawas-76177a213/"
                  target="_blank" rel="noreferrer"
                >
                  <FaLinkedinIn size={40} color={"white"} />
                </a>
              </div>

              <div>
             <a href="Kalpita_Gavas_Resume.pdf"
                  download="Kalpita_Gavas_Resume.pdf"
                  onClick={()=>{
                  window.open("https://drive.google.com/file/d/1VavNKtUz-M_egby3XYL5TdKVz3FQFouc/view?usp=sharing")
                  }}
                  smooth
                  target="_blank" rel="noreferrer"
                  className="group text-white w-fit px-6 py-2 my-2 text-sm font-bold overflow-hidden flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer md:py-3 gap-3"
                >
                  <ImDownload size={30}></ImDownload>
                  </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="i-right">
        {/* <img src={vector1} alt=""/> */}
        {/* <img src={vector2} alt=""/> */}
        <img  class="home-img"
          className="mx-auto  rounded-full border-sky-500 border-dotted border-8"
          src={professionimg}
          alt="Profile-Pic"
          data-aos="fade-left"
        />

      </div>
      
    </div>

  )
}

export default Home
