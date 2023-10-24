"use client"

import { slides } from '../helpers/constants';
import Image from 'next/image';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useState } from 'react';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <section className='mb-4 max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
        <Image
          src={slides[currentIndex].url}
          layout='fill'
          alt='Promoción'  
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        />    
      <small 
        className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full 
        p-2 bg-black/20 text-white cursor-pointer hover:bg-Accent transition-colors'>
        <BsChevronCompactLeft onClick={prevSlide} />
      </small>

      <small 
        className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full 
        p-2 bg-black/20 text-white cursor-pointer hover:bg-Accent transition-colors'>
        <BsChevronCompactRight onClick={nextSlide} />
      </small>

      <footer className='flex top-4 justify-center py-2'>
        {
          slides.map((slide, slideIndex) => (
            <aside 
              key={slideIndex}
              className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? 'text-Accent' : ''}`}
              onClick={() => goToSlide(slideIndex)}
            >
              <RxDotFilled />
            </aside>
          ))
        }
      </footer>
    </section>
  )
};

export default Carousel;