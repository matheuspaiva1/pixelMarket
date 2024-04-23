import Image from "next/image";
import airpods from "/projetosReact/pixel-market/src/app/assets/airpods.png"
import avaliacao from "/projetosReact/pixel-market/src/app/assets/avaliacao.png"
import favorite from "/projetosReact/pixel-market/src/app/assets/favorite_FILL0_wght400_GRAD0_opsz24.png"
import Link from "next/link";


export default function CardSearch (){
  return (
    <div className="mb-4">
      <Link href="/products">
        <Image src={airpods} alt="aipods" className="lg:w-60 w-40 border" />
        <div className="flex gap-6 lg:gap-20">
          <h1 className="lg:text-md text-xs font-bold text-gray-800">AirPods Max</h1>
          <h2 className="text-xs font-bold text-gray-500">R$ 499,00</h2>
        </div>
      </Link>
      <p className="text-xs w-44">Perfeito para quem gosta de curtir um som</p>
      <Image src={avaliacao} alt="estrela" className="w-16" />
      <div className="flex items-center gap-2 lg:gap-16">
        <button className="lg:text-sm text-xs font-medium text-gray-600 border hover:bg-zinc-50 text-zinc-800 p-1 lg:p-1.5 rounded-3xl">
          Adicione ao Carrinho
        </button>
        <Image src={favorite} alt="coracao" />
      </div>
    </div>
  )
}