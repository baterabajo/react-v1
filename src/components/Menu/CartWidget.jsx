import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextApp } from '../context/ContextApp'

const CartWidget = () => {

 const {cantidadEnElCarrito}=useContext(ContextApp);
  return (
    <div>
        <Link className='menu-link' to="/carrito">
        Carrito
        <span >No: {cantidadEnElCarrito()}</span>
        </Link>
    </div>
  )
}

export default CartWidget