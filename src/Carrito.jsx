import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ComprasPag } from "./pages/ComprasPag";
import { CarritoPag } from "./pages/CarritoPag";
import { ProductosProvider } from "./context/ProductosProvider";
import { CarritoProvider } from "./context/CarritoProvider";

export const Carrito = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <Navbar></Navbar>
        <div className="container">
          <Routes>
            <Route path="/" element={<ComprasPag></ComprasPag>}></Route>
            <Route path="/carrito" element={<CarritoPag></CarritoPag>}></Route>
            <Route path="/*" element={<Navigate to="/" />}></Route>
          </Routes>
        </div>
      </CarritoProvider>
    </ProductosProvider>
  );
};
