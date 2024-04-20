import Image from "next/image";
import perguntas from "/projetosReact/pixel-market/src/app/assets/perguntas.jpg"

export default function CardsHelp() {
  return (
    <div className="hover:shadow-2xl">
      <div className="bg-zinc-100 w-96 p-8 rounded-t-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Perguntas frequentes</h2>
        <p>Atualizações sobre compras seguras em nossos stories!</p>
      </div>
      <Image src={perguntas} alt="perguntas" className="w-96 h-96 rounded-b-lg"/>
    </div>
  )
}