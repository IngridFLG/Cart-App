import { useEffect, useState } from "react";
import { calculateToltal } from "../services/productService";

export const CartView = ({ items, handlerDelete }) => {

    const [total, setTotal] = useState(0);

    //total del carrito
    useEffect(() => {
        setTotal(
            calculateToltal(items)
        );
        //convierte un objeto a un string
        sessionStorage.setItem("cart", JSON.stringify(items));
    }, [items]);

    const deleteProduct = (id) => {
        handlerDelete(id);
    } 
    
  return (
    <>
    <h3>Carro de compras</h3>
        <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.product.id}>
                                <td>{item.product.name}</td>
                                <td>{item.product.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.quantity * item.product.price}</td>
                                <td><button className="btn btn-danger" onClick={() => deleteProduct(item.product.id)}>Eliminar</button></td>
                            </tr>
                        ))}
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3} className="text-end fw-bold">Total</td>
                            <td colSpan={2} className="text-star fw-bold">{total}</td>
                        </tr>
                    </tfoot>
        </table>
    </>
  )
}
