import { BsSearch } from "react-icons/bs";

const Search: React.FC = () => {
  return (
    <section className="text-DarkPrimary w-full">
      <form action="">
        <article className="relative">
          <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            className="bg-white w-full py-1 lg:py-2 pl-10 pr-4 rounded-sm lg:rounded-lg outline-none shadow-md" 
            placeholder="Buscar comida..."
          />
        </article>
      </form>
    </section>
  )
};

export default Search;