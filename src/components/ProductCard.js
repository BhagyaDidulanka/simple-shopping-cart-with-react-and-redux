import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add,remove } from "../store/cartSlice"; 
import { useEffect, useState } from "react";

export const ProductCard = ({product}) => {

    const cartList=useSelector(state=>state.cartState.cartList);
    const dispatch=useDispatch();
    const {id,name,price,image}=product;
    const [isInCart,setIsInCart]=useState(false);

    useEffect(()=>{
        const productInCart=cartList.find(item=>item.id==id);

        if(productInCart){
            setIsInCart(true);
        }else{
            setIsInCart(false);
        }
    },[cartList,id])

  return (

    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
    <Link href="#">
        <img className="object-cover w-full h-64 p-8 rounded-t-lg" src={image} alt="product image" />
    </Link>
    <div className="px-5 pb-5">
        <Link href="#">
            <h5 className="text-xl font-semibold tracking-tight text-black ">{name}</h5>
        </Link>
        
        <div className="flex items-center justify-between pt-6">
            <span className="text-3xl font-bold text-black ">${price}</span>
            {isInCart? (<button className="p-2 rounded-md bg-rose-600 hover:bg-rose-700" onClick={()=>dispatch(remove(product))} >Remove</button>) : (<button className="p-2 rounded-md bg-cyan-500 hover:bg-cyan-700" onClick={()=>dispatch(add(product))} >Add to cart</button>)}
            
        </div>
    </div>
</div>
  )
}
