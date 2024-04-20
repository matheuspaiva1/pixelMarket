export default function Filters(){
  return(
    <div className="flex items-center justify-start  gap-72 ml-10  mt-8">
      <div className="selects flex gap-x-9">
        <select name="select" value="Headphones" className=" text-xs bg-zinc-100 text-zinc-600 rounded-3xl p-2 font-bold ">
          <option value="Headphones" selected>Headphones</option>
        </select>
  
        <select name="select" value="Preço" className=" text-xs bg-zinc-100 text-zinc-600 rounded-3xl p-2 font-bold ">
          <option value="Preço" selected>Preço</option>
        </select>
  
        <select name="select" value="Review" className=" text-xs bg-zinc-100 text-zinc-600 rounded-3xl p-2 font-bold ">
          <option value="review" selected>Review</option>
        </select>
  
        <select name="select" value="cor" className=" text-xs bg-zinc-100 text-zinc-600 rounded-3xl p-2 font-bold ">
          <option value="cor" selected>Cor</option>
        </select>
  
        <select name="select" value="material" className=" text-xs bg-zinc-100 text-zinc-600 rounded-3xl p-2 font-bold ">
          <option value="material" selected>Material</option>
        </select>
  
        <select name="select" value="ofertas" className=" text-xs bg-zinc-100 text-zinc-600 rounded-3xl p-1 font-bold ">
          <option value="ofertas" selected>Ofertas</option>
        </select>  
      </div>

      <button className="ml-52 border hover:bg-zinc-50 text-teal-600  rounded-3xl p-2 font-bold ">Aplicar Filtros</button>


    </div>

  )
}