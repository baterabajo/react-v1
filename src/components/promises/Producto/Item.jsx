import React from 'react'
import { Link } from 'react-router-dom';


const Item = ({ producto }) => {


  return (
   <>
      <img src={producto.image} alt={producto.title} width="200" height="100" />
      <item key={producto.id} />
      <h2>Id: {producto.id}</h2>
      <p> $ {producto.price}</p>
      <p>  {producto.title}</p>
      <p> Stock: {producto.stock}</p>
      <br></br>
      <Link to={`/item/${producto.id}`}>Ver detalle</Link>
      </>
  )
}

export default Item