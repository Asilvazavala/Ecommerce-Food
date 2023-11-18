"use client";

import getProduct from "@/actions/get-a-product";
import getProducts from "@/actions/get-products";
import Image from "next/image";
import { formatter } from '../lib/utils';
import { FaCartPlus } from "react-icons/fa";
import { APIArracheraBurger } from '../types/types';

interface ProductPageProps {
  producto: APIArracheraBurger;
  relatedProducts: APIArracheraBurger[];
}

const ProductPage: React.FC<ProductPageProps> = (props: ProductPageProps) => {
  // const product = await getProduct(params.productId);
  // const suggestedProducts = await getProducts({
  //   categoryId: product?.category?.id
  // })
  const { producto, relatedProducts } = props;

  return (
    <section className="md:ml-28 pt-8 md:pt-0">
      <main className="px-4 py-10 sm:px-6 lg:px-6">
        <article className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
          {/* Galería */}
          <Image 
            src={producto.imagen}
            alt={producto.nombre}
            width={500}
            height={500}
            className="rounded-lg w-full lg:h-[400px] bg-cover"
          />
          <header className="mt-4 sm:mt-8 lg:mt-0 flex items-start flex-col gap-y-2">
            {/* Info */}
            <h2 className="text-3xl font-semibold">{producto.nombre}</h2>
            <p className="text-gray-500">{producto.descripcionLarga}</p>
            <p className="text-2xl text-Accent font-semibold my-3">{formatter.format(producto.precio)}</p>
            <button 
              className="dark:bg-DarkPrimary text-lg bg-Primary px-4 py-2 rounded-full 
              hover:outline hover:outline-Accent transition flex items-center justify-center"
            >
              <FaCartPlus className="mr-2" />
              Agregar al carrito
            </button>
          </header>
        </article>

        <article className="mt-8">
          <h2 className="text-3xl font-semibold mb-24 lg:mb-20">Puedes acompañar con</h2>
          <aside className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 items-start gap-x-8 gap-y-24 md:gap-y-20">
            {relatedProducts.map(relatedProduct => (
              <div
                className='bg-Primary dark:bg-DarkPrimary py-5 px-10 lg:py-6 lg:px-12 rounded-xl flex 
                flex-col items-center gap-2 shadow-md hover:outline hover:outline-Accent 
                cursor-pointer group transition' 
                key={relatedProduct.id}>
                <Image 
                  src={relatedProduct.imagen}
                  alt={relatedProduct.nombre}
                  width={100}
                  height={100}
                  className="object-cover aspect-square max-w-[100px] max-h-[100px] md:max-w-[120px] 
                  md:max-h-[120px] lg:-mt-20 -mt-[4.5rem] shadow-xl rounded-full z-10"
                />
                <p className="text-center font-bold">{relatedProduct.nombre}</p>
                <span className="text-Accent text-lg font-semibold">{formatter.format(relatedProduct.precio)}</span>
              </div>
            ))}
          </aside>
        </article>
      </main>
    </section>
  )
};

export default ProductPage;