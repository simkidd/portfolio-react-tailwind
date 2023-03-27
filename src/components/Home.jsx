import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ['Frontend Developer.'],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 80
  })

  return (
    <div id="home" className="bg-[#0a192f] h-screen w-full">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 ">Hi, my name is</p>

        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] ">
          John Mason
        </h1>

        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a {" "}
          <span>{text}</span>
          <Cursor cursorStyle='<' cursorColor="pink" />
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a frontend developer specialiizng in building (and occasionally
          designing) exceptional digital experience. I'm currently focused on
          building responsive frontend of web applications.
        </p>
        <div className="w-fit">
          <Link to="work" smooth={true} duration={500} offset={-60}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 ">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
