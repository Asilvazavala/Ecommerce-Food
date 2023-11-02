import Cards from "@/components/Cards";
import Carousel from "@/components/Carousel";
import Dashboard from "@/components/Dashboard";
import Filters from "@/components/Filters";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <section className='bg-Secondary dark:bg-DarkSecondary w-full h-screen md:pl-28 '>
      {/* <main className='px-4 md:px-8'>
        <Header />
        <Carousel />
        <Filters />
        <Cards />
      </main>
      <footer>
        <Footer />
      </footer> */}
      <Dashboard />
    </section>
  )
}
