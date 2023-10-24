"use client"

import { BsSearch } from "react-icons/bs";
import { useFoods } from '../hooks/FoodContext';

const Search: React.FC = () => {
  const { search, setSearch } = useFoods();

  return (
    <section className="text-DarkPrimary w-full">
      <form action="">
        <article className="relative">
          <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white w-full py-1 lg:py-2 pl-10 pr-4 rounded-sm lg:rounded-lg outline-none shadow-md" 
            placeholder="Buscar comida..."
          />
        </article>
      </form>
    </section>
  )
};

export default Search;