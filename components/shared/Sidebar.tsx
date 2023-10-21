import ToggleTheme from '@/helpers/ToggleTheme';
import Link from 'next/link';
import { RiHome6Line } from "react-icons/ri";
import { IoFastFoodOutline, IoPersonSharp } from "react-icons/io5";
import { FaMotorcycle } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <nav className="fixed hidden lg:flex py-5 bg-Primary dark:bg-DarkPrimary text-DarkPrimary dark:text-white left-0 top-0 w-28 h-full flex-col justify-between">
      <article>
        <ul className='pl-4 relative'>
          <li>
            <h1 className="text-2xl uppercase font-bold text-center mb-5">Logo</h1>
          </li>

          <li className='p-4 bg-Secondary dark:bg-DarkSecondary rounded-tl-xl rounded-bl-xl'>
            <Link 
              href='#' 
              className='bg-Accent p-4 flex justify-center rounded-lg relative'>
              <RiHome6Line className='text-2xl mb-2' />
              <span className='text-sm tracking-wider absolute bottom-[5px]'>Inicio</span>
            </Link>
          </li>

          <li className='p-4 rounded-tl-xl rounded-bl-xl hover:bg-Secondary dark:hover:bg-DarkSecondary group transition-colors'>
            <Link 
              href='#' 
              className='group-hover:bg-Accent p-4 flex justify-center rounded-lg text-Accent group-hover:text-black dark:group-hover:text-white transition-colors relative'>
              <IoFastFoodOutline className='text-2xl mb-2' />
              <span className='text-sm tracking-wider absolute bottom-[5px]'>Pedido</span>
            </Link>
          </li>

          <li className='p-4 rounded-tl-xl rounded-bl-xl hover:bg-Secondary dark:hover:bg-DarkSecondary group transition-colors'>
            <Link 
              href='#' 
              className='group-hover:bg-Accent p-4 flex justify-center rounded-lg text-Accent group-hover:text-black dark:group-hover:text-white transition-colors relative'>
              <FaMotorcycle className='text-2xl mb-2' />
              <span className='text-sm tracking-wider absolute bottom-[5px]'>Entrega</span>
            </Link>
          </li>

          <li className='p-4 rounded-tl-xl rounded-bl-xl hover:bg-Secondary dark:hover:bg-DarkSecondary group transition-colors'>
            <Link 
              href='#' 
              className='group-hover:bg-Accent p-4 flex justify-center rounded-lg text-Accent group-hover:text-black dark:group-hover:text-white transition-colors relative'>
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