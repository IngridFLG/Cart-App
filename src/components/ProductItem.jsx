

export const ProductItem = ({name, description, price}) => {
  return (
    <>
    <div className="card">
      <div className="card-body">
        <h5 className="card-tittle">{name}</h5>
        <p className="card-text">{description}</p>
        <p>{price}</p>
        <button type="" className="btn btn-dark">Agregar</button>
      </div>
    </div>
    </>
  )
}

