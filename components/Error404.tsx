import Image from "next/image";
import Link from "next/link";

export function Error404() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-5">
      <h1 className="text-5xl font-semibold mb-6">Error 404</h1>
      <h2 className="text-3xl mb-5">¡UPS! No se ha encontrado el producto que buscas</h2>
      <Image
        src="/images/error404.jpg"
        alt="Not found"
        width={400}
        height={250}
        className="rounded-lg shadow-light" 
      />
      <article className="text-center mt-8">
        <Link
          href="/"
          className="px-3 py-2 text-xl dark:bg-DarkPrimary bg-Primary rounded-lg hover:outline hover:outline-Accent transition"
        >
          Volver al inicio
        </Link>
      </article>
    </section>
  )
}
