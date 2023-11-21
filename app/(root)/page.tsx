import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";

import Cards from "@/components/Cards";
import Carousel from "@/components/Carousel";
import Filters from "@/components/Filters";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sections from "@/components/Sections";

export default async function Home() {
  // const products = await getProducts({ isFeatured: true });
  const billboards = await getBillboard("77dd4a15-630b-483c-a86c-73603dddde9a");

  return (
    <section className='bg-Secondary dark:bg-DarkSecondary w-full h-screen md:pl-28 '>
      <main className='px-4 md:px-8 max-w-[1400px]'>
        <Header />
        <div className="flex gap-x-8">
          <Carousel data={billboards} />
          <Sections />
        </div>
        <Filters />
        {/* <Cards items={products} /> */}
        <Cards />
      </main>
      <footer>
        <Footer />
      </footer>
    </section>
  )
}
