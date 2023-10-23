"use client"

import React, { useState, useEffect } from 'react';
import { RiSunFill, RiMoonFill } from 'react-icons/ri'

const ToggleTheme: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <small 
      onClick={toggleDarkMode} 
      className='group-hover:bg-Accent md:p-3 flex flex-col justify-center items-center rounded-lg md:text-Accent group-hover:text-black dark:group-hover:text-white transition-colors relative'
    >
      {isDarkMode 
        ? <RiMoonFill className='text-2xl' />
        : <RiSunFill className='text-2xl' />
      }
      <button className='hidden md:flex'>
        {isDarkMode ? 'Modo Oscuro' : 'Modo Claro'}
      </button>
    </small>
  );
}

export default ToggleTheme;