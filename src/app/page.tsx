import ImageNav from './components/image-nav'
import LineCardsSearch from './components/line-cards-search'

export default function Home() {
  return (
    <div>
        <ImageNav />

        <h1 className="text-2xl font-bold text-gray-800 ml-4 lg:ml-11 mt-8 mb-8 ">
          Aqui estão alguns Headphones para você!
        </h1>
        <LineCardsSearch />

    </div>
  )
}
