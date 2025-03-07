
React JS | Clase 01 — Instalación y configuración
https://www.youtube.com/watch?v=2SwKpVVNfIE&list=PL8VCLfCNXjSZfAhqZT7RfWv5Anb8I9PfY

Terminal Visual code revisamos las versiones 
node -v
v18.20.7

npm -v
10.8.2

Creamos la carpeta del proyecto 
react-v1

cmd
cd react-v1
abrimos el visual studio code
C:\react-v1>code .

creamos la aplicacion de React
npx create-react-app .

![alt text](image.png)

Revisamos las librerias
![alt text](image-1.png)

Ejecutamos
npm start
![alt text](image-2.png)

![alt text](image-3.png)

Eliminamos estos archivos inecesarios
![alt text](image-4.png)

Limpiamos el archivo indes.js

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
 </React.StrictMode>
);

Limpiamos el archivo App.js
![alt text](image-5.png)
--------------------------------------------------------------------------------------------------------
Clase 03 — Componentes y props

Los componentes de React simpre deben comenzar con mayuscula
Las funciones si pueden comenzar minuscula la sintasix es la misma

![alt text](image-6.png)

Asi se llama un componente recuerde debe comenzar en mayusculas las funciones no
Se pueden usar varias veces un componente

![alt text](image-7.png)

Pasar propiedades

![alt text](image-8.png)

![alt text](image-9.png)

Para ni utilizar la palabra  props

![alt text](image-10.png)

_______________________________________________________________________________________________________
React JS | Clase 04 — useState y useEffect hooks y ciclo de vida de los componentes


importante al revisar el log los eventos se ejecutan dos veces en modeo de desarrollo esto pasa en produccion....se renderizan dos veces por eso comentareamos esto...pero es para prevenir erores
..Recuerde los eventos se ejecutan dos veces ......si no se descomentan
![alt text](image-11.png

...toodo se monta y se desmonta dos veces

CICLO DE VISA DE LOS COMPONENTES
![alt text](image-12.png)

..Cada vez que cambie el estado se renderiza la pagina 

const [producto, setProductos] = useState([]);

 PedirProductos()
      .then((res) => {
        setProductos(res);
        setTitulo(title);
      });

Para controlar esto  manejamos con el hook .....useEffect

  useEffect(() => {
    PedirProductos()
      .then((res) => {
        setProductos(res);
        setTitulo(title);
      });

  }, [title]);
-----------------------------------------------------------------------------
 

//El return se utiliza para desmontar el componente y lo que se quiera ejecutar ya se a una promesa o funcion
  useEffect(() => {
    console.log("componente montado");
    // el retur es para desmontar

    return () => {
        console.log("componente montado");
    }
  }, []);
  ---------------------------------------------------------------------------------
   Se renderiza el componente pero no se monta ni se desmonta el componente si se agrega estado ...text
   
   useEffect(() => {

    console.log("Text modificado");
  }, [text]);
  ---------------------------------------------------------------------------------
     Cuando se modifica se agrega estado text al arreglo se renderiza siempre que se modifica
     
![alt text](image-13.png)

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


![alt text](image-14.png)

------------------------------------------------------------------------------------------------

React JS | Clase 05 — Promesas y .map( ) 

las promesas son funciones resolve, reject

![alt text](image-16.png)

pagina para crear archivos Json()


![alt text](image-15.png)

Si no se pone la funcion que llama la promesa en un useEffect  crea un siclo infinito
para que se ejecute una sola vez useEffect se pone el arreglo vacio    }, [ ]);

![alt text](image-18.png)

![alt text](image-19.png)

Siempre que utilizamos la funcion map  tenemos que poner un key  igularlo con id o algo unico para cada registro  

![alt text](image-20.png)

![alt text](image-21.png)

La logica de React es ir modularizando y seccionando componentes que cada uno tenga su responsabilidad.

-----------------------------------------------------------------------------------------
React JS | Clase 06 — Consumiendo APIs

Pokemon api

https://pokeapi.co/docs/v2#pokemon-section

utilizamos el trabaja con una promesa  
            fetch(url)
            .then((resp) => {
               console.log(resp)
            })

![alt text](image-22.png)           

el doble .then()  .then() es para que resuelva el estado en pendiente ..puede resultar estatus 
200 si retorna o estatus 404 si no la encuentra el endpoint.

![alt text](image-24.png)

![alt text](image-25.png)

![alt text](image-23.png)

Las respuestas del fetch(url) es asincrona se demora por eso ponemos la condicion 
pokemon > 0 && pokemon.name

![alt text](image-26.png)

ahora apezar que ponemos el id dinamico no funciona ya que por arreglo de dependencias esta vacio solo se ejecuta cuando se monta entonces agregamos el id para que se ejecute cuando se monte y cuando cambie el useEstade del id

![alt text](image-27.png)

![alt text](image-28.png)
   
Instalo ES7 sniper help code : me ayuda a contruir el codigo mas rapido


![alt text](image-29.png)
![alt text](image-30.png)
https://github.com/r5n-labs/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md

funciones y promesas
// Promesas o promises son asincronas funciones se declaran con minuscula no en Pascal como los componentes
// las promesas se ejecutan en un bucle por eso toca controlarlas con useEffect() 

![alt text](image-31.png)

------------------------------------------------------------------------------------------
React JS | Clase 07 — Routing y navegación

Instalamos desde la terminal 

npm install react-router-dom

![alt text](image-32.png)

verificammos las dependencias en el archivo package.json
![alt text](image-33.png)

import { BrowserRouter, Route, Routes } from "react-router-dom"; en el archivo App.js



import Navbar from "./components/Menu/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/promises/Inicio";
import ItemDetailContainer from "./components/promises/Producto/ItemDetailContainer";
import Pokemon from "./components/promises/Pokemon";
import ItemListContainer from "./components/promises/Producto/ItemListContainer";
import Contacto from "./components/promises/Producto/Contacto";
import { ContextoProvider } from './components/context/ContextApp';
import Carrito from "./components/promises/Producto/Carrito";
import ItemListContainerFb from "./components/promises/Producto/ItemListContainerFb";
import ItemDetailContainerFb from "./components/promises/Producto/ItemDetailContainerFb";
import Checkout from "./components/promises/Producto/Checkout";
import Xxx from "./components/promises/Producto/Xxx";


function App() {



  return (
    <div className="App">
      <ContextoProvider>
        {/* Ctrl + K + U   CTRL + K + C */}
        {/*  <ItemListContainer2 />     */}

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/ItemListContainer/:title" element={<ItemListContainer />} />
            <Route path="/ItemListContainerFirebase" element={<ItemListContainerFb />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/Item_Fb/:id" element={<ItemDetailContainerFb />} />
            <Route path="/pokemon" element={<Pokemon />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Carrito" element={<Carrito />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Xxx" element={<Xxx />} />
          </Routes>
        </BrowserRouter>
      </ContextoProvider>

    </div>
  );
}

export default App;

![alt text](image-34.png)


import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'


function Navbar() {
  return (
    <nav className='navbar' >

     <Link  to='/' className='logo'><h1>React</h1></Link>
        <ul className='lu'>
            <li> <Link to="/">Inicio</Link></li>
            <li><Link to="/pokemon">Pokemon</Link></li>
            <li><Link to="/ItemListContainer/Productos 1">Productos 1</Link></li>
            <li><Link to="/Contacto">Contacto</Link></li>
            <li><Link to="/ItemListContainerFirebase">Productos Firebase</Link></li>
            <li><Link to="/Xxx">Xxx Firebase</Link></li>
            <li><CartWidget/></li>
        </ul>
    </nav>
  )
}

export default Navbar

![alt text](image-35.png)ç

Usamos parametros dinamicos con  useParams recuerde los parametros son string se cambian a numerico con la funcion Number

import { useParams } from 'react-router-dom';

  const id = useParams().id;

  useEffect(() => {
    pedirProductosPorId(Number(id))

![alt text](image-37.png)


--------------------------------------------------------------------------------------

React JS | Clase 08 — Eventos

![alt text](image-38.png)


![alt text](image-39.png)

Los eventos pueden estar en el nivbiel del padre o en otra libreria enn este caso lo tenemos en el contexto de la aplicacion como antes se manejaban varables globales
en este caso es eventos que se eredan atravez de un componente. Podemos psar estados por referencias y funcines aotravez de las props

![alt text](image-40.png)

Puedes reenviar todas las props con la sintaxis de propagación JSX <Avatar {...props} />, ¡pero no abuses de ella!

![alt text](image-41.png)


-----------------------------------------------------------------------------------------------------------------------------------
React JS | Clase 09 — Formularios 

instalamos en la terminal  para manejar los formularios mas sencillos no como html y javascript

Sin la libreria 
![alt text](image-42.png)

npm install react-hook-form

Con la libreria es mas sencillo menos codigo

![alt text](image-43.png)

Conla libreria console.log(data)

![alt text](image-44.png)

----------------------------------------------------------------------------------------------------------------------------------
React JS | Clase 10 — Context y LocalStorage

![alt text](image-45.png)



![alt text](image-46.png)

El contexto 
const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

inicializa con carrito si hay algo o si no devuelve un arreglo vacio || [];

export const ContextoProvider = ({ children }) => {

const [carrito, setCarrito] = useState([carritoInicial]);

![alt text](image-47.png)

cache o contexto carrito persiste aun si cierras el explordor y abres otro

![alt text](image-48.png) 

puedo vaciar el carrito  

const vaciarCarrito = () => {
        setCarrito([]);
    }

![alt text](image-50.png)

![alt text](image-51.png)
--------------------------------------------------------------------------------------------------------------------------------------

React JS | Clase 11 — Integrando Firebase

Video de ayuda
 https://www.youtube.com/watch?v=FH0nW3bQ6Kg

 ![alt text](image-52.png)
 ![alt text](image-53.png)
 ![alt text](image-54.png)
 ![alt text](image-55.png)
![alt text](image-56.png)
![alt text](image-57.png)
![alt text](image-58.png)
![alt text](image-59.png)
![alt text](image-61.png)
![alt text](image-62.png)
![alt text](image-63.png)
![alt text](image-64.png)
![alt text](image-65.png)
![alt text](image-66.png)
![alt text](image-67.png)
![alt text](image-68.png)
![alt text](image-70.png)
![alt text](image-71.png)
![alt text](image-72.png)

asi queda  query y where
![alt text](image-73.png)

![alt text](image-74.png)
cambiamos  getDocs(productosRef ) getDocs(q )
![alt text](image-75.png)
![alt text](image-76.png)

Agrgamos un Pedido en la Nueva collecion Pedidos
![alt text](image-77.png)


agragamos el proyecto gitHub
 video de ayuda 


 ------------------------------------------------------------------------------------------------------------------------------------
Deploy React project on Github Pages 

"homepage":  "https://github.com/baterabajo/react"

 agrego esats lineas en package.json
"homepage":  "https://github.com/baterabajo/react",

  "predeploy" : "npm run build",

  "deploy": "gh-pages -d build"
  

![alt text](image-78.png)
![alt text](image-79.png)
![alt text](image-81.png)

----------------------------------------------------------------------------------------------------------------
Como Actualizar mi Repositorio en GitHub
En la terminal

Video de ayuda 
https://www.google.com/search?q=github+visual+code+actualizar&sca_esv=6032389a2ad49ca8&udm=7&biw=1366&bih=617&sxsrf=AHTn8zoCzpeor-z1U2cWKxtwDkiWFFMd_Q%3A1741306442225&ei=SjrKZ6K1DYOTwbkPy8S_2Ag&ved=0ahUKEwiigrz_1_aLAxWDSTABHUviD4sQ4dUDCBA&uact=5&oq=github+visual+code+actualizar&gs_lp=EhZnd3Mtd2l6LW1vZGVsZXNzLXZpZGVvIh1naXRodWIgdmlzdWFsIGNvZGUgYWN0dWFsaXphcjIFECEYoAEyBRAhGKABMgUQIRifBTIFECEYnwUyBRAhGJ8FSJcwUMMHWJQtcAJ4AJABAJgBoAKgAawTqgEFMC44LjS4AQPIAQD4AQGYAg6gAswUwgIGEAAYCBgewgIIEAAYogQYiQXCAgUQABjvBcICBhAAGBYYHsICCBAAGBYYChgewgIIEAAYgAQYogTCAgQQIRgVwgIHECEYoAEYCpgDAIgGAZIHBzIuNC43LjGgB9FD&sclient=gws-wiz-modeless-video#fpstate=ive&ip=1&vld=cid:ac916ed9,vid:_69hncq_Azo,st:0

Agrego los archivos nuevos ya sean imagenes del archivo README.md donde hago el manual
 git add .
 git commit -m "Nuevos cambios en mi app de React"


con esto lo subimos al repositorio en la rama inicial
git push origin main

npm run deploy 




