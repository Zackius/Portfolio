import React from "react";
import { vinc } from "../assests";
import libraryImg from "../assests/library.jpg";
import recipeImg from "../assests/recipe.jpg";
import { Link } from "react-scroll";

const Work = () => {
  return (
    <div
      name="work"
      className=" w-full md:h-[600px] text-gray-300  bg-black"
    >
      <p className="text-3xl  font-bold   border-b-1 text-gray-300 border-blue-300 ">
          Projects
          </p>
      <div className="max-w-[800px] mx-auto flex  flex-col  justify-center  w-full  h-full">
        <div className="grid sm:grid-cols-2  md:grid-cols-3  gap-4">
          <div
            style={{ backgroundImage: `url(${vinc})` }}
            className="shadow-lg  shadow-[#040c16]  group  container  rounded-md  flex  justfiy-center  items-center  mx-auto  content-div "
          >
            <div className="opacity-0 p-2  group-hover:opacity-100">
              <a href="https://vincventures.co.ke/" className="text-sm  font-bold text-white  tracking-wider">
                An E-commerce website where clients can view items according to category, choose an item and see the full description of the product. A client can also add items to a cart then proceeds to checking out where you add your  contact information by filling a form  for delivery. Cart has the feature of calculating the total amount of items selected. 
              </a>
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
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${recipeImg})` }}
            className="shadow-lg  shadow-[#040c16]  group  container  rounded-md  flex  justfiy-center  items-center  mx-auto  content-div "
          >
            <div className="opacity-0  group-hover:opacity-100">
              <a href="https://tastebite-recipe-app.vercel.app/" className="text-2xl  font-bold text-white  tracking-wider">
                Recipe Application
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
