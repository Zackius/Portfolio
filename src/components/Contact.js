import React from 'react'
import { AiOutlineMail } from "react-icons/ai"
import {BiPhoneCall} from "react-icons/bi"

const Contact = () => (
  <div name='contact' className='w-full h-[500px] bg-gradient-to-r from-blue-300 via-white  to-gray-300  flex justify-center'>
   
    <form method='POST' action='https://getform.io/f/458b09aa-613b-43d9-a093-58ffc19a0b51' className='flex flex-col  max-w-[400px] w-full'>
      <div className=' pb-8'>
      <h2 className='text-2xl font-bold inline border-b-2 '> Contact</h2>
        <p className='text-black  py-4'>Want to say hello or just offer some feedback?
          Feel free to reach me  anytime.</p>
        <div className='flex flex-cols-2  '>
          <AiOutlineMail size={20} />
          <p className='px-4 font-bold'> ndunguzachary24@gmail.com</p>
        </div>
      
      </div>
      <input type="text" className='bg-[#ccd6f6] py-2 p-2' placeholder='Name' name='name' />
      <input className='my-4 py-2  p-2 bg-[#c7d1f1]' type='email' placeholder='Email' name='email' />
      <textarea className='py-2 p-2' name="message" cols="30" rows='10' placeholder='Message'></textarea>
      <button className=' text-black  border-2  hover:bg-blue-300 hover:border-blue-300 px-4 py-3 my-8 mx-auto flex items-center'>Let Collaborate</button>
    </form>
  </div>
)

export default Contact
