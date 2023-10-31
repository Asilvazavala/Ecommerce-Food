"use client"

import { BsSearch } from "react-icons/bs";
import { useFoods } from '../hooks/FoodContext';
import { useRouter } from 'next/navigation';

const Search: React.FC = () => {
  const { search, setSearch } = useFoods();
  const router = useRouter();

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("#cardsTitle");
  }

  return (
    <section className="text-DarkPrimary w-full">
      <form onSubmit={submitSearch}>
        <article className="relative">
          <BsSearch 
            onClick={submitSearch} 
            className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer" 
          />
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