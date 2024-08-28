'use client'
import React from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import Sidebar from './Sidebar';
import { useSidebarToggle } from '@/hooks/use-sidebar-toggle';
import { SidebarToggle } from '../admin-panel/sidebar-toggle';
import { cn } from '@/lib/utils';
import { useStore } from '@/hooks/use-store';

const Hero = () => {
  return (
    <div className="relative border h-auto min-h-[600px]">
      <div className="absolute inset-0 flex flex-col gap-8 p-8 md:p-16 lg:p-24">
        <div className='flex flex-col'>
          <p className='font-lg font-serif text-[30px] md:text-[20px]'>My name is:</p>
          <p className='font-xl font-serif text-[36px] sm:text-[20px] md:text-[38px] text-navy underline'>Zacharia Kamau Ndung'u</p>
        </div>
        
        <p className='font-xl font-serif text-[18px] md:text-[20px] pl-4 md:pl-6'>A FullStack Software Engineer:</p>
        
        <p className="w-full text-[40px] sm:text-[20px] md:text-[22px] text-gray-900 font-serif pl-4 md:pl-22 text-center mx-auto">
          I'm a creative and driven fullstack web developer dedicated to crafting seamless, responsive, and dynamic web applications. I love turning innovative ideas into reality, focusing on delivering high-quality, user-friendly digital experiences.
        </p>
      </div>
    </div>
  );
}

export default Hero;