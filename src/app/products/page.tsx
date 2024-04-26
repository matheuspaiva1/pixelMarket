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
  const {cartItems} = useContext(AppContext)

  return(
    <div className="lg:flex lg:items-center lg:justify-center lg:gap-24 ">
      
      {
        cartItems.map((item: { id: Key | null | undefined; }) => <DescriptionProduct key={item.id} data={item}/>)

      }

    </div>
  )
}