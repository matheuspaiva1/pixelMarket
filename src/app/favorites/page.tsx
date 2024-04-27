'use client'
import { Key, useContext } from "react";
import ItemsFavorites from "./components/itemsFavorites";
import AppContext from "../contexts/appContext";

export default function PageFavorite(){
  const {favoriteItems} = useContext(AppContext)
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 ml-4 lg:ml-11 mt-8 mb-8 ">
          Aqui estão seus itens favoritos!
      </h1>
      {
        favoriteItems.map((fav: {id: Key | null | undefined}) => <ItemsFavorites key={fav.id} data={fav}/>)
      }
      
    </div>
  )

}