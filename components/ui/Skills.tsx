import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"


const Skills: React.FC = () => {
    const skills = ["HTML", "CSS", "TAILWIND CSS", "JAVASCRIPT", "PYTHON", "FLASK", "DJANGO", "REACT JS", "NEXT JS", "POSTGRESQL", "SQL"];
  
    return (
        <div>
            <p className='justify-center text-center text-xl underline p-3'>Skills</p>
             <div className='flex flex-row justify-center p-8'>
        {skills.map((skill, index) => (
          <Badge className='text-lg mx-3 shadow-2xl' key={index} variant="outline">{skill}</Badge>
        ))}
       
      </div>
      <Separator />

        </div>
     
      
    );
  };

export default Skills