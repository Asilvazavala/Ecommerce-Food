"use client"

import { useFoods } from '../hooks/FoodContext';

const Filters: React.FC = () => {
  const { currentFilter, setCurrentFilter } = useFoods();
  const filters = ['Hamburguesas', 'Paquetes', 'Bebidas', 'Snacks'];

  return (
    <section>
      <h2 
        id='cardsTitle' 
        className="text-xl mb-2 text-DarkPrimary dark:text-Primary text-center md:text-left mt-4 lg:mt-0">
        Filtrar por {currentFilter}
      </h2>
      <div className='flex justify-between'>
        <nav className='text-gray-500 flex w-full flex-wrap justify-between md:justify-start md:gap-12 text-xs md:mb-4'>
          {filters.map(filter => (
            <button 
              key={filter}
              onClick={() => setCurrentFilter(filter)}
              className={`border-b-2 py-2 lg:hover:text-Accent transition-colors
              ${currentFilter === filter ? 'text-Accent border-Accent font-semibold' : 'border-gray-500'}`}>
              {filter}  
            </button>
          ))}
        </nav>
      </div>
    </section>
  )
};

export default Filters;