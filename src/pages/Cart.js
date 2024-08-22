import { useSelector } from "react-redux";
import { CartCard } from "../components";

export const Cart = () => {

  const cartList=useSelector(state=> state.cartState.cartList);
  const total=useSelector(state=>state.cartState.total);

  return (
    <main>
      <section className="my-7 mx-11">
        <h1 className="text-3xl font-bold">Cart Items: {cartList.length} / ${total}</h1>
        { cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
