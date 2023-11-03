"use client"

import Image from 'next/image';
import { useFoods } from '../hooks/FoodContext';
import Loading from './Loading';
import Platillo from '../public/images/Platillo_comida.png';

const Cards: React.FC = () => {
  const { currentFoodData, search, currentFilter } = useFoods();

  return (
    <section>
      <main className='mt-24 grid grid-cols-1 gap-x-16 gap-y-28 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 pb-10'>
        {
          currentFoodData.length > 0 
            ? currentFoodData.map((food) => (
              <article 
                key={food.nombre} 
                className='bg-Primary dark:bg-DarkPrimary py-8 px-12 rounded-xl flex flex-col items-center gap-2 shadow-md hover:outline hover:outline-Accent cursor-pointer'>
                <Image
                  src={food.imagen}
                  width={150}
                  height={150}
                  alt={food.nombre}  
                  className='object-cover aspect-square max-w-[150px] max-h-[150px] -mt-28 shadow-xl rounded-full z-10'
                />
                <h2 className='text-lg text-center font-bold'>{food.nombre}</h2>
                <p className='text-center text-gray-500'>{food.descripcion}</p>
                <span className='text-Accent font-bold text-2xl'>${food.precio}</span>
              </article>
            ))
            : search !== '' 
              ? <span 
                  className='bg-red-300 text-red-600 w-fit rounded-full px-2 py-1 text-center'>
                  No hay productos <strong>{search}</strong> en la categoría <strong>{currentFilter}</strong>
                </span>
              : <Loading />
        }
      </main>
    </section>
  )
};

export default Cards;