import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import Resume from '../assets/CV_JOHN-MASON.pdf'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-8 bg-[#0a192f] text-gray-300 z-10">
      <div className="flex items-center">
      <Link to='home' smooth={true} duration={500} className="text-3xl text-pink-600 cursor-pointer group">
        &lt; oni<span className="group-hover:text-gray-300">Dev.</span> /&gt;
      </Link>
      </div>

      {/* menu */}
      <ul className="hidden md:flex gap-8">
        <li className="hover:text-pink-600">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-pink-600">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-pink-600">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-pink-600">
          <Link to="work" smooth={true} duration={500} offset={-60}>
            Works
          </Link>
        </li>
        <li className="hover:text-pink-600">
          <Link to="contact" smooth={true} duration={500} offset={-20}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          nav
            ? "absolute top-0 left-0 h-screen  flex justify-center items-center flex-col w-full bg-[#0a192f] duration-300"
            : "hidden"
        }
      >
        <li className="text-4xl w-full text-center p-0">
          <Link onClick={handleClick} className='w-full block py-6 hover:bg-pink-600' to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="text-4xl w-full text-center p-0">
          <Link onClick={handleClick} className='w-full block py-6 hover:bg-pink-600' to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="text-4xl w-full text-center p-0">
          <Link onClick={handleClick} className='w-full block py-6 hover:bg-pink-600' to="skills" smooth={true} duration={500} offset={-70}>
            Skills
          </Link>
        </li>
        <li className="text-4xl w-full text-center p-0">
          <Link onClick={handleClick} className='w-full block py-6 hover:bg-pink-600' to="work" smooth={true} duration={500} offset={-40}>
            Works
          </Link>
        </li>
        <li className="text-4xl w-full text-center p-0">
          <Link onClick={handleClick} className='w-full block py-6 hover:bg-pink-600' to="contact" smooth={true} duration={500} offset={-40}>
            Contact
          </Link>
        </li>
      </ul>
      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 flex items-center">
            <Link
              to="https://linkedin.com/in/mason10396" target='_blank' rel="noreferrer"
              className="flex items-center justify-between w-full text-gray-300"
            >
              Linkedin
              <FaLinkedin size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333] flex items-center">
            <Link
              to="https://github.com/simkidd" target='_blank' rel="noreferrer"
              className="flex items-center justify-between w-full text-gray-300"
            >
              Github
              <FaGithub size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] flex items-center">
            <Link
              to="mailto:johnmsn22@gmail.com" 
              className="flex items-center justify-between w-full text-gray-300"
            >
              Email
              <HiOutlineMail size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] flex items-center">
            <a
              href={Resume}
              download
              className="flex items-center justify-between w-full text-gray-300"
            >
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
