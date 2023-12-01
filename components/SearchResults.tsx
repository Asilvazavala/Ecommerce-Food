"use client";

import { useFoods } from '../hooks/FoodContext';
import { formatter } from '../lib/utils';
import { useRouter } from "next/navigation";
import Image from "next/image";

interface SearchResultProps {
  openSearchBar: boolean;
  setOpenSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchResult: React.FC<SearchResultProps> = ({
  openSearchBar,
  setOpenSearchBar
}) => {
  const { search, searchResults } = useFoods();

  const router = useRouter();

  const handleSearchResult = (id: string) => {
    setOpenSearchBar(!openSearchBar);
    router.push(`/producto/${id}`);
  }

  return (
    <main className={`w-[85vw] flex flex-col ${search.length === 0 || openSearchBar === false ? 'hidden' : ''}`}>
      <p className="text-gray-500 my-8 border-b border-gray-500">{searchResults.length} {searchResults.length === 1 ? 'RESULTADO' : 'RESULTADOS'}</p>
      {searchResults.length === 0 && <p className="text-red-800 bg-red-300 px-4 py-2 w-fit rounded-full">
        No hay resultados para esta búsqueda</p>}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {searchResults.map((product) => (
          <article
            onClick={() => handleSearchResult(product.id)}
            className="flex flex-col cursor-pointer w-fit" 
            key={product.id}>
            <Image 
              src={product.images[0].url}
              alt={product.name}
              title={product.name}
              width={100}
              height={100}
              className="w-32 h-20 object-cover rounded mb-1"
            />
            <span className="text-white">{product.name}</span>
            <span className="text-Accent font-semibold mb-2">{formatter.format(Number(product.price))}</span>
          </article>
        ))}
      </div>
    </main>
  )
};

export default SearchResult;