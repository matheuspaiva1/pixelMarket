import CardsMostPopular from "./cards-most-popular";

export default function LineCardsPopular() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 ml-4 lg:ml-11 mt-8 mb-8">Itens populares que você pode gostar</h1>

      <div className="lg:flex lg:items-center lg:justify-center lg:gap-x-24 lg:mb-8 grid grid-cols-2 ml-4">
        <CardsMostPopular/>
        <CardsMostPopular/>
        <CardsMostPopular/>
        <CardsMostPopular/>
        
      </div>
    </div>
  )
}