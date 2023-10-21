import Search from "./Search";

const Header: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-8">
      <main className="lg:col-span-8">
        <header className="pt-4 pb-6 flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
          <article className="text-white">
            <h1 className="text-3xl text-DarkPrimary dark:text-Primary">Arrachera Burger</h1>
            <p className="text-gray-500">21 Octubre del 2023</p>
          </article>

          <Search />
        </header>
      </main>
    </section>
  )
};

export default Header;