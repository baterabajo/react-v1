import React from 'react'
import { Link } from 'react-router-dom'

const Item_Fb = ({ producto }) => {
  return (
    <>
    <h1>Item_Fb</h1>
       <img src={producto.image} alt={producto.title} width="200" height="100" />
       <item key={producto.id} />
       <h2>Id: {producto.id}</h2>
       <p> $ {producto.price}</p>
       <p>  {producto.title}</p>
       <p> Stock: {producto.stock}</p>
       <br></br>
       
       <Link to={`/Item_Fb/${producto .id}`}>Ver detalle Fb</Link>
       </>
   )
}

export default Item_Fb