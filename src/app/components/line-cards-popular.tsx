import CardsMostPopular from "./cards-most-popular";

export default function LineCardsPopular() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 ml-11 mt-8 mb-8">Itens semelhantes que você pode gostar</h1>

      <div className="flex item-center justify-center gap-x-24">
        <CardsMostPopular/>
        <CardsMostPopular/>
        <CardsMostPopular/>
        <CardsMostPopular/>
        
      </div>
    </div>
  )
}