"use client"
import { createContext } from "react";

interface ProviderContextType {
  products: any;
  setProducts: React.Dispatch<React.SetStateAction<any>>;
  cartItems: any;
  setCartItems: React.Dispatch<React.SetStateAction<any>>;
}

const AppContext = createContext<ProviderContextType | any>(undefined);

export default AppContext
