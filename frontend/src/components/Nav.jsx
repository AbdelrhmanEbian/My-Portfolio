import React from 'react';
import { Link } from 'react-scroll';
import {BiClipboard, BiHomeAlt,BiUser}from 'react-icons/bi'
import {BsBriefcase,BsChatSquareText}from 'react-icons/bs'
const Nav = () => {
  return <div className=' text-center'>
    <nav className=' fixed bottom-2 lg:bottom-8 w-[350px] lg:w-[450px] left-1/2 -translate-x-1/2 overflow-hidden z-50'>
      <div className=' container mx-auto'>
        <div className='w-full mx-auto bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] px-5 flex justify-between items-center text-2xl text-white/50'>
          <Link offset={-200} activeClass='active' smooth={true} spy={true} to='home' className=' cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiHomeAlt/>
          </Link>
          <Link activeClass='active' smooth={true} spy={true} to='about' className=' cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BiUser/>
          </Link>
          <Link activeClass='active' smooth={true} spy={true} to='work' className=' cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BsBriefcase/>
          </Link>
          <Link activeClass='active' smooth={true} spy={true} to='contact' className=' cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BsChatSquareText/>
          </Link>
        </div>

      </div>

    </nav>
  </div>;
};

export default Nav;
