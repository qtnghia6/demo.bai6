import { ADD_TO_CART } from "../saga/action.type";

 const addToCart = (data: { name: string; category: string; price: number; color: string; }) => {
  console.log('data', data)
  return {
    type: ADD_TO_CART,
    data
  }
}

export default addToCart;
 