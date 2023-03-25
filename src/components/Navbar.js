import React from "react";
import {
  FaBars,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-scroll";
import me from "../assests/me.JPG";

export const Navbar = ({ nav}) => {
  return (
    <div>
      <div>
        <div className=" w-[350px] h-[1100px] hidden   align-center p-8 bg-[#0a192f] text-gray-300 ">
          <div className="pt-">
            <img className="rounded-full" src={me} alt="myphoto" />
          </div>

          <div className=" text-center pt-4">
            <h2 className="text-xl md:text-2xl font-bold underline shadow-sm text-white ">
              Zacharia Kamau Ndung'u
            </h2>
          </div>
          <div className=" flex p-6 ">
            <a
              className=" hover:scale-125 hover:text-white items-center  w-full text-blue-700"
              href="https://www.linkedin.com/in/zachary-ndung-u-85023a201/"
            >
              {" "}
              <FaLinkedin size={30} />
            </a>
            <a
              className="hover:scale-125 hover:text-white  items-center  w-full text-blue-700"
              href="https://medium.com/@ndunguzachary"
            >
              {" "}
              <FaMedium size={30} />
            </a>
            <a
              className=" hover:scale-125 hover:text-white  items-center  w-full text-blue-700"
              href="https://github.com/Zackius"
            >
              {" "}
              <FaGithub size={30} />
            </a>
            <a
              className=" hover:scale-125 hover:text-white  items-center  w-full text-blue-700"
              href="https://mobile.twitter.com/Zack_K_N"
            >
              <FaTwitter size={30} />
            </a>
          </div>
          <div>
            <ul className="md:flex-cols text-center">
              <li className="hover:scale-125 hover:text-blue-700  p-3 font-bold text-xl">
                <Link to="home" smooth={true} duration={300}>
                  Home{" "}
                  <ul className="hidden md:flex-rows">
                    <li className="hover:scale-125 hover:text-blue-700 ">
                      <Link to="home" smooth={true} duration={300}>
                        Home
                      </Link>
                    </li>
                    <li className="hover:scale-125 hover:text-blue-700  p-3 font-bold text-xl">
                      <Link to="about" smooth={true} duration={300}>
                        About
                      </Link>
                    </li>
                    <li className="hover:scale-125 hover:text-blue-700  p-3 font-bold text-xl">
                      <Link to="skills" smooth={true} duration={300}>
                        Skills
                      </Link>
                    </li>
                    <li className="hover:scale-125 hover:text-blue-700  p-3 font-bold text-xl">
                      <Link to="work" smooth={true} duration={300}>
                        Work
                      </Link>
                    </li>
                    <li className="hover:scale-125 hover:text-blue-700  p-3 font-bold text-xl">
                      <Link to="/" smooth={true} duration={300}>
                        Blog
                      </Link>
                    </li>
                    <li className="hover:scale-125 hover:text-blue-700  p-3 font-bold text-xl">
                      <Link to="contact" smooth={true} duration={300}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </Link>
              </li>
              <li className="hover:scale-125 hover:text-blue-700  p-3 font-bold text-xl">
                <Link to="about" smooth={true} duration={300}>
                  About
                </Link>
              </li>
              <li className="hover:scale-125 hover:text-blue-700  p-3 font-bold text-xl">
                <Link to="skills" smooth={true} duration={300}>
                  Skills
                </Link>
              </li>
              <li className="hover:scale-125 hover:text-blue-700  p-3 font-bold text-xl">
                <Link to="work" smooth={true} duration={300}>
                  Work
                </Link>
              </li>

              <li className="hover:scale-125 hover:text-blue-700  p-3 font-bold text-xl">
                <Link to="contact" smooth={true} duration={300}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

  

      {/* Mobile menu */}
      <div
        className={
          !nav
            ? "hidden"
            : " top-0 left-0 w-[350px] h-[1300px]  align-center p-8  bg-[#0a192f] text-gray-300"
        }
      >
            {/* <div
        onClick={handleClick}
        className="md:hidden  text-white z-10  bg-[#0a192f]"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div> */}
        <div className="pt-6">
          <img className="rounded-full" src={me} alt="myphoto" />
        </div>

        <div className=" text-center pt-8">
          <h2 className="text-xl md:text-2xl font-bold underline shadow-sm text-white ">
            Zacharia Kamau Ndung'u
          </h2>
        </div>
        <div className=" flex p-6 ">
          <a
            className=" hover:scale-125 hover:text-white items-center  w-full text-blue-700"
            href="https://www.linkedin.com/in/zachary-ndung-u-85023a201/"
          >
            {" "}
            <FaLinkedin size={30} />
          </a>
          <a
            className="hover:scale-125 hover:text-white  items-center  w-full text-blue-700"
            href="https://medium.com/@ndunguzachary"
          >
            {" "}
            <FaMedium size={30} />
          </a>
          <a
            className=" hover:scale-125 hover:text-white  items-center  w-full text-blue-700"
            href="https://github.com/Zackius"
          >
            {" "}
            <FaGithub size={30} />
          </a>
          <a
            className=" hover:scale-125 hover:text-white  items-center  w-full text-blue-700"
            href="https://mobile.twitter.com/Zack_K_N"
          >
            <FaTwitter size={30} />
          </a>
        </div>
        <div>
          <ul className="text-center">
            <li className="hover:scale-125 hover:text-blue-700  p-3 font-bold text-xl">
              <Link to="home" smooth={true} duration={300}>
                Home{" "}
                <ul className="hidden md:flex-rows">
                  <li className="hover:scale-125 hover:text-blue-700 ">
                    <Link to="home" smooth={true} duration={300}>
                      Home
                    </Link>
                  </li>
                  <li className="hover:scale-125 hover:text-blue-700  p-3 font-bold text-xl">
                    <Link to="about" smooth={true} duration={300}>
                      About
                    </Link>
                  </li>
                  <li className="hover:scale-125 hover:text-blue-700  p-3 font-bold text-xl">
                    <Link to="skills" smooth={true} duration={300}>
                      Skills
                    </Link>
                  </li>
                  <li className="hover:scale-125 hover:text-blue-700  p-3 font-bold text-xl">
                    <Link to="work" smooth={true} duration={300}>
                      Work
                    </Link>
                  </li>
                  <li className="hover:scale-125 hover:text-blue-700  p-3 font-bold text-xl">
                    <Link to="/" smooth={true} duration={300}>
                      Blog
                    </Link>
                  </li>
                  <li className="hover:scale-125 hover:text-blue-700  p-3 font-bold text-xl">
                    <Link to="contact" smooth={true} duration={300}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </Link>
            </li>
            <li className="hover:scale-125 hover:text-blue-700  p-3 font-bold text-xl">
              <Link to="about" smooth={true} duration={300}>
                About
              </Link>
            </li>
            <li className="hover:scale-125 hover:text-blue-700  p-3 font-bold text-xl">
              <Link to="skills" smooth={true} duration={300}>
                Skills
              </Link>
            </li>
            <li className="hover:scale-125 hover:text-blue-700  p-3 font-bold text-xl">
              <Link to="work" smooth={true} duration={300}>
                Work
              </Link>
            </li>

            <li className="hover:scale-125 hover:text-blue-700  p-3 font-bold text-xl">
              <Link to="contact" smooth={true} duration={300}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
