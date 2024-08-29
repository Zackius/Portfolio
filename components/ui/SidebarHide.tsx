'use client'
import React from 'react'
import { FaGithub, FaMedium } from 'react-icons/fa'
import { CiLinkedin } from 'react-icons/ci'
import { BsTwitterX } from 'react-icons/bs'
import { Command, CommandGroup, CommandItem, CommandList } from 'cmdk'
import MenuList from "@/assests/data"


const MiniSidebar = () => {
  return (
      <div className='w-[90px]'>
      <div className="flex flex-col h-full justify-between">
      <div className='flex flex-col items-center justify-center h-full'> 
        <div className='flex flex-col space-y-8'>
          <div className='text-lg'><FaGithub /></div>
          <div className='text-lg'><BsTwitterX /></div>
          <div className='text-lg'><FaMedium /></div>
          <div className='text-lg'><CiLinkedin /></div>
        </div>
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
  )
}

export default MiniSidebar