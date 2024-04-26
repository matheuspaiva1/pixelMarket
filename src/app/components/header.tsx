import logo from '/projetosReact/pixel-market/src/app/assets/carrinho-de-compras.png'
import avaliable from '/projetosReact/pixel-market/src/app/assets/favorite_FILL0_wght400_GRAD0_opsz24.png'
import carr from '/projetosReact/pixel-market/src/app/assets/shopping_cart_FILL0_wght400_GRAD0_opsz24.png'
import search from '/projetosReact/pixel-market/src/app/assets/search_FILL0_wght400_GRAD0_opsz24.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="text-zinc-700">
      <nav className="lg:flex sm:inline-block items-center justify-center lg:gap-16  lg:my-4">
        <Link href="/">
          <div className="flex sm:flex items-center gap-3 m-4">
            <Image src={logo} alt={'logo'} className="w-10" />
            <h1 className="text-2xl font-bold text-teal-600">PixelMarket</h1>
          </div>
        </Link>
        <div
        className="flex items-center gap-14 mb-4 text-xs lg:flex lg:items-center lg:gap-9 lg:justify-center lg:text-base
        lg:mb-0 sm:gap-8"
        >
          <select className="font-medium " name="select" value="categorias">
            <option value="Categorias" selected>
              Categorias
            </option>
          </select>
          <a href="" className="font-medium">
            Quem Somos
          </a>
          <a href="" className="font-medium">
            Parceiros
          </a>
          <a href="" className="font-medium">
            Delivery
          </a>
        </div>
        <div className="lg:flex items-center gap-5">
          <div className="inline-block items-center relative lg:p-0 p-4 mb-4 lg:mb-0">
            <Image
              src={search}
              alt={'lupa'}
              className="absolute translate-x-80 py-4 lg:py-2 w-8 lg:w-5 lg:py-0 lg:translate-x-56 "
            />{' '}
            <input
              type="text"
              placeholder="Pesquisar Produtos"
              className="w-96  h-16 rounded-full lg:h-10 lg:w-64 px-8 lg:px-4 bg-zinc-50 border shadow-md lg:rounded-3xl"
            />
          </div>
          <div className="flex items-center justify-center gap-56 lg:gap-2 mb-10 lg:mb-0">
            <div className="">
              <Link href="/favorites" className="font-semibold flex items-center">
                {' '}
                <Image src={avaliable} alt={'favorite'} /> Favoritos{' '}
              </Link>
            </div>
            <Link href="/cart">
              <div className="flex items-center">
                <div className="font-semibold flex items-center">
                  <Image src={carr} alt={'carrinho'} /> Carrinho{' '}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
