// import getBillboard from "@/actions/get-billboards";
// import getProducts from "@/actions/get-products";

import Cards from "@/components/Cards";
import Carousel from "@/components/Carousel";
import Filters from "@/components/Filters";
import Header from "@/components/Header";

export default async function Home() {
  // const products = await getProducts({ isFeatured: true });
  // const billboards = await getBillboard("77dd4a15-630b-483c-a86c-73603dddde9a");
  {/* <Carousel data={billboards} /> */}
  {/* <Cards items={products} /> */}

  return (
    <section className='bg-Secondary dark:bg-DarkSecondary w-full md:pl-28 '>
      <main className='px-4 md:px-8 max-w-[1400px]'>
        <Header />
        <Carousel />
        <Filters />
        <Cards />
      </main>
    </section>
  )
}
