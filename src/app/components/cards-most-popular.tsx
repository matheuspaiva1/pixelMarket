import Image from "next/image";
import airpods from "/projetosReact/pixel-market/src/app/assets/airpods.png"
import avaliacao from "/projetosReact/pixel-market/src/app/assets/avaliacao.png"
import favorite from "/projetosReact/pixel-market/src/app/assets/favorite_FILL0_wght400_GRAD0_opsz24.png"


export default function CardsMostPopular(){
  return (
    <div className="">
      <Image src={airpods} alt="popular" className="w-60 border rounded-md"/>
      <div className="flex gap-20">
        <h1 className="text-md font-bold text-gray-800">AirPods Max</h1>
        <h2 className="text-sm font-medium text-gray-600">R$ 499,00</h2>
      </div>
      <p className="text-xs">Perfeito para quem gosta de curtir um som</p>
      <Image src={avaliacao} alt="estrela" className="w-16" />
      <div className="flex items-center gap-16">
        <button className="text-sm font-medium text-gray-600 border hover:bg-zinc-50 text-zinc-800 p-1.5 rounded-3xl">Adicione ao Carrinho</button>
        <Image src={favorite} alt="coracao"/>
      </div>
    </div>
  )
}
