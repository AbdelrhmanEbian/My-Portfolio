import React from 'react';

const Header = () => {
  return( 
  <header className=' py-4'>
    <div className=' container mx-auto'>
      <div className="flex justify-between items-center">
        <a className=' text-accent font-bold text-2xl' href='home'>
          <h2>Abdelrhman Ebian</h2>
        </a>
        <a href="#contact">

        <button className=' btn btn-sm'>Work with me</button>
        </a>
      </div>
    </div>
  </header>);
};

export default Header;
