"use client"
import { Key, useContext } from "react";
import DescriptionProduct from "./components/descriptionProduct";
import AppContext from "../contexts/appContext";

export default function Products(){
  const {addProducts} = useContext(AppContext)

  return(
    <div className="">
      
      {
        addProducts.map((item: { id: Key | null | undefined; }) => <DescriptionProduct key={item.id} data={item}/>)
      }

    </div>
  )
}