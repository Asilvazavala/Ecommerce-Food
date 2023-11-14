"use client";

import { useFoods } from "@/hooks/FoodContext";

interface ProductPageProps {
  params: {
    productId: string;
  }
}

const ProductPage: React.FC<ProductPageProps> = ({
  params
}) => {
  const { currentFoodData, search, currentFilter } = useFoods();

  return (
    <section className="ml-28">
      Hola
    </section>
  )
};

export default ProductPage;