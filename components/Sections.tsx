"use client";

import { useFoods } from "@/hooks/FoodContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Sections = () => {
  const { setCurrentFilter } = useFoods();
  const router = useRouter();

  const handleSection = (filter: string) => {
    setCurrentFilter(filter);
    router.push('#cardsTitle');
  };

  return (
    <main className="hidden lg:grid grid-cols-4 grid-rows-6 gap-4 max-h-[450px] max-w-[600px] w-full">
      {/* Sección 1 */}
      <section 
        onClick={() => handleSection("Hamburguesas")}
        className="col-span-2 row-span-4 group dark:bg-DarkPrimary bg-Primary rounded flex justify-center items-center relative cursor-pointer">
        <Image 
          src="/images/Secciones/hamburguesa-secciones.webp"
          alt="Hamburguesas"
          title="Hamburguesas"
          width={100}
          height={100}
          className="w-[9.4rem] h-[10.6rem] object-cover rounded group-hover:scale-175 transition duration-3000"
        />
        <h3 className="absolute bottom-7 font-semibold text-xl tracking-wider">HAMBURGUESAS</h3>
      </section>

      {/* Sección 2 */}
      <section 
        onClick={() => handleSection("Bebidas")}
        className="col-span-2 row-span-2 group dark:bg-DarkPrimary bg-Primary rounded flex justify-center items-center relative cursor-pointer">
        <Image 
          src="/images/Secciones/bebidas-secciones.jpg"
          alt="Bebidas"
          title="Bebidas"
          width={100}
          height={100}
          className="w-[9.2rem] h-[5rem] object-cover rounded group-hover:scale-175 transition duration-3000"
        />
        <h3 className="absolute bottom-7 font-semibold text-xl tracking-wider">BEBIDAS</h3>
      </section>

      {/* Sección 3 */}
      <section 
      onClick={() => handleSection("Snacks")}
      className="col-span-2 row-span-2 group dark:bg-DarkPrimary bg-Primary rounded flex justify-center items-center relative cursor-pointer">
      <Image 
        src="/images/Secciones/alitas-secciones.jpg"
        alt="Snacks"
        title="Snacks"
        width={100}
        height={100}
        className="w-[9.2rem] h-[5rem] object-cover rounded group-hover:scale-175 transition duration-3000"
      />
      <h3 className="absolute bottom-7 font-semibold text-xl tracking-wider">SNACKS</h3>
      </section>

      {/* Sección 4 */}
      <section onClick={() => handleSection("Paquetes")}
      className="col-span-4 row-span-2 group dark:bg-DarkPrimary bg-Primary rounded flex justify-center items-center relative cursor-pointer">
      <Image 
        src="/images/Secciones/paquetes-secciones.jpeg"
        alt="Paquetes"
        title="Paquetes"
        width={100}
        height={100}
        className="w-[18.8rem] h-[5rem] object-cover rounded group-hover:scale-175 transition duration-3000"
      />
      <h3 className="absolute bottom-7 font-semibold text-xl tracking-wider">PAQUETES</h3>
      </section>
    </main>
  )
};

export default Sections;