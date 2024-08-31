import React from 'react';
 import Image from  "../assets/IMG_٢٠٢٢١٢٢٤_١٧٢٩٠٤.jpg";
 import { FaGithub,FaLinkedin } from "react-icons/fa";
 import {TypeAnimation} from 'react-type-animation'
 import {motion} from 'framer-motion'
 import {fadeIn} from '../variants'
const Banner = () => {
  return (
  <div className='min-h-[70vh] lg:min-h-[78vh] flex max-md:py-5 items-center' id='home'>
    <div className="container  mx-auto">
      <div className=' flex flex-col lg:flex-row gap-y-4 lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
    <motion.h1 variants={fadeIn('up',0.3)} initial='hidden'  whileInView='show' viewport={{once:false,amount:0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[70px]'>
    Abdelrhman <span>Ebian</span>
    </motion.h1>
    <motion.div variants={fadeIn('up',0.4)} initial='hidden'  whileInView='show' viewport={{once:false,amount:0.7}}  className=' mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]'>
      <span className=" text-white mr-4">I am a</span>
      <TypeAnimation sequence={[
        'Front end developer',
        2000,
        'Back end developer',
        2000,
      ]}
      speed={50}
      className=' text-accent'
      wrapper='span'
      repeat={Infinity}
      />
    </motion.div>
    <motion.p variants={fadeIn('up',0.5)} initial='hidden'  whileInView='show' viewport={{once:false,amount:0.7}}  className='mb-4 max-w-lg mx-auto lg:mx-0'>welcome to my portfolio , I am Abdelrhman Ebian , I am in third secondary and I have been developing for one year</motion.p>
    <motion.div variants={fadeIn('right',0.6)} initial='hidden'  whileInView='show' viewport={{once:false,amount:0.7}}  className=' max-w-max mb-5 mx-auto text-center lg:text-start lg:mx-0'>
    <a href="https://app.enhancv.com/share/1e5186b4/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic">
      <button className='btn  btn-lg'>Get my cv
      </button>
    </a>
    </motion.div>
    <motion.div variants={fadeIn('right',0.7)} initial='hidden'  whileInView='show' viewport={{once:false,amount:0.7}}  className='flex items-center justify-start text-[40px] gap-x-4 max-w-max mx-auto lg:mx-0'>
      <a href="https://github.com/AbdelrhmanEbian"><FaGithub/></a>
      <a href="https://www.linkedin.com/in/abdelrhmanebian/"><FaLinkedin/></a>
    </motion.div>
        </div>
        <motion.div variants={fadeIn('down',0.7)} initial='hidden'  whileInView='show' className=' hidden lg:flex flex-1 max-w-[320px] lg:max-w-[420px]'>
          <img className=' rounded-full' src={Image} alt="" />
        </motion.div>
      </div>
    </div>
  
  </div>
  )
};

export default Banner;
