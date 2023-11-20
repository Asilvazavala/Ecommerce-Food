"use client"

import React, { useEffect } from 'react';
import { useFoods } from '../hooks/FoodContext';
import { LuMoon, LuSun } from "react-icons/lu";

const ToggleTheme = () => {
  const { isDarkMode, setIsDarkMode } = useFoods();

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
    <div 
      onClick={toggleDarkMode} 
    >
      <button 
        className='flex items-center bg-Primary dark:bg-DarkPrimary 
        rounded-full px-4 py-2 hover:outline hover:outline-Accent mt-4'>
        { isDarkMode
          ? <LuMoon className='h-4 w-4' />
          : <LuSun className='h-4 w-4' />
        }
        <span className='ml-1 md:ml-2 text-sm'>
          Cambiar Tema
        </span>
      </button>
    </div>
  );
}

export default ToggleTheme;