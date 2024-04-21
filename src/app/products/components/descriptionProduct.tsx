import avaliacao from "/projetosReact/pixel-market/src/app/assets/avaliacao.png"
import truck from "/projetosReact/pixel-market/src/app/assets/local_shipping_FILL0_wght400_GRAD0_opsz24.png"
import pack from "/projetosReact/pixel-market/src/app/assets/inventory_2_FILL0_wght400_GRAD0_opsz24.png"
import Image from "next/image"

export default function DescriptionProduct(){
  return (
    <div>
      <div className="mb-20">
        <h1 className="text-3xl font-bold text-zinc-700">Airpods-Max</h1>
        <p className="text-sm font-light text-zinc-700">Um perfeito equilibrio entre uma alta  qualidade de som e um design magico da linha   Airpod</p>
        <Image src={avaliacao} alt="avaliação" className="w-20"/>
      </div>

      <div className="mb-4">
        <h1 className="text-xl font-bold text-teal-900">$549.00 ou 99.99/Mês</h1>
        <p className="text-sm font-light text-zinc-700">Pagamento realizado com 6 meses no cartão</p>
      </div>

      <h3 className="text-md font-bold text-zinc-800">Escolha a Cor</h3>
      <div className="flex items-center gap-4 mb-4">
        <input type="radio" checked /> Rosa
        <input type="radio"/> Azul
        <input type="radio"/> Preto
      </div>

      <div className="flex items-center gap-4 mb-8">
        <input type="number" className="border shadow-md rounded-full px-4 w-24"/> 
        <p className="text-sm font-light">Apenas <strong className=" text-teal-600">12 itens</strong> restantes</p>
      </div>

      <div className="gap-8">
        <a href=""><button className="bg-teal-600 border hover:bg-teal-700 text-zinc-100 rounded-full p-4 shadow-md font-bold mr-4">Compre Agora</button></a> 
        <a href=""><button className="border shadow-md border-spacing-4 hover:bg-zinc-100 text-teal-600 rounded-full p-4 font-bold">Adicione ao carrinho</button></a>
      </div>



      <div className="flex items-center gap-2 mt-8">
        <Image src={truck} alt="truck"/>
        <strong className="text-sm font-light text-zinc-950">Entrega Grátis</strong>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <Image src={pack} alt="pack"/>
        <strong className="text-sm font-light text-zinc-950">Retorno de Entrega</strong>
      </div>
    </div>
  )
}
