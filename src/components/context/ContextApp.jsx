import { createContext, useEffect } from 'react'
import { useState } from "react";
export const ContextApp = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const ContextoProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([carritoInicial]);

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };
        const nuevoCarrito = [...carrito];

        const estaEnCarrito = nuevoCarrito.find((p) => p.id === itemAgregado.id);

        if (estaEnCarrito) {
            //console.log("Esta en el carrito");
            estaEnCarrito.cantidad += cantidad;
        }
        else {
            //console.log("No Esta");
            nuevoCarrito.push(itemAgregado);
            // setCarrito([...carrito, itemAgregado ]);
        }
        setCarrito(nuevoCarrito);
        //console.log(carrito);
   ;
    }
    const cantidadEnElCarrito = () => {
       const cantidadEnElCarrito=carrito.reduce((accumulador, prod) => accumulador + prod.cantidad, 0);
       return cantidadEnElCarrito;
    }

    const precioTotal = () => {
        const precioTotal = carrito.reduce((acc, prod) => acc + (prod.price * prod.cantidad), 0);
        return precioTotal;
    }
    const vaciarCarrito = () => {
        setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    return (
        <ContextApp.Provider value={{
            carrito,
            agregarAlCarrito,
            cantidadEnElCarrito,
            precioTotal,
            vaciarCarrito
        }}>
            {children}
        </ContextApp.Provider>
    )

}