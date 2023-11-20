"use client";

import { X } from "lucide-react";
import { FaRegTrashAlt } from "react-icons/fa";

import IconButton from "../IconButton";
import useCart from "@/hooks/use-cart";
import Image from 'next/image';
import { formatter } from '../../lib/utils';
import { useRouter } from "next/navigation";

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

  const handleEmptyCart = () => {
    router.push("/");
    onClose(!onOpen);
  }

  const handleBuyNow = () => {
    router.push("/pedido");
    onClose(!onOpen);
  }

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.precio)
  }, 0);

  const onRemove = (id: number) => {
    cart.removeItem(String(id))
  }

  return (
    <>
      {onOpen && 
      <section className="fixed top-0 right-0 w-full md:w-[300px] h-full bg-Primary dark:bg-DarkPrimary z-50">
        <IconButton 
          onClick={() => onClose(!onOpen)}
          className="m-2" 
          icon={<X size={17} />}
        />
        <main className="flex flex-col">
          {onOpen && items.length > 0 && 
          <h2 className="text-2xl text-center mb-2 text-gray-500">Tu carrito 
            <span className="text-Accent">({items.length})</span>
          </h2>}

          {/* Productos en el carrito */}
          {items.length > 0
            ? items.map((item) => (
              <article 
                key={item.id}
                className="flex items-start justify-start gap-2 border-b border-gray-500 p-2 relative"
              >
                <Image 
                  src={item.imagen}
                  alt={item.nombre}
                  width={100}
                  height={100}
                  className="w-[80px] h-[80px] rounded"
                />
                
                <div className="ml-2 mr-4">
                  <h3>{item.nombre}</h3>
                  <span className="text-Accent font-semibold">{formatter.format(item.precio)}</span>
                </div>

                <aside className="absolute right-3 top-3">
                  <FaRegTrashAlt  
                    onClick={() => onRemove(item.id)}
                    className='cursor-pointer text-gray-500 hover:text-Accent h-5 w-5'
                  />
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
                  className="object-center mt-2 mx-auto"
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

          {/* Total de la compra */}
          {onOpen && items.length > 0 && 
          <div className="mx-auto mt-4">
            <p className="text-lg text-gray-500 text-center">Total:  
              <span className="text-Accent font-semibold text-lg">
                {formatter.format(totalPrice)}
              </span>
            </p>
            <button 
              onClick={handleBuyNow}
              className="mt-2 w-full px-4 hover:outline
            hover:outline-Accent transition py-2 bg-Secondary dark:bg-DarkSecondary 
              rounded-full text-lg">
              Comprar ahora
            </button>
          </div>
          }
        </main>
      </section>
      }
    </>
  )
};

export default SidebarCart;