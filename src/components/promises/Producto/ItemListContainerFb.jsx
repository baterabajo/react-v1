import React from 'react';
import { useEffect, useState } from 'react'
import './Styles.css'
import { db } from '../../../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import ItemList_Fb from './ItemList_Fb';


const ItemListContainerFirebase = () => {

    const [producto, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos 2");
    const title = "xxxxx";

   //console.log("producto: " + producto);

    useEffect(() => {

        const productosRef = collection(db, "productos");
        getDocs(productosRef)
            .then((resp) => {
                //console.log(resp.docs[0].id);
                //console.log(resp.docs[0].data());


                setProductos(
                    //  console.log(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )

                setTitulo(title);
            })

    }, [title]);




    return (
        <>
            <h1>ItemListContainerFirebase</h1>
            <div className='containerFlex_Fb'>
            {producto && <ItemList_Fb producto={producto}  titulo={titulo}  />}
            </div>
            
        </>
    )

}

export default ItemListContainerFirebase