import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"



const Skills: React.FC = () => {
    const skills = ["HTML", "CSS", "TAILWIND CSS", "JAVASCRIPT", "PYTHON", "FLASK", "DJANGO", "REACT JS", "NEXT JS", "POSTGRESQL", "SQL"];
  
    return (
      <div className='bg-gradient-to-r from-blue-300 via-gray-200 to-slate-200 p-5'>
      <p className='text-center text-xl underline mb-5'>Skills</p>
      <div className='flex flex-wrap justify-center p-4'>
          {skills.map((skill, index) => (
              <HoverCard key={index}>
                  <HoverCardTrigger className='text-lg shadow-2xl p-3 transition-transform transform hover:scale-105'>
                      {skill}
                  </HoverCardTrigger>
              </HoverCard>
          ))}
      </div>
      <Separator />
  </div>
      
    );
  };

export default Skills