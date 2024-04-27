import localImage from "/projetosReact/pixel-market/src/app/assets/headphones.png"
import Image from "next/image";

export default function ImageNav(){
  return (
    <div className="relative">
        <div className="absolute translate-x-4 translate-y-2 lg:translate-x-24 lg:translate-y-12">
          <h1 className="lg:text-2xl text-xs font-bold text-gray-800 ">Ganhe até 50% de Desconto em <br/> produtos selecionados</h1>
          <button className="bg-teal-600 hover:bg-teal-700 text-zinc-100 rounded-xl p-1 lg:p-2 mt-3 lg:mt-4 text-xs lg:text-base font-bold">Compre Agora</button>  
        </div>
      <div className="flex justify-center">
        <Image src={localImage} alt={"imageNav"} />
      </div>  
    </div>
  )
}