'use client'
import React from 'react'
import { FaGithub, FaMedium } from 'react-icons/fa'
import { CiLinkedin } from 'react-icons/ci'
import { BsTwitterX } from 'react-icons/bs'
import { Command, CommandGroup, CommandItem, CommandList } from 'cmdk'
import MenuList from "@/assests/data"


const MiniSidebar = () => {
  return (
    <div className='w-[90px] h-full flex flex-col justify-center'>
      <div className='flex flex-col items-center m-2'>
        <div className='flex flex-col space-y-8'>
          <div className='text-lg'><FaGithub /></div>
          <div className='text-lg'><BsTwitterX /></div>
          <div className='text-lg'><FaMedium /></div>
          <div className='text-lg'><CiLinkedin /></div>
        </div>
      </div>
      <div className='border-t border-gray-400 my-4' />
      <Command>
        <CommandList className='flex flex-col justify-center items-center'>
          {MenuList.map((menu: any, key: number) => (
            <CommandGroup key={key}>
              {menu.items.map((item: any, itemKey: number) => (
                <CommandItem className="flex items-center gap-2 p-6" key={itemKey}>
                  {item.icon}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
    </div>
  )
}
export default MiniSidebar