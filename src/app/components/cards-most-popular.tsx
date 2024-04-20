export default function CardsMostPopular(){
  return (
    <div className="">
      <img src="/assets/Design sem nome (1).png" alt="airpods" className="w-60 border rounded-md" />
      <div className="flex gap-20">
        <h1 className="text-md font-bold text-gray-800">AirPods Max</h1>
        <h2 className="text-sm font-medium text-gray-600">R$ 499,00</h2>
      </div>
      <p className="text-xs">Perfeito para quem gosta de curtir um som</p>
      <img src="/assets/avaliacao.png" alt="estrelas" className="w-16 " />
      <div className="flex items-center gap-16">
        <button className="text-sm font-medium text-gray-600 border hover:bg-zinc-50 text-zinc-800 p-1.5 rounded-3xl">Adicione ao Carrinho</button>
        <img src="/assets/favorite_FILL0_wght400_GRAD0_opsz24.png" alt="favorite" />
      </div>
    </div>
  )
}
