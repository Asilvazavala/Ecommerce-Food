import Cards from "@/components/Cards";
import Carousel from "@/components/Carousel";
import Filters from "@/components/Filters";
import Header from "@/components/Header";

export default function Home() {
  return (
    <section className='bg-Secondary dark:bg-DarkSecondary w-full h-screen px-4 md:pl-36'>
      <Header />
      <Carousel />
      <Filters />
      <Cards />
    </section>
  )
}
