export default function Filters(){
  return(
    <div name="filters" class="flex items-center justify-start  gap-72 ml-10  mt-8">
      <div class="selects flex gap-x-9">
        <select name="select" value="Headphones" class=" text-xs bg-zinc-100 text-zinc-600 rounded-3xl p-2 font-bold ">
          <option value="Headphones" selected>Headphones</option>
        </select>
  
        <select name="select" value="Preço" class=" text-xs bg-zinc-100 text-zinc-600 rounded-3xl p-2 font-bold ">
          <option value="Preço" selected>Preço</option>
        </select>
  
        <select name="select" value="Review" class=" text-xs bg-zinc-100 text-zinc-600 rounded-3xl p-2 font-bold ">
          <option value="review" selected>Review</option>
        </select>
  
        <select name="select" value="cor" class=" text-xs bg-zinc-100 text-zinc-600 rounded-3xl p-2 font-bold ">
          <option value="cor" selected>Cor</option>
        </select>
  
        <select name="select" value="material" class=" text-xs bg-zinc-100 text-zinc-600 rounded-3xl p-2 font-bold ">
          <option value="material" selected>Material</option>
        </select>
  
        <select name="select" value="ofertas" class=" text-xs bg-zinc-100 text-zinc-600 rounded-3xl p-1 font-bold ">
          <option value="ofertas" selected>Ofertas</option>
        </select>  
      </div>

      <button class="ml-52 border hover:bg-zinc-50 text-teal-600  rounded-3xl p-2 font-bold ">Aplicar Filtros</button>


    </div>

  )
}