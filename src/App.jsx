

import Navbar from "./components/Menu/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/promises/Inicio";
import ItemDetailContainer from "./components/promises/Producto/ItemDetailContainer";
import Pokemon from "./components/promises/Pokemon";
import ItemListContainer from "./components/promises/Producto/ItemListContainer";
import Contacto from "./components/promises/Producto/Contacto";
import { ContextoProvider } from './components/context/ContextApp';
import Carrito from "./components/promises/Producto/Carrito";
import ItemListContainerFirebase from "./components/promises/Producto/ItemListContainerFirebase";
import ItemDetailContainerFirebase from "./components/promises/Producto/ItemDetailContainerFirebase";
import Checkout from "./components/promises/Producto/Checkout";


function App() {



  return (
    <div className="App">
<ContextoProvider>
        {/* Ctrl + K + U   CTRL + K + C */}
        {/*  <ItemListContainer2 />     */}

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/ItemListContainer/:title" element={<ItemListContainer />} />
            <Route path="/ItemListContainerFirebase" element={<ItemListContainerFirebase />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainerFirebase />} />
            <Route path="/pokemon" element={<Pokemon />} />
            <Route path="/Inicio" element={<Inicio />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Carrito" element={<Carrito />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
        </ContextoProvider>

    </div>
  );
}

export default App;