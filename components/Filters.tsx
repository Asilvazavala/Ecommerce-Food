"use client"

import { useFoods } from '../hooks/FoodContext';

const Filters: React.FC = () => {
  const { currentFilter, setCurrentFilter } = useFoods();
  const filters = ['Hamburguesas', 'Paquetes', 'Bebidas', 'Snacks'];

  return (
    <section>
      <h2 id='cardsTitle' className="text-xl mb-2 text-DarkPrimary dark:text-Primary text-center md:text-left">Filtrar por {currentFilter}</h2>
      <div className='flex justify-between'>
        <nav className='text-gray-500 flex flex-wrap items-center justify-start gap-4 lg:gap-12 text-xs md:text-sm md:mb-4'>
          {filters.map(filter => (
            <button 
              key={filter}
              onClick={() => setCurrentFilter(filter)}
              className={`border-b-2 py-2 hover:text-Accent transition-colors
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