import { useEffect, useState } from 'react';
import './Styles.css'
import ItemDetail from './ItemDetail';
import { pedirProductosPorId } from '../../../helpers/pedirDatos';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);
  const id = useParams().id;
  //console.log("sotck:" + item.sotck);

  useEffect(() => {
    pedirProductosPorId(Number(id))
      .then((res) => {
        setItem(res);
      });

  }, [id]);



  return (
    <>
      {item && <ItemDetail item={item}  key={item.id}  />}
    </>
  )
};

export default ItemDetailContainer;