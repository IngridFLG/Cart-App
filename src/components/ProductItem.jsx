import { useNavigate } from "react-router-dom";


export const ProductItem = ({add, id, name, description, price}) => {

  const navigate = useNavigate();

  const addProductCart = (product) => {
    add(product);
    //agrega y va directamente al carrito
    navigate('/cart');
  }
  return (
    <>
    <div className="card">
      <div className="card-body">
        <h5 className="card-tittle">{name}</h5>
        <p className="card-text">{description}</p>
        <p>$ {price}</p>
        <button className="btn btn-dark" onClick={() => addProductCart({id, name, description, price})}>Agregar</button>
      </div>
    </div>
    </>
  )
}

