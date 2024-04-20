import logo from "/projetosReact/pixel-market/src/app/assets/carrinho-de-compras.png"
import account from "/projetosReact/pixel-market/src/app/assets/person_FILL0_wght400_GRAD0_opsz24.png"
import carr from "/projetosReact/pixel-market/src/app/assets/shopping_cart_FILL0_wght400_GRAD0_opsz24.png"
import search from "/projetosReact/pixel-market/src/app/assets/search_FILL0_wght400_GRAD0_opsz24.png"
import Image from "next/image"



export default function Header() {
  return (
    <div className="text-zinc-700 ">
      <nav className="flex items-center justify-center gap-16 my-4">
        <div className="flex items-center gap-2">
          <Image src={logo} alt={"logo"} className="w-10"/>
          <h1 className="text-2xl font-bold text-teal-600">PixelMarket</h1>
        </div>
        <select className="font-medium" name="select" value="categorias">
          <option value="Categorias" selected>Categorias</option>
        </select>
        <a href="" className="font-medium">Ofertas</a>
        <a href="" className="font-medium">Novidades</a>
        <a href="" className="font-medium">Delivery</a>

        <div className="flex items-center gap-5">
          <div className="inline-block items-center relative">
            <Image src={search} alt={"lupa"} className="absolute translate-x-56"/> <input type="text" placeholder="Pesquisar Produtos" className="w-64 px-4 bg-zinc-50 border-1 rounded-3xl" />
          </div>
          <div className="">
            <a href="" className="font-semibold flex items-center"> <Image src={account} alt={"conta"}/> Conta </a>
          </div>
          <div className="flex items-center">
            <a href="" className="font-semibold flex items-center"> <Image src={carr} alt={"carrinho"}/> Carrinho </a>
          </div>
        </div>
      </nav>
    </div>
  )
}