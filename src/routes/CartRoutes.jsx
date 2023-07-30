import { Navigate, Route, Routes } from "react-router-dom";
import { CartView } from "../components/CartView";
import { ProductView } from "../components/ProductView";
import { useItemCart } from "../hooks/useItemsCart";

export const CartRoutes = () => {
    const { cartItems, handlerAddProductCart, handlerDeleteProductCart } =useItemCart();
    
    return (
        <>
        {/* rutas con react */}
        <Routes>
                <Route 
                    path="catalog"
                    element={ <ProductView add={product => handlerAddProductCart(product) }/>}
                />
                <Route path="cart" element={ (
                    cartItems?.length <= 0 ? 
                    <div className="alert alert-warning"> No hay productos en el carrito de compra</div>
                    : (
                        <div className="my-4 w-50">
                            <CartView items={cartItems} handlerDelete={handlerDeleteProductCart}/>
                        </div>
                    )
                )}/>
                <Route path="/" element={<Navigate to={'catalog'}/>}/>
            </Routes>
        </>
    )
}