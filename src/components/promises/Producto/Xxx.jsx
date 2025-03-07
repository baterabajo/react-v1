
import { db } from '../../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

import React, { useEffect, useState } from 'react'

const Xxx = () => {

    const [item, setItem] = useState(null);
    const id = "JYqT0N7xuM4ucyLwVeKW";

    useEffect(() => {
        const docRef = doc(db, "productos", id);
        getDoc(docRef)
            .then((resp) => {
                setItem(
                    { ...resp.data(), id: resp.id });
            })
    }, [id])

    return (
        <div>
            <h1>producto: Firebase</h1>
            {
                item &&
                <div>
                    <p>{item.id}</p>
                    <h2>{item.title}</h2>
                     
                </div>
            }
        </div>
    )

}

export default Xxx



