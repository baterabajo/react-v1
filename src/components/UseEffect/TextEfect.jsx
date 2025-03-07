import { useState, useEffect } from "react";

const TextEfect = () => {

    const [text, setText] = useState("");


    function handleText(e) {
        setText(e.target.value);
    }

    useEffect(() => {
        console.log("Componente montado");

        return () => {
            console.log("Componente desmontado");
        }

    }, []);


    useEffect(() => {
        console.log("Componente actualizado");
    }, [text]);



    return (
        <div>
            <input type="text" value={text} onChange={handleText} />
            <h1>{text}</h1>
        </div>
    );
}

//mounting
//updating
//unmounting

export default TextEfect;
