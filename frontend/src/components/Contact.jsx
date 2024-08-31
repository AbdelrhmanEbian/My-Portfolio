import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const handleSend = async () => {
    const data = {
      email,
      name,
      message,
      subject,
    };
    try {
      const response = await fetch('http://localhost:4000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success('Email sent successfully!');
        // Optionally, clear the form fields
        setEmail('');
        setName('');
        setMessage('');
        setSubject('');
      } else {
        toast.error('Failed to send email.');
      }
    } catch (error) {
      toast.error('An error occurred while sending the email.');
    }
  };

  return (
    <section className='py-8 lg:pb-28 lg:section' id='contact'>
      <div className='container mx-auto md:mb-20'>
        <div className='items-center flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex justify-start flex-1'
          >
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br /> together!</h2>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl max-lg:w-3/4 flex flex-col gap-6 mb-10 md:pb-10 p-6 items-start'
          >
            <input 
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              name='Full Name'
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              placeholder='Full name'
              required
            />
            <input 
              type="email"
              name='Email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              placeholder='Email'
              required
            />
            <input 
              type="text"
              name='Subject'
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              placeholder='Subject'
              required
            />
            <textarea 
              name="Message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className='resize-none bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all h-36'
              placeholder='Message'
              required
            />
            <button className='btn btn-lg' onClick={handleSend}>
              Send Message
            </button>
          </motion.div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
