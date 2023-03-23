import React from 'react';
import {SiMinutemailer} from 'react-icons/si';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div id='contact' className='bg-[#0a192f] w-full md:h-screen flex flex-col justify-center items-center p-4 md:pt-8'>
        <form action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='py-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                {/* eslint-disable-next-line */}
                <p className='text-gray-300 py-4'>// Shoot me an email - myemail@gmail.com</p>
            </div>
            <input className='p-2 bg-[#ccd6f6] outline-none' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] outline-none' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 outline-none resize-none' name="message" placeholder='Message'  rows="10"></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect
            <span><SiMinutemailer className="ml-3"/></span>
            </button>
        </form>

        {/* social icons */}
      <div className="lg:hidden flex my-8 ">
        <ul className='flex gap-4'>
          <li className="w-[60px] h-[60px] bg-blue-600 group flex items-center justify-center">
            <a
              href="https://linkedin.com/in/mason10396" target='_blank' rel="noreferrer"
              className="flex items-center w-full text-gray-300 justify-center"
            >
              <FaLinkedin size={30} className='group-hover:scale-110' />
            </a>
          </li>
          <li className="w-[60px] h-[60px] bg-[#333] group flex items-center ">
            <a
              href="https://github.com/simkidd" target='_blank' rel="noreferrer"
              className="flex items-center w-full text-gray-300 justify-center "
            >
              <FaGithub size={30} className='group-hover:scale-110' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact