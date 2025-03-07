import React, { useContext } from 'react'
import { ContextApp } from '../../context/ContextApp'
import { Link } from 'react-router-dom';
import './Styles.css'



const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito, cantidadEnElCarrito } = useContext(ContextApp);

    const handlerPruebas = () => {
        console.log("cantidadEnElCarrito: " + cantidadEnElCarrito());
    }


    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (

        <>
            <h1>Carrito</h1>
            <div className='carritoFlex' >
            {
                carrito.length > 0 &&
                carrito.map((prod) => (

                    <div >
                        <br />
                        <h1 key={prod.id}>{prod.title}</h1>
                        <p>Precio unitario $ {prod.price}</p>
                        <p>Precio total $ {prod.price * prod.cantidad}</p>
                        <p>Cantidad {prod.cantidad}</p>
                        <br />
                    </div>

                    ))
                }
                </div>

            <div>
                {

                    carrito.length > 0 ?
                        <>
                            
                            <h2>Precio Total: $ {precioTotal()}</h2>
                            <button class="button button4" onClick={handleVaciar}>Vaciar Carrito</button>
                            <button class="button button4" onClick={handlerPruebas}>Pruebas</button>
                            <Link class="button button4" to='/Checkout'>Finalizar compra</Link>
                        </> :
                        <h2>El carrito esta vacio :(</h2>
                }
            </div>
        </>

    )
}

export default Carrito