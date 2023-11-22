import Image from 'next/image';
import Logo from '../public/images/Logo.png';
import Link from 'next/link';
import { BsFacebook, BsWhatsapp, BsInstagram } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <section className='bg-Primary dark:bg-DarkPrimary w-full px-4 py-10 flex flex-col
    gap-10 justify-center items-center flex-wrap absolute bottom-0 md:justify-between md:ml-28 
    md:pr-40 md:items-center md:flex-row'>
      <article className='flex flex-col gap-4'>
        <picture className='flex items-center justify-center'>
          <Link href={"/"}>
            <Image
              src={Logo}
              width={80}
              height={80}
              alt='Logo'  
              className='object-cover shadow-xl rounded-full'
            />
          </Link>
        </picture>
        <aside className='flex justify-center items-center gap-4 text-3xl'>
          <Link 
            rel='noreferrer' 
            target='_blank' 
            href={"https://www.facebook.com/"}
          ><BsFacebook className="lg:hover:text-blue-500 transition-colors" />
          </Link>
          <Link 
            rel='noreferrer' 
            target='_blank' 
            href={"https://www.whatsapp.com/"}
          ><BsWhatsapp className="lg:hover:text-green-500 transition-colors" />
          </Link>
          <Link 
            rel='noreferrer' 
            target='_blank' 
            href={"https://www.instagram.com/"}
          ><BsInstagram className="lg:hover:text-red-500 transition-colors" />
          </Link>
        </aside>
      </article>

      <article className='flex flex-col gap-2 justify-center text-center items-center'>
        <p className='underline text-Accent font-bold text-xl'>Dirección:</p>
        <p>Zaragoza #96, entre Obregón y Carranza.</p>
        <p>Valle de Santiago, Guanajuato, 38400</p>
        <p>Tel: 456-123-456</p>
      </article>

      <article className='flex flex-col gap-2 justify-center text-center items-center'>
        <p className='underline text-Accent font-bold text-xl'>Horario:</p>
        <p>Lunes - Viernes: 15:00pm - 20:00pm</p>
        <p>Sabádo: 15:00pm - 22:00pm</p>
        <p>Domingo: 12:00pm - 22:00pm</p>
      </article>
    </section>
  )
};

export default Footer;