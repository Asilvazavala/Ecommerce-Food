"use client";

import Image from 'next/image';
import { FaRegTrashAlt } from "react-icons/fa";

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

  const handleAddQuantity = (producto: APIArracheraBurger) => {
    cart.addQuantity(producto);
  }
  
  const handleRemoveQuantity = (quantity: number, producto: APIArracheraBurger) => {
    if (quantity < 2) return;
    cart.removeQuantity(producto);
  }

  return (
    <li 
      key={data.id}
      className="flex items-start justify-start md:justify-between gap-2 border-b
       border-gray-500 py-4 relative"
    >
      <Image 
        width={400}
        height={400}
        src={data.imagen}
        alt={data.nombre}
        className='object-cover object-center h-20 max-w-[90px] rounded'
      />
      
      <div className="ml-2 mr-4">
        <h3 className="font-semibold">{data.nombre}</h3>
        <span className="text-Accent font-semibold">{formatter.format(data.precio)}</span>
      </div>

      <aside className="relative w-full">
        <FaRegTrashAlt  
          onClick={() => onRemove()}
          className='cursor-pointer text-gray-500 hover:text-Accent h-4 w-4 absolute right-3 top-1'
        />
        <div className="flex text-sm absolute right-3 top-12">
          <button 
            onClick={() => handleRemoveQuantity(data.cantidad, data)}
            className="dark:bg-DarkPrimary bg-Primary py-1 px-3 lg:hover:outline lg:hover:outline-Accent">
            -
          </button>
          <div className="py-1 px-3 border-y-2 dark:border-DarkPrimary border-Primary">{data.cantidad}</div>
          <button 
            onClick={() => handleAddQuantity(data)}
            className="dark:bg-DarkPrimary bg-Primary py-1 px-3 lg:hover:outline lg:hover:outline-Accent">
            +
          </button>
        </div>
      </aside>
    </li>
  )
};

export default CartItem;