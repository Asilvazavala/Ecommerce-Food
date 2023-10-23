"use client"

import { useState } from 'react';
import ToggleTheme from '@/helpers/ToggleTheme';
import Link from 'next/link';
import { RiHome6Line } from "react-icons/ri";
import { IoFastFoodOutline, IoPersonSharp } from "react-icons/io5";
import { FaMotorcycle } from "react-icons/fa";

const Sidebar: React.FC = () => {  
  const [currentLink, setCurrentLink] = useState<string>('inicio');

  return (
    <nav className="fixed hidden md:flex py-5 bg-Primary dark:bg-DarkPrimary left-0 top-0 w-28 h-full flex-col justify-between">
      <article>
        <ul className='pl-4 relative'>
          <li>
            <h1 className="text-2xl uppercase font-bold text-center mb-5">Logo</h1>
          </li>
          
          <li className={`p-4 rounded-tl-xl rounded-bl-xl hover:bg-Secondary dark:hover:bg-DarkSecondary group transition-colors
          ${currentLink === 'inicio' ? 'bg-Secondary dark:bg-DarkSecondary' : ''}`}>
            <Link 
              onClick={() => setCurrentLink('inicio')}
              href='/' 
              className={`group-hover:bg-Accent p-4 flex justify-center rounded-lg relative group-hover:text-black dark:group-hover:text-white transition-colors
              ${currentLink === 'inicio' ? 'bg-Accent' : 'text-Accent'}`}>
              <RiHome6Line className='text-2xl mb-2' />
              <span className='text-sm tracking-wider absolute bottom-[5px]'>Inicio</span>
            </Link>
          </li>

          <li className={`p-4 rounded-tl-xl rounded-bl-xl hover:bg-Secondary dark:hover:bg-DarkSecondary group transition-colors
          ${currentLink === 'pedido' ? 'bg-Secondary dark:bg-DarkSecondary' : ''}`}>
            <Link 
              onClick={() => setCurrentLink('pedido')}
              href='/pedido' 
              className={`group-hover:bg-Accent p-4 flex justify-center rounded-lg text-Accent group-hover:text-black dark:group-hover:text-white transition-colors relative
              ${currentLink === 'pedido' ? 'bg-Accent text-DarkPrimary dark:text-Primary' : 'text-Accent'}`}>
              <IoFastFoodOutline className='text-2xl mb-2' />
              <span className='text-sm tracking-wider absolute bottom-[5px]'>Pedido</span>
            </Link>
          </li>

          <li className={`p-4 rounded-tl-xl rounded-bl-xl hover:bg-Secondary dark:hover:bg-DarkSecondary group transition-colors
          ${currentLink === 'entrega' ? 'bg-Secondary dark:bg-DarkSecondary' : ''}`}>
            <Link 
              onClick={() => setCurrentLink('entrega')}
              href='/entrega' 
              className={`group-hover:bg-Accent p-4 flex justify-center rounded-lg text-Accent group-hover:text-black dark:group-hover:text-white transition-colors relative
              ${currentLink === 'entrega' ? 'bg-Accent text-DarkPrimary dark:text-Primary' : 'text-Accent'}`}>
              <FaMotorcycle className='text-2xl mb-2' />
              <span className='text-sm tracking-wider absolute bottom-[5px]'>Entrega</span>
            </Link>
          </li>

          <li className={`p-4 rounded-tl-xl rounded-bl-xl hover:bg-Secondary dark:hover:bg-DarkSecondary group transition-colors
          ${currentLink === 'perfil' ? 'bg-Secondary dark:bg-DarkSecondary' : ''}`}>
            <Link 
              onClick={() => setCurrentLink('perfil')}
              href='/perfil' 
              className={`group-hover:bg-Accent p-4 flex justify-center rounded-lg text-Accent group-hover:text-black dark:group-hover:text-white transition-colors relative
              ${currentLink === 'perfil' ? 'bg-Accent text-DarkPrimary dark:text-Primary' : 'text-Accent'}`}>
              <IoPersonSharp className='text-2xl mb-2' />
              <span className='text-sm tracking-wider absolute bottom-[5px]'>Perfil</span>
            </Link>
          </li>
        </ul>
      </article>

      <article>
        <ul className='pl-4 relative'>
          <li className='p-4 rounded-tl-xl rounded-bl-xl hover:bg-Secondary dark:hover:bg-DarkSecondary group transition-colors'>
            <div 
              className='cursor-pointer'>
              <ToggleTheme />
            </div>
          </li>
        </ul>
      </article>
    </nav>
  )
};

export default Sidebar;