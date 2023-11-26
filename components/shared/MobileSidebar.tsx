"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { links } from '../../helpers/constants';

const MobileSidebar: React.FC = () => {
  const pathname = usePathname();  

  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.scrollY;

  //     if (currentScrollPos > prevScrollPos) {
  //       setIsVisible(false);
  //     } else {
  //       setIsVisible(true);
  //     }

  //     setPrevScrollPos(currentScrollPos);
  //   };

  //   if (typeof window !== 'undefined') {
  //     window.addEventListener('scroll', handleScroll);
  
  //     return () => {
  //       window.removeEventListener('scroll', handleScroll);
  //     };
  //   }
  // }, [prevScrollPos]);

  return (
    <nav className="md:hidden bg-Secondary dark:bg-DarkSecondary block bottom-0 w-full">
      <ul
        className={`z-50 fixed transition-transform w-full flex justify-between items-center bottom-0 left-0 bg-Primary dark:bg-DarkPrimary text-3xl text-gray-500 dark:text-gray-400 pb-2 px-3
        ${isVisible ? '' : 'translate-y-20'}`}
      >
        {
          links.map(link => (
            <li key={link.name}>
              <Link
                href={link.href} 
                className={`flex flex-col justify-center items-center pt-2 px-2
                ${pathname === link.href ? 'text-Accent border-t-[3px] border-Accent' : 'border-t-[3px] border-transparent'}`}>
                {<link.icon />}
                <span className="text-[1.05rem] -mt-2 tracking-wide">{link.name}</span>
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
};

export default MobileSidebar;