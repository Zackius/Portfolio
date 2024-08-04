import React from 'react'
import { Separator } from "@/components/ui/separator"



const Hero = () => {
  return (
    <div className="flex flex-col gap-16 justify-center items-center h-[600px] bg-gray-900">
       <Separator/> 
       <p className='w-[800px] text-[30px] text-gray-900 font-lg text-white'>
        "I'm a creative and driven fullstack web developer dedicated to crafting seamless, responsive, and dynamic web applications. I love turning innovative ideas into reality,
        focusing on delivering high-quality, user-friendly digital experiences.
      </p>
      <Separator/> 
  </div>
  )
}

export default Hero