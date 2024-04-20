import CardSearch from "./cards-search";

export default function LineCardsSearch (){
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 ml-11 mt-8 mb-8">Aqui estão alguns Headphones para você!</h1>
    <div className="flex item-center justify-center gap-x-24">
      <CardSearch/> 
      <CardSearch/> 
      <CardSearch/> 
      <CardSearch/> 
    </div>
    </div>
  )
}