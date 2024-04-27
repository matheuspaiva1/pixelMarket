/* eslint-disable @next/next/no-img-element */
'use client'
import avaliacao from '/projetosReact/pixel-market/src/app/assets/avaliacao.png'
import truck from '/projetosReact/pixel-market/src/app/assets/local_shipping_FILL0_wght400_GRAD0_opsz24.png'
import pack from '/projetosReact/pixel-market/src/app/assets/inventory_2_FILL0_wght400_GRAD0_opsz24.png'
import Image from 'next/image'
import { useContext, useState } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { MdFavorite } from 'react-icons/md'
import currencyPrice from '@/app/utils/currencyPrice'
import AppContext from '@/app/contexts/appContext'

interface DataPropsTypes {
  data: any;
}

export default function DescriptionProduct({data}: DataPropsTypes) {
  const [count, setCount] = useState<number>(0)

  const {thumbnail, title, price} = data

  const {addProducts, setAddProducts} = useContext(AppContext)

  

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
    <div className="lg:flex lg:items-center lg:justify-center lg:gap-24">
      <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="produto" className='lg:w-64'/>
      <div className="ml-2 lg:ml-0">
        <div className="mb-10 lg:mb-20 ">
          <h1 className="text-3xl lg:w-96 font-bold text-zinc-700">{title}</h1>
          
        </div>

        <div className="mb-4">
          <h1 className="text-xl font-bold text-teal-900">
            {currencyPrice(price, 'BRL')}
          </h1>
          <p className="text-sm font-light text-zinc-700">
            Pagamento realizado com 6 meses no cartão
          </p>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <button
              className="border shadow-md hover:bg-zinc-100 text-teal-600 rounded-full px-4 py-2 font-bold"
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
              className="border shadow-md hover:bg-zinc-100 text-teal-600 rounded-full px-4 py-2  font-bold"
              onClick={subOneItem}
            >
              -
            </button>
          </div>
          
        </div>

        <div className="gap-10 flex items-center lg:gap-8">
          <a href="">
            <button className="bg-teal-600 border hover:bg-teal-700 text-zinc-100 rounded-full p-4 shadow-md font-bold mr-4">
              Compre Agora
            </button>
          </a>
          <button
            type="button"
            className="border shadow-md p-2 rounded-full hover:bg-zinc-50"
          >
            <MdFavorite className="text-teal-600" />
          </button>{' '}
        </div>

        <div className="flex items-center gap-2 mt-8">
          <Image src={truck} alt="truck" />
          <strong className="text-sm font-light text-zinc-950">
            Entrega Grátis
          </strong>
        </div>

        <div className="flex items-center gap-2 mt-2 mb-10 lg:mb-0">
          <Image src={pack} alt="pack" />
          <strong className="text-sm font-light text-zinc-950">
            Retorno de Entrega
          </strong>
        </div>
      </div>
    </div>
  )
}
