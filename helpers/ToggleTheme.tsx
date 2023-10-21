"use client"

import React, { useState, useEffect } from 'react';
import { RiSunFill, RiMoonFill } from 'react-icons/ri'

const ToggleTheme: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
      className='group-hover:bg-Accent p-2 flex flex-col justify-center items-center rounded-lg text-Accent group-hover:text-black dark:group-hover:text-white transition-colors relative'
    >
      {isDarkMode 
        ? <RiMoonFill className='text-2xl' />
        : <RiSunFill className='text-2xl' />
      }
      <button>
        {isDarkMode ? 'Oscuro' : 'Claro'}
      </button>
    </small>
  );
}

export default ToggleTheme;