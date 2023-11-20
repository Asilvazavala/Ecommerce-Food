'use client'

import { Error404 } from "@/components/Error404";
import  Product  from "@/components/Product";
import { useParams } from "next/navigation";
import db from '../../../api/data.json';

export default function Page() {
  const router = useParams();
  const productoId = router.productoId;

  const filteredPage = db.find((product) => product.id === Number(productoId));
  const relatedProducts = db.filter((product) => product.categoria === filteredPage?.categoria &&
  product.id !== filteredPage?.id);
  const relatedProductsSliced = relatedProducts.slice(0, 4)
  
  return (
    <>
      {filteredPage
        ? <Product producto={filteredPage} relatedProducts={relatedProductsSliced} /> 
        : <Error404 />
      }
    </>
  )
}