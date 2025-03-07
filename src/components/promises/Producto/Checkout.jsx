import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { ContextApp } from '../../context/ContextApp'
import './Contacto.css'
import { db } from '../../../firebase/config'
import { collection, addDoc } from 'firebase/firestore';

const Checkout = () => {

    const { carrito, precioTotal, vaciarCarrito, cantidadEnElCarrito } = useContext(ContextApp);
    const { register, handleSubmit } = useForm();
    const [pedidoId, setPedidoId] = useState("");


    const comprar = (data) => {

        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        //console.log(pedido);

        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id)
                //console.log(doc.id);
                vaciarCarrito();
            })
    }

    if (pedidoId) {
        return (
            <div className='container'>
                <h1 className='main-title'>Muchas gracias por tu compra</h1>
                <p>Tu numero de pedido es:{pedidoId}</p>
            </div>
        )
    }


    return (
        <div className='container'>
            <h1 className='main-title'>Finalizar compra</h1>
            <form className='formulario' onSubmit={handleSubmit(comprar)} >
                <input type="text" placeholder='Ingresa tu nombre'  {...register("nombre")} />
                <input type='email' placeholder='Ingresa tu e-mail' {...register("email")} />
                <input type='phone' placeholder='Ingresa tu Telefono' {...register("phone")} />
                <button className='enviar' type='submit' >Comprar</button>
            </form>
        </div>
    )
}

export default Checkout