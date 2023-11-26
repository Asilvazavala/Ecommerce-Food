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
      className='w-full text-lg md:w-[30rem]'
      onClick={toggleDarkMode} 
    >
      <button 
        className='flex justify-center items-center mt-2 w-full px-4 hover:outline
        hover:outline-Accent transition py-2 bg-Primary dark:bg-DarkPrimary 
          rounded-full'>
        { isDarkMode
          ? <LuMoon className='h-4 w-4' />
          : <LuSun className='h-4 w-4' />
        }
        <span className='ml-1 md:ml-2'>
          Cambiar Tema
        </span>
      </button>
    </div>
  );
}

export default ToggleTheme;