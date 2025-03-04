import React, { useEffect, useState } from 'react'
import { db } from '../../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';


const ItemDetailContainerFirebase = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {

        console.log(id);

        const docRef = doc(db,"productos",id);
        getDoc(docRef)
            .then((resp) => {
                console.log(resp.id);
                console.log(resp.data());

                setItem(
                    {...resp.data(),id: resp.id}
                );

            })


    }, [id]);



    return (
        <div>
            { item && <ItemList item={item}></ItemList>  }
        </div>
    )
}



export default ItemDetailContainerFirebase