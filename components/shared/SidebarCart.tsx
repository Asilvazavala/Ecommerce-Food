"use client";

import { X } from "lucide-react";
import { FaRegTrashAlt } from "react-icons/fa";

import IconButton from "../IconButton";
import useCart from "@/hooks/use-cart";
import Image from 'next/image';
import { formatter } from '../../lib/utils';
import { useRouter } from "next/navigation";
import { Product } from "@/types/types";
import { useEffect } from 'react';

interface SidebarCartProps {
  onOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarCart: React.FC<SidebarCartProps> = ({
  onOpen,
  onClose
}) => {
  const items = useCart((state) => state.items);
  const router = useRouter();
  const cart = useCart();

  const totalQuantity = items.reduce((total, item) => {
    return total + Number(item.cantidad)
  }, 0);

  const handleEmptyCart = () => {
    router.push("/");
    onClose(!onOpen);
  }

  const handleBuyNow = () => {
    router.push("/pedido");
    onClose(!onOpen);
  }

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price) * Number(item.cantidad)
  }, 0);

  const onRemove = (id: string) => {
    cart.removeItem(String(id))
  }

  const handleAddQuantity = (producto: Product) => {
    cart.addQuantity(producto);
  }
  
  const handleRemoveQuantity = (quantity: string, producto: Product) => {
    if (Number(quantity) < 2) return;
    cart.removeQuantity(producto);
  }

  useEffect(() => {
    if (onOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [onOpen]);

  return (
    <div>
      <section 
      className={`fixed top-0 right-0 w-full md:w-[350px] h-full bg-Primary
      dark:bg-DarkPrimary z-50 duration-500
      ${onOpen 
      ? 'translate-x-0 overflow-x-hidden' 
      : 'translate-x-full'}`}>
        <div className="flex justify-between items-center px-4 mt-4 border-b border-gray-500">
          <h2 className="text-2xl text-center mb-2 text-gray-500">Tu carrito 
            <span className="text-Accent">({totalQuantity})</span>
          </h2>

          <IconButton 
            onClick={() => onClose(!onOpen)}
            className="mb-3 bg-Secondary dark:bg-DarkSecondary" 
            icon={<X size={17} />}
          />
        </div>
        <main className="flex flex-col max-h-[50vh] overflow-x-hidden">
          {/* Productos en el carrito */}
          {items.length > 0
            ? items.map((item) => (
              <article 
                key={item.id}
                className="flex items-start justify-start md:justify-between gap-2 border-b border-gray-500 py-2 pl-4 relative"
              >
                <Image 
                  width={400}
                  height={400}
                  src={item.images[0].url}
                  alt={item.name}
                  className='object-cover object-center h-20 max-w-[90px] rounded'
                />
                
                <div className="ml-2 mr-4">
                  <h3 className="font-semibold">{item.name}</h3>
                  <span className="text-Accent font-semibold">{formatter.format(Number(item.price))}</span>
                </div>

                <aside className="relative w-full">
                  <FaRegTrashAlt  
                    onClick={() => onRemove(item.id)}
                    className='cursor-pointer text-gray-500 hover:text-Accent h-4 w-4 absolute right-3 top-1'
                  />
                  <div className="flex text-sm absolute right-3 top-12">
                    <button 
                      onClick={() => handleRemoveQuantity(item.cantidad, item)}
                      className="dark:bg-DarkSecondary bg-Secondary py-1 px-3 lg:hover:outline lg:hover:outline-Accent">
                      -
                    </button>
                    <div className="py-1 px-3 border-y-2 dark:border-DarkSecondary border-Secondary">{item.cantidad}</div>
                    <button 
                      onClick={() => handleAddQuantity(item)}
                      className="dark:bg-DarkSecondary bg-Secondary py-1 px-3 lg:hover:outline lg:hover:outline-Accent">
                      +
                    </button>
                  </div>
                </aside>
              </article>
            ))
            : <div className="flex flex-col p-2">
                <p className="text-center">No hay productos en tu carrito</p>
                <Image 
                  src="/images/empty-cart.webp"
                  alt="Carrito vacío"
                  width={150}
                  height={150}
                  className="object-center mt-2 mx-auto w-auto h-auto"
                />
                <button 
                  onClick={handleEmptyCart}
                  className="mt-4 mx-auto md:mx-0 px-4 hover:outline
                 hover:outline-Accent transition py-2 bg-Secondary dark:bg-DarkSecondary 
                  rounded-full text-lg">
                  Seguir comprando
                </button>
              </div>
          }
        </main>
        {/* Total de la compra */}
        {items.length > 0 && 
          <div className="mx-auto w-full px-4 mt-12">
            <p className="text-lg text-gray-500 text-center">Total:  
              <span className="text-Accent font-semibold text-lg">
                {formatter.format(totalPrice)}
              </span>
            </p>
            <button 
              onClick={handleBuyNow}
              className="mt-2 w-full px-4 hover:outline
            hover:outline-Accent transition py-3 bg-Secondary dark:bg-DarkSecondary 
              rounded-full text-lg mb-8">
              Comprar ahora
            </button>
          </div>
          }
      </section>
      
      {/* Fondo semitransparente */}
      {onOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-40"
        />
      )}
    </div>
  )
};

export default SidebarCart;