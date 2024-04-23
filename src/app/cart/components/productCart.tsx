'use client'
import Image from 'next/image'
import airpodsCart from '/projetosReact/pixel-market/src/app/assets/airpodsCart.png'
import { useState } from 'react'

export default function ProductCart() {
  const [count, setCount] = useState<number>(0)

  function addOneItem() {
    return setCount(count + 1)
  }

  function subOneItem() {
    if (count > 1) {
      return setCount(count - 1)
    } else {
      return setCount(count + 0)
    }
  }

  return (
    <div className="flex items-center justify-start mb-6 gap-10">
      <input type="radio" className="ml-4" />
      <Image src={airpodsCart} alt="airpods" className="w-20 lg:w-40 rounded-md" />

      <div className="flex-wrap">
        <div>
          <h1>AirPods-Max</h1>
          <p className="text-sm font-light">
            Apenas <strong className=" text-teal-600">12 itens</strong>{' '}
            restantes
          </p>
          <p className="text-sm font-light">Frete Grátis</p>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <button
            className="border shadow-md hover:bg-zinc-100 text-teal-600 rounded-full px-2 py-1 lg:px-4 lg:py-2 font-bold"
            onClick={addOneItem}
          >
            +
          </button>
          <input
            type="number"
            className="border shadow-md rounded-full pl-10 w-24 h-10"
            value={count}
          />
          <button
            className="border shadow-md hover:bg-zinc-100 text-teal-600 rounded-full px-2 py-1 lg:px-4 lg:py-2  font-bold"
            onClick={subOneItem}
          >
            -
          </button>

          <button className='bg-yellow-500 px-2 py-1 rounded-full text-xs shadow-md text-zinc-50'>Excluir</button>
        </div>
      </div>
    </div>
  )
}
