import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typewriter from 'typewriter-effect';

const Hero = () => {

  return (
    <div
      name="home"
      className=" w-full  h-[800px] container-div"
    >
      {/* Container  */}
      <div className="flex  pl-[400px] justify-center  items-center  w-full  h-full">
        <div className="max-w-[1350px] w-full  grid  sm:grid-cols-2   gap-12 px-4">
          <div className="text-center">
            <div className="flex ">
            <h2 className="text-4xl  sm:text-4xl font-bold text-[#181e30]">
              Hi, I am
            </h2>
            <Typewriter  className="text-4xl"
                options={{
    strings:[ 'FullStack Developer'],
    autoStart: true,
    loop: true,
    skipAddStyles: true,
  }}
/>
            </div>
        
        <div>
          <button to='about'   className="text-black group  border-2 px-6  py-3  my-2 flex items-center hover:bg-blue-500 hover:border-blue-500">
            View My Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
          </div>
      </div>
      </div>

    </div>
  );
};

export default Hero;
