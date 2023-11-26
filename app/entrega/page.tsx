"use client";

import dynamic from "next/dynamic"

const Deliver = () => {
  const LocationMap = dynamic(
    () => import('../../components/Location').then(module => module.Location),
    {
      ssr: false
    }
  )

  return (
    <section className='bg-Secondary dark:bg-DarkSecondary w-full px-4 md:pl-36 pt-12 md:pt-8'>
      <h1 className="text-3xl text-Accent font-bold mb-4 text-center lg:text-left">Entrega</h1>
      <LocationMap />
    </section>
  )
};

export default Deliver;