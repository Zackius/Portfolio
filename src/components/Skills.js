import React from 'react'

import { css, reacts, git, tailwind, ruby, express, node, html , javascript} from '../assests'



const Skills = () => {
  return (
      <div name="skills" className='  bg-gradient-to-r from-blue-300 via-white  to-gray-300 '>
          <div className='flex justify-center'>
          <h2 className='text-2xl font-bold inline border-b-2'>Skills</h2>  
          </div>        
          <div className='max-w-[1000px]  mx-auto  p-4  flex  flex-col  justify-center  w-full  h-full'>
              <div className='w-full  grid  grid-cols-2  sm:grid-cols-4  gap-4  text-center  py-8'>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110  bg-[#0a192f] duration-500'>
                      <img className='w-20 mx-auto' src={html} alt='HTML icon' />
                      <p className='my-4 text-white'>HTML</p>
                  </div>
   

                  <div className='shadow-md shadow-[#040c16] hover:scale-110  bg-[#0a192f] duration-500'>
                      <img className='w-20 mx-auto' src={css} alt='CSS icon' />
                      <p className='my-4 text-white'>CSS</p>
                  </div>
           
      
                  <div className='shadow-md shadow-[#040c16] hover:scale-110  bg-[#0a192f] duration-500'>
                      <img className='w-20 mx-auto' src={tailwind} alt='TAILWIND icon' />
                      <p className='my-4 text-white'>TAILWIND CSS</p>
                  </div>
 

                  <div className='shadow-md shadow-[#040c16] hover:scale-110  bg-[#0a192f] duration-500'>
                      <img className='w-20 mx-auto' src={javascript} alt='JAVASCRIPT icon' />
                      <p className='my-4 text-white'>JAVASCRIPT</p>
                  </div>
             
                  <div className='shadow-md shadow-[#040c16] hover:scale-110  bg-[#0a192f] duration-500'>
                      <img className='w-20 mx-auto' src={reacts} alt='REACT icon' />
                      <p className='my-4 text-white'>REACT JS</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110  bg-[#0a192f] duration-500'>
                      <img className='w-20 mx-auto' src={git} alt='GITHUB icon' />
                      <p className='my-4 text-white'>GIT</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110  bg-[#0a192f] duration-500'>
                      <img className='w-20 mx-auto' src={ruby} alt='GITHUB icon' />
                      <p className='my-4 text-white'>RUBY ON RAILS</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110  bg-[#0a192f] duration-500'>
                      <img className='w-20 mx-auto' src={node} alt='GITHUB icon' />
                      <p className='my-4 text-white'>Node Js</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110  bg-[#0a192f] duration-500'>
                      <img className='w-20 mx-auto' src={express} alt='GITHUB icon' />
                      <p className='my-4 text-white'>Express Js</p>
                  </div>
              </div>
                  
          
          </div>
    </div>
  )
}

export default Skills