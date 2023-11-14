"use client"

import { useFoods } from '../hooks/FoodContext';
import Search from './Search';

const Filters: React.FC = () => {
  const { currentFilter, setCurrentFilter } = useFoods();
  const filters = ['Hamburguesas', 'Paquetes', 'Bebidas', 'Snacks'];

  return (
    <section>
      <div className='flex justify-between'>
        <nav className='text-gray-500 flex flex-wrap items-center lg:justify-between justify-start gap-4 lg:gap-12 text-sm'>
          <button 
            onClick={() => setCurrentFilter(null)}
            className={`border-b-2 py-2 hover:text-Accent transition-colors
            ${currentFilter === null ? 'text-Accent border-Accent' : 'border-gray-500'}`}>
            Todo
          </button>

          {filters.map(filter => (
            <button 
              key={filter}
              onClick={() => setCurrentFilter(filter)}
              className={`border-b-2 py-2 hover:text-Accent transition-colors
              ${currentFilter === filter ? 'text-Accent border-Accent' : 'border-gray-500'}`}>
              {filter}  
            </button>
          ))}
        </nav>

        <article className="hidden sm:flex">
          <Search />
         </article>
      </div>

      <h2 id='cardsTitle' className="text-xl my-8 text-DarkPrimary dark:text-Primary text-center md:text-left">Elige tus {currentFilter === null ? 'comidas' : currentFilter}</h2>
    </section>
  )
};

export default Filters;