"use client"

import { useState, useEffect } from 'react';
import ToggleTheme from "@/helpers/ToggleTheme";
import Search from "../Search";

const MobileNavbar: React.FC = () => {

  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <section className="sm:hidden">
      <main className={`fixed transition-transform flex justify-between items-center gap-4 bg-Primary dark:bg-DarkPrimary px-4 py-2 w-full
      ${isVisible ? '' : '-translate-y-20'}`}>
        <p>Logo</p>
        <Search />
        <ToggleTheme />
      </main>
    </section>
  )
};

export default MobileNavbar;