"use client"
import { Key, useContext, useEffect } from "react";
import CardSearch from "./cards-search";
import {fetchProducts} from '@/app/apis/fetchProducts';
import AppContext from "../contexts/appContext";


export default function LineCardsSearch (){
  const {products, setProducts} = useContext(AppContext)

  useEffect(()=>{
    fetchProducts('iphone').then((response) => {
      setProducts(response)
    })
  },[])

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 ml-4 lg:ml-11 mt-8 mb-8 ">
          Aqui estão alguns produtos para você!
      </h1>
    <div 
    className="lg:grid lg:grid-cols-4 lg:justify-center gap-x-12 lg:mb-8 grid grid-cols-2 ml-4 lg:ml-12"
    >

      {
        products.map((product: { id: Key | number | undefined; })=> <CardSearch key={product.id} data={product}/> )
      }
      
    </div>
    </div>
  )
}