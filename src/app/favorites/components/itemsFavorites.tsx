/* eslint-disable @next/next/no-img-element */
'use client'
import Image from 'next/image'
import airpodsCart from '/projetosReact/pixel-market/src/app/assets/airpodsCart.png'
import { FaCartPlus } from "react-icons/fa";
import { FaHeartCircleMinus } from "react-icons/fa6";
import currencyPrice from '@/app/utils/currencyPrice';
import { useContext } from 'react';
import AppContext from '@/app/contexts/appContext';

interface dataPropTypes{
  data: any;
}

export default function ItemsFavorites({data}: dataPropTypes) {
  const {thumbnail, title, price, id} = data;

  const {favoriteItems, setFavoriteItems, cartItems, setCartItems} = useContext(AppContext)

  const handleAddCart = () => setCartItems([...cartItems, data])

  const handleRemoveFavorite = () => {
    const updateFavoriteItems = favoriteItems.filter((fav: { id: any; }) => fav.id !== id)
    setFavoriteItems(updateFavoriteItems)
  }

  return (
    <div className="flex items-center justify-start mb-6 gap-10">
      <img src={thumbnail} alt="airpods" className="w-20 lg:w-40 rounded-md ml-8" />

      <div className="flex-wrap">
        <div>
          <h1 className='lg:text-2xl font-bold text-zinc-800'>{title}</h1>
          <p className="text-sm font-light">
            {currencyPrice(price, 'BRL')}
          </p>
          <p className="text-sm font-light">Frete Grátis</p>
        </div>

        <div className="mt-4 flex items-center gap-6">
          <button 
          type="button" 
          className="border  shadow-md p-2 rounded-full hover:bg-zinc-50" 
          onClick={handleAddCart}>
            <FaCartPlus />
          </button>

          <button 
          type="button" 
          className="border shadow-md p-2 rounded-full hover:bg-zinc-50" 
          onClick={handleRemoveFavorite}>
            <FaHeartCircleMinus />
          </button>
        </div>
      </div>
    </div>
  )
}
