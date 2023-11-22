import MapDeliver from "@/components/MapDeliver";

const Entrega: React.FC = () => {
  return (
    <section className='bg-Secondary dark:bg-DarkSecondary w-full h-screen px-4 lg:pl-36 pt-16 md:pt-8'>
      <h1 className="text-3xl text-Accent font-bold mb-4">Entrega</h1>
      <MapDeliver />
    </section>
  )
};

export default Entrega;