import CardsHelp from "./cards-help";

export default function LineCardsHelp() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 ml-11 mt-8 mb-8">Serviços para ajudar você a comprar</h1>

      <div className="flex item-center justify-center gap-x-12">
        <CardsHelp/>
        <CardsHelp/>
        <CardsHelp/>
      </div>
      </div>
    );
};