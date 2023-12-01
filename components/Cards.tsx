"use client"

import Image from 'next/image';
import { useFoods } from '../hooks/FoodContext';
import Loading from './Loading';
import { useRouter } from 'next/navigation';
import { formatter } from '../lib/utils';

const Cards = () => {
  const { currentFoodData, search, currentFilter } = useFoods();

  const router = useRouter();

  const handleClick = (id: string) => {
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
                key={food.images[0].url} 
                className='bg-Primary dark:bg-DarkPrimary py-5 px-10 lg:py-6 lg:px-12 rounded-xl flex 
                flex-col items-center gap-2 shadow-md lg:hover:outline lg:hover:outline-Accent 
                cursor-pointer group transition'>
                <div className='relative'>             
                  <Image
                    src={food.images[0].url}
                    width={150}
                    height={150}
                    alt={food.name}  
                    title={food.name}  
                    className='object-cover aspect-square max-w-[120px] max-h-[120px] md:max-w-[150px] md:max-h-[150px] lg:-mt-28 -mt-[5.5rem] shadow-xl rounded-full z-10'
                  />
                </div>
                <h2 className='md:text-lg text-center font-bold'>{food.name}</h2>
                <span className='text-Accent font-bold text-lg md:text-xl'>{formatter.format(Number(food.price))}</span>
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