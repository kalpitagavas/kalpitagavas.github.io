import React, { useEffect, useRef } from "react";
import { FcPhone } from "react-icons/fc";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import emailjs from "@emailjs/browser"

import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const form=useRef()
  const sendEmail=(e)=>{
 e.preventDefault()
    emailjs.sendForm('service_h0566yj','template_t57n2c4',form.current,'ohOiBLauGKx-owaPZ')
  .then((result)=>{
    console.log(result.text)
    console.log("message sent")
  },(error)=>{
    console.log(error.text)
  })
}
  useEffect(() => {
    AOS.init({ delay: 200 });
  }, []);
  return (
    <>
      <div 
        name="contact" id="contact"
        className="w-full bg-sky-700  mt-40 p-4 text-blue-200 pt-10"
      >
        {/* {show && <Toast/> } */}
        <div className="max-w-screen-lg mx-auto" data-aos="fade-right">
          <p className="text-4xl text-white font-bold inline border-b-4 border-white">
            Contact
          </p>
          <p className="py-6 ">Contact me below to get in touch with me</p>
        </div>
        <div className="max-w-screen-lg flex flex-col mx-auto mt-18 mb-18 md:m-auto md:flex-row gap-x-3 justify-center items-center">
          {/* Left side */}
          <div className="flex flex-col justify-center gap-y-14 mt-0 md:-mt-20">
            <div
              className="w-full flex gap-3 p-6 rounded-xl  shadow-blue-400 shadow-md "
              data-aos="fade-up-right"
            >
              <div>
                <FcPhone className="hover:animate-bounce" size="32px" />
              </div>
              <div>
                <h1 className="text-xl font-bold" id="contact-phone">Phone :</h1>
                <h1 className="text-xl text-white ">+91 8169533371</h1>
              </div>
            </div>
            <div
              className="w-full flex gap-3 p-6 rounded-xl shadow-md shadow-blue-400"
              data-aos="fade-up-right"
            >
              <div>
                <SiGmail
                  className="hover:animate-bounce"
                  size="32px"
                  color="red"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold" id="contact-email">Email :</h1>
                <h1 className="text-xl text-white">
                  kalpitagavas20@gmail.com
                </h1>
              </div>
            </div>
            <div
              className="w-full flex gap-3 p-6 rounded-xl shadow-md shadow-blue-500"
              data-aos="fade-up-right"
            >
              <div>
              
                  <FaMapMarkerAlt
                    className="hover:animate-bounce"
                    size="32px"
                    color="red"
                  />
             
              </div>
              <div>
                <h1 className="text-xl font-bold">Address :</h1>
                <h1 className="text-xl  text-white">
                  Mumbai{" "}
                </h1>
              </div>
            </div>
          </div>

          {/* Right side  */}

          <div
            className="w-full flex justify-center mt-8 md:m-auto lg:-mt-5"
            data-aos="fade-up-left"
          >
            <form ref={form} onSubmit={sendEmail}
              //action="https://getform.io/f/bf621390-e321-4e34-ac7b-a892f5c47327"
              method="POST"
              encType="multipart/form-data"
              className=" flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="user_name"
                required
                placeholder="Enter your name"
                className="p-2 bg-transparent  border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="email"
                name="user_email"
                required
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="tel"
                name="user_phone"
                pattern="[0-9]{10}"
                placeholder="Enter your Mobile No"
                className="mb-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                required
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />

              <button
                type="submit"
                value="Send"
                className="text-white hover:opacity-60 bg-gradient-to-b from-cyan-400 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 hover:cursor-pointer "
              >
                Let's Connect
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
