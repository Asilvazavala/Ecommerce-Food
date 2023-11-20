"use client";

import Image from 'next/image';
import { FaRegTrashAlt } from "react-icons/fa";

import IconButton from '@/components/IconButton';
import useCart from '@/hooks/use-cart';
import { APIArracheraBurger } from '@/types/types';
import { formatter } from '../lib/utils';

interface CartItemsProps {
  data: APIArracheraBurger;
};

const CartItem: React.FC<CartItemsProps> = ({
  data
}) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(String(data.id))
  }

  return (
    <li className='flex py-6 border-b border-gray-500'>
      <figure className='relative h-24 w-24 rounded-md overflow-hidden sm:h-32 sm:w-32'>
        <Image 
          fill
          src={data.imagen}
          alt={data.nombre}
          className='object-cover object-center'
        />
      </figure>

      <aside className='relative ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
        <div className='absolute z-10 right-0 top-0'>
          <FaRegTrashAlt 
            className='cursor-pointer text-gray-500 hover:text-Accent h-5 w-5'
            onClick={onRemove}
          />
        </div>
        
        <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
          <div className='flex justify-between'>
            <p className='text-xl font-semibold'>
              {data.nombre}
            </p>
          </div>

          <div className='mt-1 flex text-sm mb-2'>
            <p className='text-gray-500 md:mr-10'>{data.descripcion}</p>
          </div>

          <span className='text-Accent font-semibold text-lg mt-2'>
            {formatter.format(data.precio)}
          </span>
        </div>
      </aside>
    </li>
  )
};

export default CartItem;