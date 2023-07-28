import { products } from "../data/products";

export const getProducts = () =>{
    return products;
}

export const calculateToltal = (items) => {
   return items.reduce((accumulador, item) => accumulador + item.product.price * item.quantity, 0);
}