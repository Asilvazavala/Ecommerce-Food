"use client"

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { APIArracheraBurger } from '../types/types';
import db from '../api/data.json';

// Define el tipo para el contexto
type FoodContextType = {
  currentFoodData: APIArracheraBurger[];
  setCurrentFoodData: React.Dispatch<React.SetStateAction<APIArracheraBurger[]>>;
  currentFilter: string | null;
  setCurrentFilter: React.Dispatch<React.SetStateAction<string | null>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  detailsFood: APIArracheraBurger | undefined;
  setDetailsFood: React.Dispatch<React.SetStateAction<APIArracheraBurger | undefined>>;
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
};

export function FoodProvider({ children }: FoodProviderProps) {
  const [currentFoodData, setCurrentFoodData] = useState<APIArracheraBurger[]>([]);
  const [currentFilter, setCurrentFilter] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");
  const [detailsFood, setDetailsFood] = useState<APIArracheraBurger | undefined>();
  const [isDarkMode, setIsDarkMode] = useState(true);

  const data: APIArracheraBurger[] = db as APIArracheraBurger[];

  useEffect(() => {
    const filtered = currentFilter === null
      ? data.filter((food) => food.nombre.toLowerCase().includes(search.toLowerCase()))
      : data.filter((food) =>
          food.categoria === currentFilter &&
          food.nombre.toLowerCase().includes(search.toLowerCase())
        );
  
        setCurrentFoodData(filtered);
  }, [currentFilter, search, data]);

  const value: FoodContextType = {
    currentFoodData,
    setCurrentFoodData,
    currentFilter,
    setCurrentFilter,
    search,
    setSearch,
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
