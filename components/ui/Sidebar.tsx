import React from 'react'
import Image from 'next/image'
import Profile from "../../images/profile1.jpg"
import { IoHomeOutline } from "react-icons/io5";
import { GiSkills} from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { PiArticleNyTimesFill } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaMedium } from "react-icons/fa6";
import { IoMenuSharp } from "react-icons/io5";

import Link from 'next/link'

const Sidebar = () => {
    return (
    <div className='w-[350px] border-r min-h-screen p-4 bg-gray-300'>
        <div className="flex place-items-end">
        <IoMenuSharp className='text-lg' />
        </div>

        <div>
            <Image
      src={Profile}
      alt="Picture of the author"
      className='w-[300px] rounded-full'
        />       
        </div>
        <hr className="border-t-2 border-gray-300 my-2" />
        <div className='text-center p-4'>
        <p className='text-lg font-bold'>Zacharia Ndung'u</p>
        <p className='text-sm font-italic'>FullStack Software Engineer</p>
        <div className='flex gap-6 justify-center my-2'>
            
            <Link className='text-lg' href="/"><FaGithub/></Link>
            <Link className="text-lg" href="/"><BsTwitterX/></Link>
            <Link className="text-lg" href="/"><FaMedium/></Link>        
        </div>
        </div>
        <hr className="border-t-2 border-gray-300  my-2"/>
        <div className='flex flex-col gap-14 justify-center items-center p-4'>
        <div className="flex items-center  gap-2">
    <IoHomeOutline className='text-lg'/>
    <Link className="text-blue-500" href="/"> Home</Link>
</div>          
<div className="flex items-center  gap-2">
    <GiSkills className='text-lg'/>
    <Link className="text-blue-500" href="/"> Skills</Link>
</div>
<div className="flex items-center  gap-2">
    <GrProjects className='text-lg'/>
    <Link className="text-blue-500" href="/"> Projects</Link>
</div>
<div className="flex items-center  gap-2">
    <PiArticleNyTimesFill className='text-lg'/>
    <Link className="text-blue-500" href="/">Articles</Link>
</div>
        
        </div>

    </div>
  )
}

export default Sidebar  