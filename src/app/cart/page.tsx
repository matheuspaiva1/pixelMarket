"use client"
import { Key, useContext } from "react";
import Orders from "./components/orders";
import ProductCart from "./components/productCart";
import AppContext from "../contexts/appContext";



export default function Cart(){
  const {cartItems} = useContext(AppContext)

  return (
    <div>
      <Orders/>

      {
        cartItems.map((item: { id: Key | null | undefined; }) => <ProductCart key={item.id} data={item}/>)
      }
      

    </div>
  );
};