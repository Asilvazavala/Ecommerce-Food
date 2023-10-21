import GridCards from "./GridCards";

const Cards: React.FC = () => {
  return (
    <section>
      <header className="mt-8 flex items-center justify-between">
        <h2 className="text-xl text-DarkPrimary dark:text-Primary">Elige tu hamburguesa</h2>
        <button className="flex items-center gap-4 text-DarkPrimary dark:text-Primary py-2 px-4 bg-Primary dark:bg-DarkPrimary rounded-lg shadow-md hover:text-Primary hover:bg-Accent hover:dark:bg-Accent transition-colors">
          Realizar pedido
        </button>
      </header>

      <main>
        <GridCards />
      </main>
    </section>
  )
};

export default Cards;