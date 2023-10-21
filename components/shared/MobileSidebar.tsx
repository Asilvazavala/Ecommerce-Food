import { RiHome6Line } from "react-icons/ri";
import { IoFastFoodOutline, IoPersonSharp } from "react-icons/io5";
import { FaMotorcycle } from "react-icons/fa";
import ToggleTheme from '@/helpers/ToggleTheme';
import Link from 'next/link';

const MobileSidebar: React.FC = () => {
  return (
    <nav className="lg:hidden bg-Secondary dark:bg-DarkSecondary block bottom-0 w-full min-h-screen">
      <ul className='fixed w-full flex justify-between items-center bottom-0 left-0 bg-Primary dark:bg-DarkPrimary text-3xl text-gray-500 dark:text-gray-400 pb-1 px-3'>
        <li>
          <Link href='#' className='text-DarkPrimary dark:text-Primary flex flex-col justify-center items-center pt-1 px-2'>
            <RiHome6Line />
            <span className="text-[1.05rem] -mt-2 tracking-wide">Inicio</span>
          </Link>
        </li>

        <li>
          <Link href='#' className='flex flex-col justify-center items-center pt-1 px-2'>
            <IoFastFoodOutline />
            <span className="text-[1.05rem] -mt-2 tracking-wide">Pedido</span>
          </Link>
        </li>

        <li>
          <Link href='#' className='flex flex-col justify-center items-center pt-1 px-2'>
            <FaMotorcycle />
            <span className="text-[1.05rem] -mt-2 tracking-wide">Entrega</span>
          </Link>
        </li>

        <li>
          <Link href='#' className='flex flex-col justify-center items-center pt-1 px-2'>
            <IoPersonSharp />
            <span className="text-[1.05rem] -mt-1 tracking-wide">Cuenta</span>
          </Link>
        </li>

        <li>
          <ToggleTheme />
        </li>
      </ul>
    </nav>
  )
};

export default MobileSidebar;