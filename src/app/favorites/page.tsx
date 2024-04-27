'use client'
import { Key, useContext } from "react";
import ItemsFavorites from "./components/itemsFavorites";
import AppContext from "../contexts/appContext";

export default function PageFavorite(){
  const {favoriteItems} = useContext(AppContext)
  return (
    <div>
      
      {
        favoriteItems.map((fav: {id: Key | null | undefined}) => <ItemsFavorites key={fav.id} data={fav}/>)
      }
      
    </div>
  )

}