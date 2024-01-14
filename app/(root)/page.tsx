import Cards from "@/components/Cards";
import Carousel from "@/components/Carousel";
import Filters from "@/components/Filters";
import Header from "@/components/Header";

export default function Home() {
  return (
    <section className='bg-Secondary dark:bg-DarkSecondary w-full md:pl-28 '>
      <main className='px-4 md:px-8 w-full'>
        <Header />
        <Carousel />
        <Filters />
        <Cards /> 
      </main>
    </section>
  )
}
