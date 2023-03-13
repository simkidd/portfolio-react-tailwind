import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="sm:text-right text-4xl font-bold">
              Hi, I'm John, nice to meet you, Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for individuals and small-business. What would you do if you had a
              software expert available at your fingertips?
            </p>
          </div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div></div>
          {/* social icons */}
          <div className="lg:hidden flex mt-8 ">
            <ul className="flex gap-4">
              <li className="w-[160px] h-[60px] bg-[#565f69] group flex items-center justify-center group">
                <a
                  href="/"
                  className="flex items-center justify-between w-full text-gray-300"
                >
                  Resume
                  <BsFillPersonLinesFill
                    size={30}
                    className="group-hover:scale-110"
                  />
                </a>
              </li>
              <li className="w-[160px] h-[60px] bg-[#6fc2b0] group flex items-center group">
                <a
                  href="mailto:johnmsn22@gmail.com"
                  className="flex items-center justify-between w-full text-gray-300"
                >
                  Email
                  <HiOutlineMail size={30} className="group-hover:scale-110" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
