import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaBars, FaTimes} from "react-icons/fa"
import Typewriter from 'typewriter-effect';
import { Link } from "react-scroll";

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
        <div className="md:px-60">
            <div className=" p-4   items-center">
            <h2 className="text-4xl font-header   font-semibold">
                Hi, am  Zack
              </h2>
            </div>
            <div>
            <div className="  flex  gap-2 text-2xl l font-light text-[#0a192f]">
               I' am a
                <Typewriter
                options={{
    strings:[ 'Front-end Developer', 'Content Writer'],
    autoStart: true,
    loop: true,
    skipAddStyles: true,
  }}
/>
         
                

            </div>
            
        
            <div>
              
              <button to='about' className="text-black group  border-2 px-6  py-3  my-2 flex items-center hover:bg-blue-500 hover:border-blue-500">
                <Link to="work" smooth={true} duration={1000}>
                View My Work
                </Link>
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
