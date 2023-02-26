import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <div
    className="bg-gradient-to-b to-black-800 from-sky-700 w-full pt-2 md:pt-28 "
  > 
  <div className="max-w-screen-lg mb-10px mx-auto p-4 flex flex-col justify-center w-full h-full text-blue-400" >
  <div className="flex justify-center" data-aos="fade-right " >
          <p className="text-4xl font-bold border-b-4 border-white p-2 inline" data-aos="fade-right">
          GitHub
   </p>
   </div>
   <div className="flex justify-center mt-10 flex-col shadow-md shadow-gray-100 p-5">
    <div className="flex justify-center">
        <p className="text-3xl font-semi-bold border-b-2 border-blue-500 p-2 inline text-white" data-aos="fade-right">
            GitHub Calendar
          </p>
          </div>  
  <div className="flex justify-center mt-10" data-aos="fade-right">
        <GitHubCalendar
              style={{
                border: "1px solid grey",
                padding: "15px",
                color: "#99F6E4",
              }}
             
              username="kalpitagavas"/>
  </div>
  </div> 
  <div className="flex justify-center mt-5 flex-col shadow-md shadow-green-500 p-5">
  <div className="flex justify-center mt-0">
        <p className="text-3xl font-semi-bold border-b-2 border-blue-500 p-2 inline text-white" data-aos="fade-right" >
            My GitHub Statistics
          </p>
        </div>
        
  <div className="flex justify-center mt-10">
      <img 
        src="https://github-readme-stats.vercel.app/api?username=kalpitagavas&show_icons=true&locale=en"  alt="kalpita-states" data-aos="fade-right" />
  </div>
  </div>
  <div className="flex justify-center mt-5 flex-col shadow-md shadow-blue-500 p-5">
  <div className="flex justify-center mt-0">
        <p className="text-3xl font-semi-bold border-b-2 border-blue-500 p-2 inline text-white" data-aos="fade-right">
            GitHub Streak
          </p>
    </div>
  <div className="flex justify-center mt-10">
  <img 
  src="https://github-readme-streak-stats.herokuapp.com/?user=kalpitagavas&" alt='kalpita_streak' data-aos="fade-right"/>
  </div>
  </div>
  </div>
    </div>
  );
};

export default Github;
