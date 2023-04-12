import React from "react";
import { Link } from "react-router-dom";
import {PortfolioData} from '../data/data';

const Work = () => {
  
  return (
    <div id="work" className="w-full py-8 text-gray-300 ">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          {/* eslint-disable-next-line */}
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* container*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {/* grid item */}
        {PortfolioData.reverse().map((porfolio, i)=>{
          return(
          <div
          key={i}
            style={{ backgroundImage: `url(${porfolio.image})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-wrapper box-border"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider ">
                {porfolio.name}
              </span>
              <div className="pt-8 text-center">
                <Link to={porfolio.live} target='_blank'>
                  <button className="text-center rounded-lg px-8 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </Link>
                <Link to={porfolio.github} target='_blank' >
                  <button className="text-center rounded-lg px-8 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </Link>
              </div>
            </div>
          </div>

          )
        })}
        
        </div>
      </div>
    </div>
  );
};

export default Work;
