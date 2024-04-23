import Orders from "./components/orders";
import ProductCart from "./components/productCart";

export default function Cart(){
  return (
    <div>
      <ProductCart/>
      <Orders/>
    </div>
  );
};