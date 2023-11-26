"use client";

import { Location } from "@/components/Location/Location";

const Deliver = () => {
  return (
    <section className='bg-Secondary dark:bg-DarkSecondary w-full px-4 md:pl-36 pt-16 md:pt-8'>
      <h1 className="text-3xl text-Accent font-bold mb-4">Entrega</h1>
      <Location />
    </section>
  )
};

export default Deliver;