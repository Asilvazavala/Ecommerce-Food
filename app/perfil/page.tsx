"use client";

import ToggleTheme from "@/helpers/ToggleTheme";
import toast from "react-hot-toast";

const Perfil = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Datos guardados correctamente 😀");
  }
  
  return (
    <section className='bg-Secondary dark:bg-DarkSecondary w-full px-4 
    flex items-center flex-col md:pl-36 pt-12 md:pt-6 md:items-start'>
      <h1 className="text-3xl text-Accent font-bold mb-6">Perfil</h1>
      <h2 className="border-b border-gray-500 text-gray-500 text-xl w-full md:w-[30rem] mb-4">Datos</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full md:w-[30rem] pb-4 text-sm">
        <article className="flex justify-between items-center gap-2">
          <label htmlFor="nombre">Nombre(s)</label>
          <input 
            id="nombre" 
            type="text" 
            placeholder="Requerido"
            className="p-2 rounded-sm md:w-72 text-black"
          />
        </article>

        <article className="flex justify-between items-center gap-2">
          <label htmlFor="apellido">Apellidos</label>
          <input 
            id="apellido" 
            type="text" 
            placeholder="Requerido"
            className="p-2 rounded-sm md:w-72 text-black"
          />
        </article>
        <article className="flex justify-between items-center gap-2">
          <label htmlFor="email">Correo eléctronico</label>
          <input 
            id="email" 
            type="email" 
            placeholder="Requerido"
            className="p-2 rounded-sm md:w-72 text-black"
          />
        </article>

        <article className="flex justify-between items-center gap-2">
          <label htmlFor="confirmEmail">Confirmar correo</label>
          <input 
            id="confirmEmail" 
            type="email" 
            placeholder="Requerido"
            className="p-2 rounded-sm md:w-72 text-black"
          />
        </article>

        <article className="flex justify-between items-center gap-2">
          <label htmlFor="phone">Teléfono / Celular</label>
          <input 
            id="phone" 
            type="tel" 
            placeholder="Requerido"
            className="p-2 rounded-sm md:w-72 text-black"
          />
        </article>
        <button 
          type="submit"
          className="mt-2 w-full px-4 hover:outline
        hover:outline-Accent transition py-2 bg-Primary dark:bg-DarkPrimary 
          rounded-full text-lg">
          Guardar cambios
        </button>
      </form>
      <h2 className="border-b border-gray-500 text-gray-500 text-xl w-full md:w-[30rem] mt-6 mb-2">Configuración</h2>
      <ToggleTheme />
    </section>
  )
};

export default Perfil;