'use client'
import Image from 'next/image'
import airpodsCart from '/projetosReact/pixel-market/src/app/assets/airpodsCart.png'
import { FaCartPlus } from "react-icons/fa";
import { FaHeartCircleMinus } from "react-icons/fa6";



export default function ItemsFavorites() {
  return (
    <div className="flex items-center justify-start mb-6 gap-10">
      <Image src={airpodsCart} alt="airpods" className="w-20 lg:w-40 rounded-md ml-8" />

      <div className="flex-wrap">
        <div>
          <h1 className='lg:text-2xl font-bold text-zinc-800'>AirPods-Max</h1>
          <p className="text-sm font-light">
            Apenas <strong className=" text-teal-600">12 itens</strong>{' '}
            restantes
          </p>
          <p className="text-sm font-light">Frete Grátis</p>
        </div>

        <div className="mt-4 flex items-center gap-6">
          <button type="button" className="border  shadow-md p-2 rounded-full hover:bg-zinc-50">
            <FaCartPlus />
          </button>

          <button type="button" className="border shadow-md p-2 rounded-full hover:bg-zinc-50">
            <FaHeartCircleMinus />
          </button>
        </div>
      </div>
    </div>
  )
}
