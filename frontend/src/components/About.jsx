import React from 'react';
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';
import Image from  "../assets/IMG_٢٠٢٢١٢٢٤_١٧٢٩٠٤.jpg";

const About = () => {
  return( <section className='section' id='about'>

  <div className="container mx-auto">
    <div className='flex flex-col gap-y-10 lg:flex-row gap-x-6 items-center'>
      <motion.div variants={fadeIn('right',0.3)}
      initial='hidden' whileInView={'show'} viewport={{once:false , amount:0.3}}  className=' flex-1'>
        <h2 className='h2  text-accent'>About me</h2>
        <h3 className=' h3 mb-4'>I am 18 years old and I have become a Mern stack </h3>
        <p>Welcome to my portfolio! I'm Abdelrahman ebian, a Mern stack developer. With a passion for creativity and innovation, I strive for excellence in everything I do. Let's connect and create something remarkable together! </p>

      </motion.div>
      <motion.div className=' max-w-[320px] lg:max-w-[420px] ' variants={fadeIn('left',0.3)}
      initial='hidden' whileInView={'show'} viewport={{once:false , amount:0.3}}>
        <img className=' rounded-full' src={Image} alt="" />
      </motion.div>
    </div>
  </div>
  </section>)
};

export default About;
