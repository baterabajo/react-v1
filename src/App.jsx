

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