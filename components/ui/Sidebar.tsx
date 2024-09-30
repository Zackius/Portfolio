'use client'
import React from 'react'
import Image from 'next/image'
import Profile from "@/assests/images/profile1.jpg"
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaMedium } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import MenuList from '@/assests/data';

import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,    
  } from "@/components/ui/command"
import { Separator } from "@/components/ui/separator"

const Sidebar = () => {
 
    return (
  <div  className='m-6 justify-between'>
<div className="flex flex-col h-full justify-between">
    <div>
        <Image
          src={Profile}
          alt="Picture of the author"
          className='w-[350px] h-[350px] object-cover rounded-full'
        />
    </div>
    <hr className="border-t-2 border-gray-300 my-2" />
      <div className='text-center p-4'>
        <p className='text-lg font-bold'>Zacharia Ndung'u</p>
        <p className='text-sm font-italic'>FullStack Software Engineer</p>
        <Separator className="my-4" />
        <div className="flex h-5 items-center justify-center space-x-4 text-lg">
          <div><FaGithub/></div>
          <Separator orientation="vertical" />
          <div><BsTwitterX /></div>
          <Separator orientation="vertical" />
          <div><FaMedium/></div>
          <Separator orientation="vertical" />
          <div><CiLinkedin /></div>
        </div>
      </div>
    <Command>
      <CommandList className='flex flex-col justify-center items-center m-2'>
        {MenuList.map((menu: any, key: number) => (
          <CommandGroup key={key}>
            {menu.items.map((item: any, itemKey: number) => (
              <CommandItem className="flex items-center gap-2 p-6" key={itemKey}>
                {item.icon}
                {item.text }
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </Command>
  </div>
  </div>
    )
}
export default Sidebar  