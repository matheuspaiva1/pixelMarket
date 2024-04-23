import CardsHelp from "./cards-help";

export default function LineCardsHelp() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 ml-4 lg:ml-11 mt-8 mb-8">Serviços para ajudar você a comprar</h1>

      <div className="lg:flex lg:items-center lg:justify-center lg:gap-x-14 lg:mb-8 grid grid-cols-3 ml-4">
        <CardsHelp/>
        <CardsHelp/>
        <CardsHelp/>
      </div>
      </div>
    );
};