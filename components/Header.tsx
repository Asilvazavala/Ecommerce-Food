"use client";

import { formatedDate } from '../helpers/constants';

const Header: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-8 pt-16 md:pt-8">
      <main className="lg:col-span-8">
        <header className="pb-6 flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
          <article className="text-white text-center md:text-left">
            <h1 className="text-3xl text-Accent font-bold">Arrachera Burger</h1>
            <p className="text-gray-500">{formatedDate}</p>
          </article>
          
        </header>
      </main>
    </section>
  )
};

export default Header;