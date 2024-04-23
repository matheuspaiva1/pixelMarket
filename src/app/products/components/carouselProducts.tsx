"use client"
import React, { Component  } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image'
import airpodsRosa from "/projetosReact/pixel-market/src/app/assets/airpods.png"
import airpodsAzul from "/projetosReact/pixel-market/src/app/assets/airpods-azul.png"
import airpodsPreto from "/projetosReact/pixel-market/src/app/assets/airpods preto.jpg"

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container ">
      <Slider {...settings} className='w-60 mb-10 ml-20 lg:mb-0 lg:w-96'>
          <Image src={airpodsRosa} alt="airpodsRosa" />
          <Image src={airpodsAzul} alt="airpodsAzul"/>
          <Image src={airpodsPreto} alt="airpodsPreto"/>
      </Slider>
    </div>
  );
}

export default SimpleSlider;