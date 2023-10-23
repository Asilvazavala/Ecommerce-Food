"use client"

import { useState } from 'react';

const Filters: React.FC = () => {
  const [currentFilter, setCurrentFilter] = useState<string>('Hamburguesa original');

  return (
    <section>
      <nav className='text-gray-500 flex items-center justify-between md:justify-start gap-4 md:gap-12 text-sm'>
        <button 
          onClick={() => setCurrentFilter('Hamburguesa original')}
          className={`border-b-2 py-2
          ${currentFilter === 'Hamburguesa original' ? 'text-Accent border-Accent' : 'border-gray-500'}`}>
          Original
        </button>

        <button 
          onClick={() => setCurrentFilter('Hamburguesa a la parrilla')}
          className={`border-b-2 py-2
          ${currentFilter === 'Hamburguesa a la parrilla' ? 'text-Accent border-Accent' : 'border-gray-500'}`}>
          A la parrilla
        </button>

        <button 
          onClick={() => setCurrentFilter('Bebida')}
          className={`border-b-2 py-2
          ${currentFilter === 'Bebida' ? 'text-Accent border-Accent' : 'border-gray-500'}`}>
          Bebidas
        </button>

        <button 
          onClick={() => setCurrentFilter('Snacks')}
          className={`border-b-2 py-2
          ${currentFilter === 'Snacks' ? 'text-Accent border-Accent' : 'border-gray-500'}`}>
          Otros
        </button>
      </nav>

      <h2 className="text-xl my-8 text-DarkPrimary dark:text-Primary">Elige tu {currentFilter}</h2>
    </section>
  )
};

export default Filters;