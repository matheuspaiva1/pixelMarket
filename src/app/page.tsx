import Filters from "./components/filters";
import Header from "./components/header";
import ImageNav from "./components/image-nav";
import LineCardsHelp from "./components/line-cards-help";
import LineCardsPopular from "./components/line-cards-popular";
import LineCardsSearch from "./components/line-cards-search";
import LineCardsView from "./components/line-cards-view";

export default function Home() {
  return (
    <div> 
      <Header/>
      <ImageNav/>
      <Filters/>

      <h1 className="text-2xl font-bold text-gray-800 ml-11 mt-8 mb-8">Aqui estão alguns Headphones para você!</h1>
      <LineCardsSearch/>
      <LineCardsSearch/>
      <LineCardsSearch/>

      <LineCardsPopular/>

      <LineCardsView/>

      <LineCardsHelp/>
      
    </div>
  );
}
