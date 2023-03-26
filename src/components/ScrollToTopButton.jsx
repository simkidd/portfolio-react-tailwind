import React, { useEffect, useState } from 'react';
import {RiArrowUpSLine} from 'react-icons/ri'

const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false)

    const toggleShow=()=>{
        if(window.pageYOffset > 1000){
            setShowButton(true)
        }else{
            setShowButton(false)
        }
    };

    useEffect(()=>{
        document.addEventListener('scroll', toggleShow)
        return()=>{
            document.removeEventListener('scroll', toggleShow)
        }
    },[])

    const scrollToTop=()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

  return (
    <>
        <button className={`fixed bottom-6 right-6 bg-pink-600 p-2 duration-200 text-white opacity-0 ${showButton ? 'opacity-100' : ''}`} onClick={scrollToTop}>
            <RiArrowUpSLine size={25} />
        </button>
    </>
  )
}

export default ScrollToTopButton