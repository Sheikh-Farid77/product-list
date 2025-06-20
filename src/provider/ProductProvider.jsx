import { useContext, useState } from "react";
import { ProductContext } from "../context";
import useData from "../hooks/useData";

export default function ProductProvider({ children }) {
  const { data, loading, error } = useData(
    "https://fakestoreapi.in/api/products?limit=20"
  );
  const [sortValue, setSortValue] = useState('');
  const handleSort = (a, b) => {
    if(sortValue === 'asc'){
      return a.price - b.price
    }else if (sortValue === 'desc'){
      return b.price - a.price
    }

  }

  const state = {
    data,
    loading,
    error,
    setSortValue,
    handleSort
  };
  return (
    <ProductContext.Provider value={state}>{children}</ProductContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProducts() {
  return useContext(ProductContext);
}
