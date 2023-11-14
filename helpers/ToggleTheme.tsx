"use client"

import React, { useState, useEffect } from 'react';

const ToggleTheme = () => {
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
    <div 
      onClick={toggleDarkMode} 
    >
      <button className="px-4 py-2 rounded-full bg-Primary dark:bg-DarkPrimary
       text-Accent cursor-pointer mt-4 hover:outline hover:outline-Accent shadow">
        Cambiar Tema
      </button>
    </div>
  );
}

export default ToggleTheme;