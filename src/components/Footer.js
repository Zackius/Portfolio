import React from "react";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-[#0a192f] w-full h-[50px] ">
          <div className=" flex   py-4  justify-center  text-white font-bold">
          <BiCopyright size={20} />
        <h6 className="px-4 font-dancing">
          Zacharia Kamau Ndung'u
        </h6>
      </div>
    </div>
  );
};

export default Footer;
