import { useEffect } from "react";
import Carousel  from "./components/carouselProducts";
import DescriptionDelivery from "./components/descriptionDelivery";
import DescriptionProduct from "./components/descriptionProduct";
import Sales from "./components/sales";
import useEmblaCarousel from "embla-carousel-react";




export default function Products(){

  return(
    <div className="lg:flex lg:items-center lg:justify-center lg:gap-24 ">


      <Carousel/>

      <DescriptionProduct/>

    </div>
  )
}