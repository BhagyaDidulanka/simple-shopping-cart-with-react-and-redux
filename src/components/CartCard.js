import { useDispatch } from "react-redux";
import "./CartCard.css";
import { remove } from "../store/cartSlice";

export const CartCard = ({product}) => {
  const dispatch=useDispatch();
    const {name, price, image} = product;
  return (
    <div className="cartCard">
        <img src={image} alt={name} />
        <p className="font-bold text-black ">{name}</p>
        <p className="font-bold text-black ">${price}</p>
        <button onClick={()=>dispatch(remove(product))} >Remove</button>
      </div>
  )
}
