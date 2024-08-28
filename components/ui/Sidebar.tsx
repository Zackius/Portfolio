'use client'
import React from 'react'
import Image from 'next/image'
import Profile from "../../images/profile1.jpg"
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaMedium } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { IoMenuSharp } from "react-icons/io5";
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,    
  } from "@/components/ui/command"
  import { useSidebarToggle } from '@/hooks/use-sidebar-toggle';
  import {useStore} from "@/hooks/use-store"
  import { SidebarToggle } from '../admin-panel/sidebar-toggle';

  

import Link from 'next/link'
import { House, BriefcaseBusiness, Construction , Newspaper } from 'lucide-react';
import { Separator } from "@/components/ui/separator"
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  
  if(!sidebar) return null;
    const menuList = [
        {
            group: "Menu",
        
        items: [
        {
            link: "/",
            text: "Home",
            icon: <House />
        },
        {
            link: "@/components/ui/skills",
            text: "Skills", 
            icon: <BriefcaseBusiness/>
        },
        {
            link: "@/components/ui/projects",
            text: "Projects", 
            icon: <Construction/>
        },
        {
            link: "@/components/ui/articles",
            text: "Articles", 
            icon: <Newspaper/>
        }]
    }
    ]
    return (
      <aside 
  className={cn("fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] bg-gray-300 ease-in-out duration-300 ", 
    sidebar?.isOpen === false ? "w-[90px]" : "w-[330px]"
  )}>
  <div className="flex flex-col h-full justify-between m-6">
    <div>
      <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
      {sidebar?.isOpen ? (
        <Image
          src={Profile}
          alt="Picture of the author"
          className='w-[350px] h-[350px] object-cover rounded-full'
        />
      ) : null}
    </div>
    <hr className="border-t-2 border-gray-300 my-2" />
    {sidebar?.isOpen ? (
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
    ) : (
      <div className='flex flex-col items-center justify-center h-full'> 
        <div className='flex flex-col space-y-4'>
          <div className='text-lg'><FaGithub /></div>
          <div className='text-lg'><BsTwitterX /></div>
          <div className='text-lg'><FaMedium /></div>
          <div className='text-lg'><CiLinkedin /></div>
        </div>
      </div>
    )}

    <Command>
      <CommandList className='flex flex-col justify-center items-center m-2'>
        {menuList.map((menu: any, key: number) => (
          <CommandGroup key={key}>
            {menu.items.map((item: any, itemKey: number) => (
              <CommandItem className="flex items-center gap-2 p-6" key={itemKey}>
                {item.icon}
                {sidebar?.isOpen && item.text }
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </Command>
  </div>
</aside>
  )
}
export default Sidebar  