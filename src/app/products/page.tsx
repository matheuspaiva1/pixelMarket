import { useEffect } from "react";
import { Carousel } from "./components/carouselProducts";
import DescriptionDelivery from "./components/descriptionDelivery";
import DescriptionProduct from "./components/descriptionProduct";
import Sales from "./components/sales";
import useEmblaCarousel from "embla-carousel-react";




export default function Products(){

  const images = [
    "",
  ]

  return(
    <div>
      <h1>Page Products</h1>

      <Carousel>
        
      </Carousel>
      <DescriptionProduct/>

      <Sales/>

      <DescriptionDelivery/>
    </div>
  )
}