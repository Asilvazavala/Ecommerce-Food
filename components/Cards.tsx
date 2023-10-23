import Image from 'next/image';
import Platillo from '../public/images/Platillo_comida.png'

const Cards: React.FC = () => {
  return (
    <section>
      <main className='mt-[4.5rem] grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 pb-10'>
        <article className='bg-Primary dark:bg-DarkPrimary py-8 px-20 rounded-xl flex flex-col items-center gap-2 shadow-md'>
          <Image
            src={Platillo}
            width={100}
            height={100}
            alt='Hamburguesa'  
            className='object-cover -mt-20 shadow-xl rounded-full'
          />
          <p className='text-xl'>Description</p>
          <span className='text-Accent font-bold'>$80</span>
        </article>
        
        <article className='bg-Primary dark:bg-DarkPrimary py-8 px-20 rounded-xl flex flex-col items-center gap-2 shadow-md'>
          <Image
            src={Platillo}
            width={100}
            height={100}
            alt='Hamburguesa'  
            className='object-cover -mt-20 shadow-xl rounded-full'
          />
          <p className='text-xl'>Description</p>
          <span className='text-Accent font-bold'>$80</span>
        </article>
        
        <article className='bg-Primary dark:bg-DarkPrimary py-8 px-20 rounded-xl flex flex-col items-center gap-2 shadow-md'>
          <Image
            src={Platillo}
            width={100}
            height={100}
            alt='Hamburguesa'  
            className='object-cover -mt-20 shadow-xl rounded-full'
          />
          <p className='text-xl'>Description</p>
          <span className='text-Accent font-bold'>$80</span>
        </article>
        
        <article className='bg-Primary dark:bg-DarkPrimary py-8 px-20 rounded-xl flex flex-col items-center gap-2 shadow-md'>
          <Image
            src={Platillo}
            width={100}
            height={100}
            alt='Hamburguesa'  
            className='object-cover -mt-20 shadow-xl rounded-full'
          />
          <p className='text-xl'>Description</p>
          <span className='text-Accent font-bold'>$80</span>
        </article>
        
        <article className='bg-Primary dark:bg-DarkPrimary py-8 px-20 rounded-xl flex flex-col items-center gap-2 shadow-md'>
          <Image
            src={Platillo}
            width={100}
            height={100}
            alt='Hamburguesa'  
            className='object-cover -mt-20 shadow-xl rounded-full'
          />
          <p className='text-xl'>Description</p>
          <span className='text-Accent font-bold'>$80</span>
        </article>
        
        <article className='bg-Primary dark:bg-DarkPrimary py-8 px-20 rounded-xl flex flex-col items-center gap-2 shadow-md'>
          <Image
            src={Platillo}
            width={100}
            height={100}
            alt='Hamburguesa'  
            className='object-cover -mt-20 shadow-xl rounded-full'
          />
          <p className='text-xl'>Description</p>
          <span className='text-Accent font-bold'>$80</span>
        </article>
        
        <article className='bg-Primary dark:bg-DarkPrimary py-8 px-20 rounded-xl flex flex-col items-center gap-2 shadow-md'>
          <Image
            src={Platillo}
            width={100}
            height={100}
            alt='Hamburguesa'  
            className='object-cover -mt-20 shadow-xl rounded-full'
          />
          <p className='text-xl'>Description</p>
          <span className='text-Accent font-bold'>$80</span>
        </article>
        

      </main>
    </section>
  )
};

export default Cards;