import { db } from '../../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import './Styles.css'
import React, { useEffect, useState } from 'react'
import ItemDetail_Fb from './ItemDetail_Fb';
import { useParams } from 'react-router-dom';

const ItemDetailContainerFb = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;
    
    console.log("id: "+id);

    useEffect(() => {
        const docRef = doc(db, "productos", id);
        getDoc(docRef)
            .then((resp) => {
                setItem(
                    { ...resp.data(), id: resp.id });
            })
    }, [id]) 
    

    return (
        <>
          <h1>ItemDetailContainerFb</h1>
           {item && <ItemDetail_Fb item={item}  key={item.id}  />}
          </>
      )

}

export default ItemDetailContainerFb



