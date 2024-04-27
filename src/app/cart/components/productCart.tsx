/* eslint-disable @next/next/no-img-element */
'use client'
import { useContext, useState } from 'react'
import { BsCartDashFill } from 'react-icons/bs'
import AppContext from '@/app/contexts/appContext'
import currencyPrice from '@/app/utils/currencyPrice'
import Link from 'next/link'

interface DataPropsTypes {
  data: any
}

export default function ProductCart({ data }: DataPropsTypes) {
  const [count, setCount] = useState<number>(0)

  const { title, thumbnail, price, id } = data

  const { cartItems, setCartItems, addProducts, setAddProducts } =
    useContext(AppContext)

  const handleAddProducts = () => setAddProducts([...addProducts, data])

  const handleRemoveItem = () => {
    const updateItems = cartItems.filter((item: { id: any }) => item.id !== id)
    setCartItems(updateItems)
  }

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
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="produto"
        className="w-20 lg:w-40 rounded-md"
      />

      <div className="flex-wrap">
        <div>
          <h1 className="lg:text-2xl font-bold text-zinc-800">{title}</h1>
          <p className="text-sm font-light">{currencyPrice(price, 'BRL')}</p>
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

          <button
            type="button"
            className="border  shadow-md p-2 rounded-full hover:bg-zinc-50"
            onClick={handleRemoveItem}
          >
            <BsCartDashFill className="text-red-500" />
          </button>
        </div>
        <Link href="/products">
          <button
            type="button"
            className="border shadow-md p-2 rounded-full bg-teal-600 text-zinc-50 hover:bg-teal-500 font-semibold mt-4"
            onClick={handleAddProducts}
          >
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  )
}
