const Filters: React.FC = () => {
  return (
    <section>
      <nav className='text-gray-500 flex items-center justify-between md:justify-start gap-4 md:gap-12 text-sm'>
        <button className='border-b py-2 text-Accent border-Accent'>Original</button>
        <button className='border-b border-gray-500 py-2'>A la parrilla</button>
        <button className='border-b border-gray-500 py-2'>Bebidas</button>
        <button className='border-b border-gray-500 py-2'>Otros</button>
      </nav>
    </section>
  )
};

export default Filters;