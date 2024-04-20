export default function ImageNav(){
  return (
    <div className="relative">
        <div className="absolute translate-x-24 translate-y-12">
          <h1 className="text-2xl font-bold text-gray-800 ">Ganhe até 50% de Desconto em <br/> HeadPhones selecionados</h1>
          <button className="bg-teal-600 hover:bg-teal-700 text-zinc-100 rounded-xl p-2 mt-4 font-bold">Compre Agora</button>  
        </div>
      <div className="flex justify-center">
        <img src="/assets/headphones.png" alt="headphones"/>
      </div>  
    </div>
  )
}