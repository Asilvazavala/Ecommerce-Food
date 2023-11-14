import { ShoppingBag } from 'lucide-react';

const CartIcon: React.FC = () => {
  return (
    <section>
      <button 
        className='flex items-center bg-Primary dark:bg-DarkPrimary 
        md:rounded-full md:px-4 md:py-2 lg:hover:outline lg:hover:outline-Accent'>
        <ShoppingBag
          size={20}
          className='text-Accent font-bold'
        />
        <span className='ml-1 md:ml-2 text-sm text-Accent font-bold'>
          0
        </span>
      </button>
    </section>
  )
};

export default CartIcon;