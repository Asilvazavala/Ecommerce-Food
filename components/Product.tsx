"use client";

import Image from "next/image";
import { formatter } from '../lib/utils';
import { FaCartPlus } from "react-icons/fa";
import { Product } from '../types/types';
import { MouseEventHandler } from "react";
import useCart from "@/hooks/use-cart";
import Link from 'next/link';
import { useState } from 'react';

interface ProductPageProps {
  producto: Product;
  suggestedProductsSliced: Product[];
}

const ProductPage: React.FC<ProductPageProps> = (props: ProductPageProps) => {
  const { producto, suggestedProductsSliced } = props;
  const cart = useCart();

  const [quantity, setQuantity] = useState(1);

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem({ ...producto, cantidad: quantity.toString() });
  }

  const handleAddQuantity = (quantity: number) => {
    setQuantity(quantity + 1);
  }
  
  const handleRemoveQuantity = (quantity: number) => {
    if (quantity < 2) return;
    setQuantity(quantity - 1);
  }

  return (
    <section className="md:ml-28 pt-4 md:pt-0">
      <main className="px-4 py-10 sm:px-6 lg:pr-8 lg:ol-6">
        <article className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
          {/* Galería */}
          <Image 
            src={producto.images[0].url}
            alt={producto.name}
            width={500}
            height={500}
            className="rounded-lg w-full h-[200px] md:h-[400px] bg-cover"
          />
          <header className="mt-4 sm:mt-8 lg:mt-0 flex items-start flex-col gap-y-2">
            {/* Info */}
            <h2 className="text-3xl font-semibold lg:max-w-[80%]">{producto.name}</h2>
            <p className="text-gray-500 text-lg md:mt-10">{producto.description}</p>
            
            <div className="flex gap-y-2 md:flex-row flex-col items-center justify-between w-full text-2xl my-2 md:my-6">
              <p>Cantidad</p>
              <aside className="flex">
                <button 
                  onClick={() => handleRemoveQuantity(quantity)}
                  className="dark:bg-DarkPrimary bg-Primary py-2 px-4 lg:hover:outline lg:hover:outline-Accent">
                  -
                </button>
                <div className="py-2 px-4 border-y-2 dark:border-DarkPrimary border-Primary">{quantity}</div>
                <button 
                  onClick={() => handleAddQuantity(quantity)}
                  className="dark:bg-DarkPrimary bg-Primary py-2 px-4 lg:hover:outline lg:hover:outline-Accent">
                  +
                </button>
              </aside>
              <p className="text-Accent font-semibold my-2 md:my-4">
                {formatter.format(Number(producto.price))}
              </p>
            </div>

            <button 
              onClick={onAddToCart}
              className="dark:bg-DarkPrimary text-xl bg-Primary px-6 py-4 rounded-full 
              lg:hover:outline lg:hover:outline-Accent transition flex items-center justify-center 
              mx-auto md:mx-0"
            >
              <FaCartPlus className="mr-2" />
              Agregar al carrito
            </button>
          </header>
        </article>

        <article className="mt-8">
          <h2 className="text-3xl font-semibold mb-24 lg:mb-20">Puedes acompañar con</h2>
          <aside className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 items-start gap-x-8 gap-y-24 md:gap-y-20">
            {suggestedProductsSliced.map(relatedProduct => (
              <Link
                href={`/producto/${relatedProduct.id}`}
                className='bg-Primary dark:bg-DarkPrimary py-5 px-10 lg:py-6 min-h-full lg:px-12 rounded-xl flex 
                flex-col items-center gap-2 shadow-md lg:hover:outline lg:hover:outline-Accent 
                cursor-pointer group transition' 
                key={relatedProduct.id}>
                <Image 
                  src={relatedProduct.images[0].url}
                  alt={relatedProduct.name}
                  width={100}
                  height={100}
                  className="object-cover aspect-square max-w-[100px] max-h-[100px] md:max-w-[120px] 
                  md:max-h-[120px] lg:-mt-20 -mt-[4.5rem] shadow-xl rounded-full z-10"
                />
                <p className="text-center font-bold">{relatedProduct.name}</p>
                <span className="text-Accent text-lg font-semibold">{formatter.format(Number(relatedProduct.price))}</span>
              </Link>
            ))}
          </aside>
        </article>
      </main>
    </section>
  )
};

export default ProductPage;