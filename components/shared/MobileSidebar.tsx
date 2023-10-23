"use client"

import { useState, useEffect } from 'react';
import { RiHome6Line } from "react-icons/ri";
import { IoFastFoodOutline, IoPersonSharp } from "react-icons/io5";
import { FaMotorcycle } from "react-icons/fa";
import Link from 'next/link';

const MobileSidebar: React.FC = () => {
  const [currentLink, setCurrentLink] = useState<string>('inicio');
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
    <nav className="md:hidden bg-Secondary dark:bg-DarkSecondary block bottom-0 w-full min-h-screen">
      <ul
        className={`fixed transition-transform w-full flex justify-between items-center bottom-0 left-0 bg-Primary dark:bg-DarkPrimary text-3xl text-gray-500 dark:text-gray-400 pb-2 px-3
        ${isVisible ? '' : 'translate-y-20'}`}>
        <li>
          <Link 
            onClick={() => setCurrentLink('inicio')}
            href='/' 
            className={`flex flex-col justify-center items-center pt-2 px-2
            ${currentLink === 'inicio' ? 'text-Accent border-t-[3px] border-Accent' : 'border-t-[3px] border-transparent'}`}>
            <RiHome6Line />
            <span className="text-[1.05rem] -mt-2 tracking-wide">Inicio</span>
          </Link>
        </li>

        <li>
          <Link 
            onClick={() => setCurrentLink('pedido')}
            href='/pedido' 
            className={`flex flex-col justify-center items-center pt-2 px-2
            ${currentLink === 'pedido' ? 'text-Accent border-t-[3px] border-Accent' : 'border-t-[3px] border-transparent'}`}>
            <IoFastFoodOutline />
            <span className="text-[1.05rem] -mt-2 tracking-wide">Pedido</span>
          </Link>
        </li>

        <li>
          <Link  
            onClick={() => setCurrentLink('entrega')}
            href='/entrega' 
            className={`flex flex-col justify-center items-center pt-2 px-2
            ${currentLink === 'entrega' ? 'text-Accent border-t-[3px] border-Accent' : 'border-t-[3px] border-transparent'}`}>
            <FaMotorcycle />
            <span className="text-[1.05rem] -mt-2 tracking-wide">Entrega</span>
          </Link>
        </li>

        <li>
          <Link 
            onClick={() => setCurrentLink('perfil')}
            href='/perfil' 
            className={`flex flex-col justify-center items-center pt-2 px-2
            ${currentLink === 'perfil' ? 'text-Accent border-t-[3px] border-Accent' : 'border-t-[3px] border-transparent'}`}>
            <IoPersonSharp />
            <span className="text-[1.05rem] -mt-1 tracking-wide">Perfil</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
};

export default MobileSidebar;