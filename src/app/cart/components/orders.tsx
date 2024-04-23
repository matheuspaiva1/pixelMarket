import Image from 'next/image'
import info from '/projetosReact/pixel-market/src/app/assets/info_FILL0_wght400_GRAD0_opsz24.png'

export default function Orders(){
  return (
    <div className="border shadow-md p-4 mb-8">
      <Image src={info} alt="info" className="inline w-4"/>
      <span className="text-xs font-light ml-1 text-center">Para ganhar FRETE GRÁTIS é preciso ter um produto elegível</span>
      <h3 className="text-md mt-2">Subtotal (2 produtos): <strong>R$ 999,90</strong></h3>
      <button className="bg-zinc-50 text-teal-400 px-6 py-1 rounded-full mt-3 mb-4 shadow-md font-medium">
        Fechar pedido
      </button>
    </div>
  )
}