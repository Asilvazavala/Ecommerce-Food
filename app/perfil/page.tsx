import ToggleTheme from "@/helpers/ToggleTheme";

const Perfil: React.FC = () => {
  return (
    <section className='bg-Secondary dark:bg-DarkSecondary w-full h-screen px-4 
    flex items-center flex-col md:pl-36 pt-20 md:pt-6 md:items-start'>
      <h1 className="text-3xl text-Accent font-bold">Perfil</h1>
      <ToggleTheme />
    </section>
  )
};

export default Perfil;