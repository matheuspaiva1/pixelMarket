import CardsView from "./cards-views";

export default function LineCardsView() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 ml-11 mt-8 mb-8">Visualizados Recentemente</h1>

      <div className="flex item-center justify-center gap-x-24">
        <CardsView/>
        <CardsView/>
        <CardsView/>
        <CardsView/>

      </div>
    </div>
  )
}