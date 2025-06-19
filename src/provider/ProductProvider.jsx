import { useContext } from "react";
import { ProductContext } from "../context";
import useData from "../hooks/useData";

export default function ProductProvider({ children }) {
  const { data, loading, error } = useData(
    "https://fakestoreapi.in/api/products?limit=20"
  );

  const state = {
    data,
    loading,
    error,
  };
  return (
    <ProductContext.Provider value={state}>{children}</ProductContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProducts() {
  return useContext(ProductContext);
}
