import Image from 'next/image'
import airpods from '/projetosReact/pixel-market/src/app/assets/airpods.png'
import { MdFavorite } from "react-icons/md";
import Link from 'next/link'
import { FaCartPlus } from 'react-icons/fa'

export default function CardSearch() {
  return (
    <div className="mb-4">
      <Link href="/products">
        <Image src={airpods} alt="aipods" className="lg:w-60 w-40 border" />
        <div className="flex gap-6 lg:gap-20">
          <h1 className="lg:text-base text-xs font-bold text-gray-800">
            AirPods Max
          </h1>
          <h2 className="text-xs font-bold text-gray-500">R$ 499,00</h2>
        </div>
      </Link>
      <p className="text-xs w-44">Perfeito para quem gosta de curtir um som</p>
      <div className="flex items-center gap-2 lg:gap-4">
        <button
          type="button"
          className="border  shadow-md p-2 rounded-full hover:bg-zinc-50"
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
