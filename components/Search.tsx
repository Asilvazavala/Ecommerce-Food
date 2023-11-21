"use client"

import { BsSearch } from "react-icons/bs";
import { useFoods } from '../hooks/FoodContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import IconButton from "./IconButton";
import { X } from "lucide-react";

const Search: React.FC = () => {
  const { search, setSearch } = useFoods();
  const [openSearchBar, setOpenSearchBar] = useState(false);

  const router = useRouter();

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("#cardsTitle");
  }

  return (
    <section className="text-DarkPrimary w-full relative">
      <button className="flex items-center bg-Primary dark:bg-DarkPrimary 
        rounded-full px-4 py-2 lg:hover:outline lg:hover:outline-Accent
        fixed top-2 right-14 md:right-28 md:top-8 z-10">
        <BsSearch 
          onClick={() => setOpenSearchBar(!openSearchBar)} 
          className="text-Accent h-5 w-5 font-bold" 
        />
      </button>

      <div className={`fixed top-[3.1rem] md:top-[6rem] left-0 md:left-28 md:right-7 h-20 md:h-24 bg-Primary
      dark:bg-DarkPrimary duration-500 flex justify-between items-center gap-x-2 md:gap-x-4 w-full px-4 md:px-8
      ${openSearchBar 
        ? 'translate-y-0 opacity-100 z-50 overflow-hidden' 
        : '-translate-y-20 opacity-0 -z-10'}`}>

        <form onSubmit={submitSearch}>
          <article className="relative w-[75vw]">
            <BsSearch 
              onClick={submitSearch} 
              className="absolute left-3 top-1/2 -translate-y-1/2" 
            />
            <input 
              type="text" 
              value={search}
              autoFocus={openSearchBar}
              onChange={(e) => setSearch(e.target.value)}
              className='bg-white w-full py-1 lg:py-2 pl-10 pr-4 rounded-sm lg:rounded-lg 
              outline-none shadow-md '
              placeholder="Buscar comida..."
            />
          </article>
        </form>

        <IconButton 
          onClick={() => setOpenSearchBar(!openSearchBar)}
          className="dark:text-white text-black md:mr-28" 
          icon={<X size={17} />}
        />
      </div>

      {/* Fondo semitransparente */}
      {openSearchBar && (
        <div
          className="fixed top-[3.1rem] md:top-[6rem] left-0 w-full h-full bg-black opacity-60 z-40"
        />
      )}
    </section>
  )
};

export default Search;