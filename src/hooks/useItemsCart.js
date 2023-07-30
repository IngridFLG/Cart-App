
import { useReducer, useEffect } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { addProductCart, deleteProductCart, updateQuantityProductCart } from "../reducer/itemsActions";


// convierte un String a un objeto
//const initialCartItems = JSON.parse(sessionStorage.getItem('cart') || []);
const cartFromSession = sessionStorage.getItem('cart');
const initialCartItems = cartFromSession ? JSON.parse(cartFromSession) : [];

export const useItemCart = () => {

//const [cartItems, setCartItems] = useState(initialCartItems);
const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

useEffect(() => {
    //convierte un objeto a un string
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
}, [cartItems]);

const handlerAddProductCart = (product) => {

    const hasItem = cartItems.find((i) => i.product.id === product.id);
    if(hasItem) {
        // setCartItems([
        // Cambia el producto de posicion
        //     ...cartItems.filter((i) => i.product.id !== product.id),
        //     {
        //         product,
        //         quantity: hasItem.quantity + 1,
        //     }
        // ])
        dispatch(
            {
                type: updateQuantityProductCart,
                payload: product
            }
        )
    }else{
        dispatch(
        {
            type: addProductCart,
            payload: product
        });
    }   
}

const handlerDeleteProductCart = (id) => {
    dispatch(
        {
            type: deleteProductCart,
            payload: id
        });
}
    return {
        cartItems,
        handlerAddProductCart,
        handlerDeleteProductCart
    }
}