"use client"
import { Key, useContext } from "react";
import Carousel  from "./components/carouselProducts";
import DescriptionDelivery from "./components/descriptionDelivery";
import DescriptionProduct from "./components/descriptionProduct";
import Sales from "./components/sales";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
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