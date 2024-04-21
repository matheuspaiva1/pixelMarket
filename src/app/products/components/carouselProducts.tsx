"use client"
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import EmblaCarousel, { EmblaCarouselType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import airpodsRosa from "/projetosReact/pixel-market/src/app/assets/airpods.png"
import airpodsAzul from "/projetosReact/pixel-market/src/app/assets/airpods-azul.png"
import airpodsPreto from "/projetosReact/pixel-market/src/app/assets/airpods preto.jpg"


export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <Image src={airpodsRosa} alt="air rosa"/>
        </div>
        <div className="embla__slide">
        <Image src={airpodsAzul} alt="air azul" className="w-64"/>
        </div>
        <div className="embla__slide">
        <Image src={airpodsPreto} alt="air preto" className="w-64"/>
        </div>
      </div>
    </div>
  )
}
