"use client"

import { slides } from '../helpers/constants';
import Image from 'next/image';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useState, useEffect  } from 'react';
import { useSwipeable } from 'react-swipeable';

const Carousel = () => {
  const [curr, setCurr] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    swipeDuration: 250,
    preventScrollOnSwipe: true,
    trackMouse: true
  })

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  const goToSlide = (i: number) => setCurr(i);

  const autoSlide = false;
  const autoSlideInterval = 5000;

  useEffect(() => {
    if (!autoSlide) return

    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [autoSlide])

  return (
    <main className='overflow-hidden relative group mb-6 lg:mb-10 z-10'>
      <figure 
        {...handlers}
        className='flex transition-transform ease-out duration-1000' 
        style={{ transform: `translateX(-${curr * 100}%)`}}>
      {
          slides.map((slide, slideIndex) => (
            <Image
              key={slideIndex}
              src={slide}
              width={1000}
              height={1000}
              priority
              alt={slide}  
              title={slide}  
              className='rounded-lg min-w-full max-h-[250px] md:max-h-[450px] lg:max-w-[1400px]'
            />  
          ))
        }
      </figure>

      <button 
        onClick={prev} 
        className='hidden lg:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-80%] left-5 
        text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer hover:bg-Accent transition-colors'>
        <IoIosArrowBack  />
      </button>

      <button 
        onClick={next}
        className='hidden lg:group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[80%] right-5
        text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer hover:bg-Accent transition-colors'>
        <IoIosArrowForward />
      </button>

      <footer className='mt-2'>
        <article className='flex items-center justify-center gap-2'>
          {slides.map((_, i) => (
            <div 
              key={i} 
              onClick={() => goToSlide(i)}
              className={`transition-all w-2 h-2 bg-black dark:bg-white rounded-full cursor-pointer
              ${curr === i ? '' : 'dark:bg-opacity-50 opacity-50'}`}>

            </div>
          ))}
        </article>
      </footer>
    </main>
  )
};

export default Carousel;