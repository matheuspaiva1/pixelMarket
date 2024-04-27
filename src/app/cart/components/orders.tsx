"use client"
import Image from 'next/image'
import info from '/assets/info_FILL0_wght400_GRAD0_opsz24.png'
import { useContext } from 'react';
import AppContext from '@/app/contexts/appContext';
import currencyPrice  from "@/app/utils/currencyPrice";

export default function Orders(){

  const {cartItems} = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc: any, item: { price: any; }) => item.price + acc, 0)

  function alertMessage(){
    return alert('Pedido feito')
  }
  
  return (
    <div className="border shadow-md p-4 mb-8">
      <div className="flex items-center gap-1">
        <Image src={info} alt="info" className="inline lg:w-6 w-4"/>
        <span className="text-xs font-light text-center lg:text-xl">Para ganhar FRETE GRÁTIS é preciso ter um produto elegível</span>
      </div>
      <h3 className="text-md mt-2 lg:text-xl">Subtotal ({cartItems.length} produtos): <strong>{currencyPrice(totalPrice, 'BRL')}</strong></h3>
      <button 
      className="bg-zinc-50 text-teal-400 px-6 lg:px8 lg:py-2 py-1 rounded-full mt-3 mb-4 shadow-md font-medium"
      onClick={alertMessage}>
        Fechar pedido
      </button>
    </div>
  )
}