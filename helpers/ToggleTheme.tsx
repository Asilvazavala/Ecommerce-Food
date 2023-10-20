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
      className='px-4 py-2 rounded-xl flex flex-col justify-center items-center cursor-pointer hover:bg-Secondary dark:hover:bg-DarkSecondary transition-colors'
    >
      {isDarkMode 
        ? <RiMoonFill className='text-2xl' />
        : <RiSunFill className='text-2xl' />
      }
      <button>
        {isDarkMode ? 'Modo Oscuro' : 'Modo Claro'}
      </button>
    </small>
  );
}

export default ToggleTheme;