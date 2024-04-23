import CardSearch from "./cards-search";

export default function LineCardsSearch (){
  return (
    <div>
    <div 
    className="lg:flex lg:items-center lg:justify-center lg:gap-x-24 lg:mb-8 grid grid-cols-2 ml-4"
    >
      <CardSearch/> 
      <CardSearch/> 
      <CardSearch/> 
      <CardSearch/> 
    </div>
    </div>
  )
}