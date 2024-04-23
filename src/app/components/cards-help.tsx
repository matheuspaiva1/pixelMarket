import Image from "next/image";
import perguntas from "/projetosReact/pixel-market/src/app/assets/perguntas.jpg"

export default function CardsHelp() {
  return (
    <div className="hover:shadow-2xl">
      <div className="bg-zinc-100 w-24 h-40 lg:w-96 p-4 lg:p-8 rounded-t-lg">
        <h2 className="lg:text-xl text-xs font-bold text-gray-800 lg:mb-2">Perguntas frequentes</h2>
        <p className="text-xs lg:text-base">Atualizações sobre compras seguras em nossos stories!</p>
      </div>
      <Image src={perguntas} alt="perguntas" className="w-24 h-32 lg:w-96 lg:h-96 rounded-b-lg"/>
    </div>
  )
}