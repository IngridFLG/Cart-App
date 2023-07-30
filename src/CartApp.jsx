import { Navbar } from "./components/Navbar";
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {

    return(
    <>
        <Navbar/>
        <div className="container my-4">

            <h3>Cart App</h3>
            <CartRoutes/>
             
        </div>
    </>
    )
}