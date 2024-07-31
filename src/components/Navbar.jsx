import React from "react";
import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const Navbar = () => {

  const {listaCompras} = useContext (CarritoContext)


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to= "/" className="navbar-brand" href="#">
            Carrito de compras
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to= "/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Compras
                </NavLink>
              </li>
              <li className="nav-item">
               
              </li>
              <li className="nav-item dropdown">
               
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink to= "/carrito"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                > Resumen
                </NavLink>
              </li>
            </ul>
            <NavLink to= "/carrito">
              <Badge badgeContent={listaCompras.length} color="secondary">
                <ShoppingCart color="action" />
              </Badge>
            </NavLink>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
