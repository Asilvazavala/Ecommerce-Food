"use client";

import { BsSearch } from "react-icons/bs";
import { useFoods } from '../hooks/FoodContext';
import { useState, useRef, useEffect } from 'react';
import IconButton from "./IconButton";
import { X } from "lucide-react";
import SearchResult from "./SearchResults";

const Search: React.FC = () => {
  const { search, setSearch } = useFoods();
  const [openSearchBar, setOpenSearchBar] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (openSearchBar && inputRef.current) {
      inputRef.current.focus();
    }

    if (openSearchBar) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [openSearchBar]);
  
  
  return (
    <section className="text-DarkPrimary w-full relative">
      <button className="flex items-center bg-Primary dark:bg-DarkPrimary rounded-full px-4 py-2 
        z-10 top-[0.4rem] md:fixed right-14 md:right-28 w-fit md:top-8 md:py-[6px]
        lg:hover:outline lg:hover:outline-Accent lg:py-[10px] xl:ml-[1070px] xl:right-auto">
        <BsSearch 
          onClick={() => setOpenSearchBar(!openSearchBar)} 
          className="text-Accent h-6 w-6 lg:h-5 lg:w-5 font-bold" 
        />
      </button>

      <div className={`fixed top-[3.1rem] md:top-[6rem] left-0 md:left-28 md:right-7 h-20 md:h-24 
      bg-Primary dark:bg-DarkPrimary duration-500 w-full md:w-[83vw] lg:w-[90vw] px-4 md:pl-8 
       ${search.length > 0 && openSearchBar !== false ? 'h-[30rem] md:h-72' : 'md:h-24 '}
       ${openSearchBar 
        ? 'translate-y-0 opacity-100 z-50 overflow-x-hidden' 
        : '-translate-y-20 opacity-0 -z-10'}`}>
        <article className="flex justify-between items-center gap-x-2 md:gap-x-4 mt-6">
          <form>
            <article className="relative w-[75vw] md:w-[68vw] lg:w-[81vw]">
              <BsSearch 
                className="absolute left-3 top-1/2 -translate-y-1/2" 
              />
              <input 
                ref={inputRef}
                type="text" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='bg-white w-full py-1 lg:py-2 pl-10 pr-4 rounded-sm lg:rounded-lg 
                outline-none shadow-md '
                placeholder="Buscar comida..."
              />
            </article>
          </form>

          <IconButton 
            onClick={() => setOpenSearchBar(!openSearchBar)}
            className="dark:text-white text-black md:mr-28 bg-Secondary dark:bg-DarkSecondary" 
            icon={<X size={17} />}
          />
        </article>
        <SearchResult openSearchBar={openSearchBar} setOpenSearchBar={setOpenSearchBar} />
      </div>

      {/* Fondo semitransparente */}
      {openSearchBar && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-40"
        />
      )}
    </section>
  )
};

export default Search;