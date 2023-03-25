import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaBars, FaTimes} from "react-icons/fa"
import Typewriter from 'typewriter-effect';


const Hero = ({ nav, handleClick }) => {;
  return (
    <div
      name="home"
      className=" w-full  h-[700px] container-div"
    >
  
  <div
        onClick={handleClick}
        className=" z-10  text-[#0a192f]"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Container  */}
      <div className="flex  items-center  w-full  h-full">
        <div className="max-w-[1350px] grid px-6   sm:grid-cols-2 md:px-60  gap-12">
          <div className="text-center">
            <div className=" flex p-4   items-center">
            <h2 className="text-4xl  font-bold text-[#181e30]">
                Hi, its Zack
              </h2>
            </div>
            <div className=" flex">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2b3b6a]">
                <Typewriter
                options={{
    strings:[ 'Full-Stack Web Developer'],
    autoStart: true,
    loop: true,
    skipAddStyles: true,
  }}
/>
            </h2>
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
