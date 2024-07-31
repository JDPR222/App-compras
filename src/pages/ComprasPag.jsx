import { useContext } from "react";
import { Card } from "../components/Card";
import { ProductosContext } from "../context/ProductosContext";
import { CarritoContext } from "../context/CarritoContext";

export const ComprasPag = () => {
  const { productos } = useContext( ProductosContext );

  const {listaCompras,agregarCompra,aumentarCantidad,disminuirCantidad,eliminarCompra} = useContext (CarritoContext)

  const handleAgregar      = (compra) => {
    agregarCompra(compra)
  }      
  const handleQuitar      = (id) => {
    eliminarCompra(id)
  }
  const handleAumentar     = (id) => {

  }
  const handleDisminuir      = (id) => {

  }

  
  
  return (
    <>
      <h1>Compras</h1>
      <hr />
      {/*aqui se esta recoriendo el array de objetos y creando un producto  elcual se iguala a la info de la key que tiene en la api*/}
      {productos.map((producto) => (
        <Card
          key={producto.id}
          imagen={producto.image}
          titulo={producto.title}
          descripcion={producto.description}
          precio={producto.price}
          handleAgregar= {()=> handleAgregar(producto)}
          handleQuitar={()=> handleQuitar (producto.id)}
        ></Card>
      ))}
    </>
  );
};
