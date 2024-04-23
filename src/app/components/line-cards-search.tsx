import CardSearch from "./cards-search";

export default function LineCardsSearch (){
  return (
    <div>
    <div 
    className="lg:flex items-center justify-center gap-x-24 mb-8 sm:inline-block"
    >
      <CardSearch/> 
      <CardSearch/> 
      <CardSearch/> 
      <CardSearch/> 
    </div>
    </div>
  )
}