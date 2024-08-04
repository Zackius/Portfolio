import React from 'react'
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Image from 'next/image'
  import { Label } from "@/components/ui/label"
import { Button } from './button'


const Projects = () => {
   
        const projectList = [
            {
                group: "Projects",
            
            projects: [
            {
                live: "Live",
                github: "GitHub",
                name: "Ecommerce Website", 
                image: ""
            },
            {
                live: "Live",
                github: "GitHub", 
                name: "Sacco System", 
                image: ""
            },
            {
                live: "Live",
                github: "GitHub", 
                name: "Sport Website", 
                image: ""
            },
            {
                live: "Live",
                github: "GitHub", 
                name: "Chamaa System", 
                image: ""
            },
            {
                live: "Live",
                github: "GitHub", 
                name: "Recipe Book", 
                image: ""
            }
        ]
        }]
  return (
    <div className='bg-gray-900'>
      <p className='flex flex-row justify-center text-center text-xl underline p-3 text-white'>Projects</p>
      <div className='flex flex-wrap justify-center'>
        {projectList[0].projects.map((project, index) => (
          <Card key={index} className="w-[350px] shadow-xl m-4">
            <CardHeader>
              <CardTitle className='text-center'>{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={project.image}
                alt={project.name}
                className='w-[350px] h-[200px] object-cover rounded-full'
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>{project.live}</Button>
              <Button>{project.github}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>  
  )
}

export default Projects