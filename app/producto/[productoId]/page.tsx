'use client'

import { Error404 } from "@/components/Error404";
import  Product  from "@/components/Product";
import { useParams } from "next/navigation";
import db from '../../../api/data.json';
import { useFoods } from '../../../hooks/FoodContext';

export default function Page() {
  const router = useParams();
  const productoId = router.productoId;

  const { currentFoodData } = useFoods();

  const filteredPage = currentFoodData.find((product) => product.id === (productoId));

  const relatedProducts = filteredPage?.category.name === 'Bebidas'
    ? currentFoodData.filter((product) => product.category.name === 'Hamburguesas')
    : currentFoodData.filter((product) => product.category.name === 'Bebidas')

  const suggestedProductsSliced = relatedProducts.slice(0, 4);
  
  return (
    <>
      {filteredPage
        ? <Product producto={filteredPage} suggestedProductsSliced={suggestedProductsSliced} /> 
        : <Error404 />
      }
    </>
  )
}