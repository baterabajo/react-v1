import React from 'react';
import { useEffect, useState } from 'react'
import './Styles.css'
import { db } from '../../../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import ItemList from './ItemList';


const ItemListContainerFirebase = () => {

    const [producto, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos 2");
    const title="xxxxx";



    useEffect(() => {

        const productosRef = collection(db, "productos");
        getDocs(productosRef)
            .then((resp) => {
                //console.log(resp.docs[0].id);
                //console.log(resp.docs[0].data());


                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )

                setTitulo(title);
            })

    }, [titulo]);


    return (
        <div className='containerFlex'>
             <ItemList producto={producto} titulo={title} />
        </div>
      )
}

export default ItemListContainerFirebase