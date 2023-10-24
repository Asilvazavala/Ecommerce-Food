"use client"

import { useFoods } from '../hooks/FoodContext';

const Filters: React.FC = () => {
  const { currentFilter, setCurrentFilter } = useFoods();

  return (
    <section>
      <nav className='text-gray-500 flex items-center justify-between md:justify-start gap-4 md:gap-12 text-sm'>
        <button 
          onClick={() => setCurrentFilter('Hamburguesas')}
          className={`border-b-2 py-2
          ${currentFilter === 'Hamburguesas' ? 'text-Accent border-Accent' : 'border-gray-500'}`}>
          Hamburguesas
        </button>

        <button 
          onClick={() => setCurrentFilter('Paquetes')}
          className={`border-b-2 py-2
          ${currentFilter === 'Paquetes' ? 'text-Accent border-Accent' : 'border-gray-500'}`}>
          Paquetes
        </button>

        <button 
          onClick={() => setCurrentFilter('Bebidas')}
          className={`border-b-2 py-2
          ${currentFilter === 'Bebidas' ? 'text-Accent border-Accent' : 'border-gray-500'}`}>
          Bebidas
        </button>

        <button 
          onClick={() => setCurrentFilter('Snacks')}
          className={`border-b-2 py-2
          ${currentFilter === 'Snacks' ? 'text-Accent border-Accent' : 'border-gray-500'}`}>
          Snacks
        </button>
      </nav>

      <h2 id='cardsTitle' className="text-xl my-8 text-DarkPrimary dark:text-Primary text-center md:text-left">Elige tus {currentFilter}</h2>
    </section>
  )
};

export default Filters;