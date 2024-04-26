/* eslint-disable @next/next/no-img-element */
"use client"
import Image from 'next/image'
import airpods from '/projetosReact/pixel-market/src/app/assets/airpods.png'
import { MdFavorite } from "react-icons/md";
import Link from 'next/link'
import { FaCartPlus } from 'react-icons/fa'
import { ReactNode, useContext } from 'react';
import currencyPrice  from "@/app/utils/currencyPrice";
import AppContext from '../contexts/appContext';

interface DataPropsTypes{
  data: any;
}

export default function CardSearch({data}: DataPropsTypes) {
  const {thumbnail, title, price} = data;

  const {cartItems, setCartItems} = useContext(AppContext)
  
  const handleAddCart = () => setCartItems([...cartItems, data])
  
  return (
    <div className="mb-4">
      
        <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="aipods" className="lg:w-60 w-40 border" />
        <div className="flex gap-6 lg:gap-20">
          <h1 className="lg:text-base text-xs font-bold text-gray-800 w-64">
            {title}
          </h1>
        </div>
      
      <p className="text-xs w-44">Perfeito para quem gosta de curtir um som</p>
      <h2 className="text-sm font-semibold text-red-600">{currencyPrice(price, 'BRL')}</h2>
      <div className="flex items-center gap-2 lg:gap-4">
        <button
          type="button"
          className="border  shadow-md p-2 rounded-full hover:bg-zinc-50"
          onClick={handleAddCart}
        >
          <FaCartPlus className='text-yellow-500'/>
        </button>
        <button
          type="button"
          className="border shadow-md p-2 rounded-full hover:bg-zinc-50"
        >
          <MdFavorite className='text-teal-600' />
        </button>{' '}
      </div>
    </div>
  )
}
