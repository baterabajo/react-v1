import React, { useContext, useState } from 'react'
import { ContextApp } from '../../context/ContextApp';
import ItemCount from './ItemCount';

const ItemDetail_Fb = ({ item }) => {


  const { agregarAlCarrito } = useContext(ContextApp);

  //[]
  const [cantidad, setCantidad] = useState(1);
  //console.log("cantidad:" +  cantidad);


  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
    //console.log({ cantidad });
  }

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1)
    //console.log({ cantidad });
  }

  return (
    <>
      <h1>ItemDetail_Fb</h1>
      <item key={item.name} item={item} />
     
      <div >
      <img  className='center'  src={item.image} alt={item.title} width="200" height="100"/>
        <div className='ItemDetalleFlex' >
        
         <h2>Id: {item.id}</h2>
          <h3>{item.title}</h3>
          <h3>${item.price}</h3>
           <h3>Sotck:{item.stock}</h3>
        </div>

      </div>
     
      <ItemCount cantidad={cantidad}
        handleSumar={handleSumar}
        handleRestar={handleRestar}
        handleAgregar={ ()=> { agregarAlCarrito(item, cantidad) }} >
      </ItemCount>
      </>
  )
}

export default ItemDetail_Fb