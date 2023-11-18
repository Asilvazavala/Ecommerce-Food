"use client"

import Image from 'next/image';
import { useFoods } from '../hooks/FoodContext';
import Loading from './Loading';
import IconButton from './IconButton';
import { Expand, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { formatter } from '../lib/utils';

import { Product } from '@/types/types';
interface ProductListProps {
  items: Product[];
}

// const Cards: React.FC<ProductListProps> = ({
//   items
// }) => {
const Cards = () => {
  const { currentFoodData, search, currentFilter } = useFoods();

  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/producto/${id}`);
  }

  return (
    <section>
      <main className='mt-24 grid grid-cols-2 gap-x-5 md:gap-x-16 gap-y-28 lg:grid-cols-3 2xl:grid-cols-4 pb-10'>
        {
          currentFoodData.length > 0 
            ? currentFoodData.map((food) => (
              <article 
                onClick={() => handleClick(food.id)}
                key={food.nombre} 
                className='bg-Primary dark:bg-DarkPrimary py-5 px-10 lg:py-6 lg:px-12 rounded-xl flex 
                flex-col items-center gap-2 shadow-md hover:outline hover:outline-Accent 
                cursor-pointer group transition'>
                <div className='relative'>             
                  <Image
                    src={food.imagen}
                    width={150}
                    height={150}
                    alt={food.nombre}  
                    className='object-cover aspect-square max-w-[120px] max-h-[120px] md:max-w-[150px] md:max-h-[150px] lg:-mt-28 -mt-[5.5rem] shadow-xl rounded-full z-10'
                  />
                  <footer className='opacity-0 group-hover:opacity-100 absolute w-full px-6 bottom-5'>
                    <div className='flex gap-x-6 justify-center'>
                      <IconButton 
                        onClick={() => {}}
                        icon={<Expand size={20} className='text-Accent' />}
                      />
                      <IconButton 
                        onClick={() => {}}
                        icon={<ShoppingCart size={20} className='text-Accent' />}
                      />
                    </div>
                  </footer>
                </div>
                <h2 className='text-lg text-center font-bold'>{food.nombre}</h2>
                <p className='text-center text-gray-500'>{food.descripcion}</p>
                <span className='text-Accent font-bold text-2xl'>{formatter.format(food.precio)}</span>
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