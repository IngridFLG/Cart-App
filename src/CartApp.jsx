import { useState } from "react";
import { CartView } from "./components/CartView";
import { ProductView } from "./components/ProductView";

const initialCartItems = [
    // {
    //     product: {

    //     },
    //     quantity: 0,
    // }
];
export const CartApp = () => {

    const [cartItems, setCartItems] = useState(initialCartItems);
    const addProductCart = (product) => {

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
            setCartItems(
                cartItems.map((i) => {
                    if(i.product.id === product.id){
                        i.quantity = i.quantity + 1;
                    }
                    return i;
                })
            )
        }else{
            setCartItems([...cartItems,
                {
                    product: product,
                    quantity: 1,
                }
            ]);
        }   
    }

    const DeleteProductCart = (id) => {
        setCartItems([
            ...cartItems.filter((i) => i.product.id !== id),
        ]);
    }
    return(
    <>
        <div className="container">

            <h3>Cart App</h3>
            <ProductView add={product => addProductCart(product) }/>

            <div className="my-4 w-50">
                <CartView items={cartItems} handlerDelete={DeleteProductCart}/>
            </div>
        </div>
    </>
    )
}