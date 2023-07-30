import { CartView } from "./components/CartView";
import { ProductView } from "./components/ProductView";
import { useItemCart } from "./hooks/useItemsCart";

export const CartApp = () => {

    const { cartItems, handlerAddProductCart, handlerDeleteProductCart } =useItemCart();

    return(
    <>
        <div className="container my-4">

            <h3>Cart App</h3>
            <ProductView add={product => handlerAddProductCart(product) }/>

            {cartItems?.length <= 0 || 
                <div className="my-4 w-50">
                    <CartView items={cartItems} handlerDelete={handlerDeleteProductCart}/>
                </div>
            }
        </div>
    </>
    )
}