"use client"

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import ToggleTheme from '@/helpers/ToggleTheme';
import Logo from '../../public/images/Logo.png'
import { links } from '../../helpers/constants';

const Sidebar: React.FC = () => {  
  const pathname = usePathname();

  return (
    <nav className="fixed hidden md:flex py-5 bg-Primary dark:bg-DarkPrimary left-0 top-0 w-28 h-full flex-col justify-between">
      <article>
        <ul className='pl-4 relative'>
          <li className='flex items-center justify-center'>
            <Link href={"/"}>
              <Image
                src={Logo}
                width={80}
                height={80}
                alt='Logo'  
                className='object-cover shadow-xl rounded-full mb-5'
              />
            </Link>
          </li>
          
          {
            links.map(link => (
              <li
                key={link.name}
                className={`p-4 rounded-tl-xl rounded-bl-xl hover:bg-Secondary dark:hover:bg-DarkSecondary group transition-colors
                ${pathname === link.href ? 'bg-Secondary dark:bg-DarkSecondary' : ''}`}
              >
                <Link 
                  href={link.href} 
                  className={`group-hover:bg-Accent p-4 flex justify-center rounded-lg relative group-hover:text-black dark:group-hover:text-white transition-colors
                  ${pathname === link.href ? 'bg-Accent' : 'text-Accent'}`}>
                  {<link.icon className='text-2xl mb-2' />}
                  <span className='text-sm tracking-wider absolute bottom-[5px]'>{link.name}</span>
                </Link>
              </li>
            ))
          }
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