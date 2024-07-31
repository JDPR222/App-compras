import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const CarritoPag = () => {


  const {
    listaCompras,
    agregarCompra,
    aumentarCantidad,
    disminuirCantidad,
    eliminarCompra,
  } = useContext(CarritoContext);


   const calcularCantidad = ()=>{
    return listaCompras.reduce ((total,item)=> total +  item.cantidad, 0).toFixed(0)
  }

     const calcularPrecio = ()=>{
    return listaCompras.reduce ((total,item)=> total +  item.price, 0).toFixed(2)
  }

  

  const calcularTotal = ()=>{
    return listaCompras.reduce ((total,item)=> total + item.price * item.cantidad, 0).toFixed(2)
  }


  const handleImpresion = () => {
    print()
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre "producto"</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          { 
            listaCompras.map((item) => (
            <tr key={item.id}>
              <th scope="row">1</th>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <button 
                className="btn btn-ouline-primary"
                onClick={()=> disminuirCantidad(item.id)}
                >-</button>
                <button  className="btn btn-primary">{item.cantidad}</button>
                <button 
                className="btn btn-ouline-primary"
                onClick={()=> aumentarCantidad(item.id)}
                >+</button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => eliminarCompra(item.id)}
                >Eliminar
                </button>
              </td>
            </tr>
          ))}
          <tr><h4>subtotal: </h4>
              <td></td>
              <td><h5>${calcularPrecio()}</h5></td>
              <td><h4>{calcularCantidad()}</h4></td>
              <td></td>
              </tr>

          <tr><h4>TOTAL: </h4>
              <td></td>
              <td><h5></h5></td>
              <td><h4>${calcularTotal()}</h4></td>
              <td></td>
              </tr>

        </tbody>
      </table>
      <div>
          <button 
          type="button" 
          className="btn btn-primary"
          onClick={handleImpresion}
          >
            Comprar
          </button>
          </div>
    </>
  );
};
