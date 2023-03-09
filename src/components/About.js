import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" h-[400px]  bg-gray-400 text-white" >
      <div className="flex flex-cols justify-center  items-center  w-full  h-full">
          <div className="sm:text-right pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-blue-300">
              About
            </p>
          </div>
          <div className="text-center p-24">
            <p className="text-lg">
              I am a performance-driven person with vast experience in creating
              web applications. I am a forward-thinking individual with an
              innovative mindset and a strong conceptual thinker that embraces
              challenges with an analytical and creative approach.
            </p>
          </div>
        </div>
      </div>

  );
};

export default About;
