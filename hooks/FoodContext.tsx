"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Product } from '../types/types';

// Define el tipo para el contexto
type FoodContextType = {
  currentFoodData: Product[];
  setCurrentFoodData: React.Dispatch<React.SetStateAction<Product[]>>;
  currentFilter: string | null;
  setCurrentFilter: React.Dispatch<React.SetStateAction<string | null>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  searchResults: Product[];
  setSearchResults: React.Dispatch<React.SetStateAction<Product[]>>;
  detailsFood: Product | undefined;
  setDetailsFood: React.Dispatch<React.SetStateAction<Product | undefined>>;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

// Crea el contexto
const FoodContext = createContext<FoodContextType | undefined>(undefined);

// Hook personalizado para acceder al contexto
export function useFoods () {
  const context = useContext(FoodContext);
  if (context === undefined) {
    throw new Error('useFoods debe ser utilizado dentro de un CountriesProvider');
  }
  return context;
}

// Proveedor de contexto
type FoodProviderProps = {
  children: ReactNode;
  initialProducts: Product[];
};

export function FoodProvider({ children, initialProducts }: FoodProviderProps) {
  const [currentFoodData, setCurrentFoodData] = useState<Product[]>([]);
  const [currentFilter, setCurrentFilter] = useState<string | null>('Hamburguesas');
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [detailsFood, setDetailsFood] = useState<Product | undefined>();
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const onFilter = initialProducts.filter((food) => food.category.name === currentFilter);
    const onSearch = search !== ''
      ? initialProducts.filter((food) => food.name.toLowerCase().includes(search.toLowerCase()))
      : [];

    setCurrentFoodData(onFilter);
    setSearchResults(onSearch);

  }, [currentFilter, search, initialProducts]);

  const value: FoodContextType = {
    currentFoodData,
    setCurrentFoodData,
    currentFilter,
    setCurrentFilter,
    search,
    setSearch,
    searchResults,
    setSearchResults,
    detailsFood,
    setDetailsFood,
    isDarkMode,
    setIsDarkMode
  };

  return (
    <FoodContext.Provider value={value}>
      {children}
    </FoodContext.Provider>
  );
}
