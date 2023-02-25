import React from "react";
import { vinc } from "../assests";
import libraryImg from "../assests/library.jpg";
import recipeImg from "../assests/recipe.jpg";

const Work = () => {
  return (
    <div
      name="work"
      className=" w-full md:h-[600px] text-gray-300  bg-[#10284c]"
    >
      <div className="max-w-[800px] mx-auto p-4 flex  flex-col  justify-center  w-full  h-full">
        <div className="pb-8">
          <p className="text-4xl  fonr-bold inline border-b-4 text-gray-300 border-blue-300">
          Projects
          </p>
        </div>
        <div className="grid sm:grid-cols-2  md:grid-cols-3  gap-4">
          <div
            style={{ backgroundImage: `url(${vinc})` }}
            className="shadow-lg  shadow-[#040c16]  group  container  rounded-md  flex  justfiy-center  items-center  mx-auto  content-div "
          >
            <div className="opacity-0  group-hover:opacity-100">
              <span className="text-2xl  font-bold text-white  tracking-wider">
                Vinc Ventures ecommerce websites
              </span>
              <div className="pt-8  text-center">
                <a href="https://vincventures.co.ke/">
                  <button className="text-center rounded-lg  px-4 py-3  m-2  bg-white text-gray-600 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg  px-4 py-3  m-2 bg-white text-gray-600  font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${libraryImg})` }}
            className="shadow-lg  shadow-[#040c16]  group  container  rounded-md  flex  justfiy-center  items-center  mx-auto  content-div "
          >
            <div className="opacity-0  group-hover:opacity-100">
              <span className="text-2xl  font-bold text-white  tracking-wider">
                Library Application
              </span>
              <div className="pt-8  text-center">
                <a href="/">
                  <button className="text-center rounded-lg  px-4 py-3  m-2  bg-white text-gray-600 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg  px-4 py-3  m-2 bg-white text-gray-600  font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${recipeImg})` }}
            className="shadow-lg  shadow-[#040c16]  group  container  rounded-md  flex  justfiy-center  items-center  mx-auto  content-div "
          >
            <div className="opacity-0  group-hover:opacity-100">
              <span className="text-2xl  font-bold text-white  tracking-wider">
                Recipe Application
              </span>
              <div className="pt-8  text-center">
                <a href="https://tastebite-recipe-app.vercel.app/">
                  <button className="text-center rounded-lg  px-4 py-3  m-2  bg-white text-gray-600 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Zackius/Tastebite-Recipe-App">
                  <button className="text-center rounded-lg  px-4 py-3  m-2 bg-white text-gray-600  font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
