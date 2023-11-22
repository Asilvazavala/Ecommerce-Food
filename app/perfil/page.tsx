import ToggleTheme from "@/helpers/ToggleTheme";

const Perfil: React.FC = () => {
  return (
    <section className='bg-Secondary dark:bg-DarkSecondary w-full h-screen px-4 
    flex items-center flex-col md:pl-36 pt-16 md:pt-6 md:items-start'>
      <h1 className="text-3xl text-Accent font-bold mb-4">Perfil</h1>
      <form className="flex flex-col gap-4 w-full md:w-[30rem] pb-4 border-b border-gray-500">
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
          className="mt-2 w-full px-4 hover:outline
        hover:outline-Accent transition py-2 bg-Primary dark:bg-DarkPrimary 
          rounded-full text-lg">
          Guardar cambios
        </button>
      </form>
      <ToggleTheme />
    </section>
  )
};

export default Perfil;