import Image from 'next/image';
import Platillo from '../public/images/Platillo_comida.png'

const GridCards: React.FC = () => {
  return (
    <section>
      <article>
        <Image
          src={Platillo}
          width={100}
          height={100}
          alt='Hamburguesa'  
        />

        
      </article>
    </section>
  )
};

export default GridCards;