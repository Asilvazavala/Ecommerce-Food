"use client"

import CartItem from "@/components/CartItem";
import Summary from "@/components/Summary";
import useCart from "@/hooks/use-cart";
import Image from 'next/image';
import { useRouter } from "next/navigation";

const Pedido = () => {
  const cart = useCart();
  const router = useRouter();

  return (
    <section className='bg-Secondary dark:bg-DarkSecondary w-full px-4 md:pl-36 pt-12 md:pt-8'>
      <h1 className="text-3xl font-bold text-Accent text-center md:text-left mb-2 md:mb-0">Tu carrito de compras</h1>
      <article className="md:mt-8 lg:grid lg:grid-cols-12 lg:items-start gap-x-8">
        <div className="lg:col-span-7">
          {cart.items.length === 0 && 
            <div className="flex flex-col md:items-start md:justify-start">
              <p className="text-neutral-500 mt-4 md:mt-0 text-center md:text-left">No hay productos agregados en el carrito</p>
              <Image 
                src="/images/empty-cart.webp"
                alt="Carrito vacío"
                width={150}
                height={150}
                className="object-center mt-2 mx-auto md:mx-0"
              />
              <button 
                onClick={() => router.push("/")}
                className="mt-4 mx-auto md:mx-0 px-4 lg:hover:outline
                lg:hover:outline-Accent transition py-2 bg-Primary dark:bg-DarkPrimary 
                 rounded-full text-lg">
                Seguir comprando
              </button>
            </div>
          }

          <ul>
            {cart.items.map((item) => (
              <CartItem
                key={item.id}
                data={item}
              />
            ))}
          </ul>
        </div>

        <Summary />
      </article>
    </section>
  )
};

export default Pedido;