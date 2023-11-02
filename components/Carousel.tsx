"use client"

import { slides } from '../helpers/constants';
import Image from 'next/image';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { RxDotFilled } from 'react-icons/rx';
import { useState, useRef, useEffect  } from 'react';
import Link from 'next/link';
import { useFoods } from '../hooks/FoodContext';

const Carousel: React.FC = () => {
  const { setCurrentFilter } = useFoods();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [changeCarouselImage, setChangeCarouselImage] = useState<boolean>(true);
  
  const [startX, setStartX] = useState(0)
  const [isMoving, setIsMoving] = useState(false);
  const carouselRef = useRef(null);

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

  const startCarousel = () => {
    if (changeCarouselImage) {
      nextSlide();
    }
  };

  useEffect(() => {
    const intervalId = setInterval(startCarousel, 5000);

    return () => {
      clearInterval(intervalId); 
    };
  }, [currentIndex, changeCarouselImage]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsMoving(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMoving) return;

    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    if (diffX > 50) {
      nextSlide();
      setIsMoving(false);
    } else if (diffX < -50) {
      prevSlide();
      setIsMoving(false);
    }
  };

  const handleTouchEnd = () => {
    setIsMoving(false);
  };

  return (
    <section 
      ref={carouselRef}
      className="relative group mb-2 max-w-[1400px] w-full"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Link href={"#cardsTitle"}>
        <Image
          onClick={() => setCurrentFilter(slides[currentIndex].categoria)}
          src={slides[currentIndex].url}
          width={200}
          height={200}
          alt={slides[currentIndex].name}  
          onMouseEnter={() => setChangeCarouselImage(false)}
          onMouseLeave={() => setChangeCarouselImage(true)}
          className='rounded-lg duration-500 w-full max-h-[250px] md:max-h-[350px]'
        />  
      </Link>  
      <small 
        className='hidden lg:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-80%] left-5 
        text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer hover:bg-Accent transition-colors'>
        <IoIosArrowBack onClick={prevSlide} />
      </small>

      <small 
        className='hidden lg:group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[80%] right-5
        text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer hover:bg-Accent transition-colors'>
        <IoIosArrowForward onClick={nextSlide} />
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