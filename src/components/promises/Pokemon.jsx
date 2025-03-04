import React, { useEffect, useState } from 'react'


function Pokemon() {

    const [pokemon, setPokemon] = useState();
    const [id, setId] = useState(1);
    //const [titulo, setTitulo] = useState("Pokemon");
    //const title = useParams().title;
   

    //console.log(titulo);


    const handleSiguiente = () => {    
        setId(id +1);
    }
  const handleAnterior = () => {    
        setId(id - 1);
    }


    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}` )    
            .then((res) => res.json())
            .then((data) => {
                setPokemon(data)
              //  setTitulo(title);
            }
            );
    }, [id]);



    return (
        <div>
            <h1>Titulo: Pokemon</h1>
            {
                pokemon &&
                <div>
                    <p>{pokemon.id}</p>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <br />
                    {
                    id > 1 && <button onClick={handleAnterior}>Anterior</button> 
                    }
                    <button onClick={handleSiguiente}>Siguiente</button>
                    
                    
                </div>
            }
        </div>
    )
}

export default Pokemon