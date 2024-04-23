import CardsView from "./cards-views";

export default function LineCardsView() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 ml-4 lg:ml-11 mt-8 mb-8">Visualizados Recentemente</h1>

      <div className="lg:flex lg:items-center lg:justify-center lg:gap-x-24 lg:mb-8 grid grid-cols-2 ml-4">
        <CardsView/>
        <CardsView/>
        <CardsView/>
        <CardsView/>

      </div>
    </div>
  )
}