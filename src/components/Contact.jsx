import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='bg-[#0a192f] w-full h-screen flex justify-center items-center p-4 md:pt-8'>
        <form action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='py-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                {/* eslint-disable-next-line */}
                <p className='text-gray-300 py-4'>// Shoot me an email - myemail@gmail.com</p>
            </div>
            <input className='p-2 bg-[#ccd6f6] outline-none' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] outline-none' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 outline-none resize-none' name="message" placeholder='Message'  rows="10"></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
        </form>
    </div>
  )
}

export default Contact