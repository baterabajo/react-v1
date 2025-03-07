import data from '../data/productos.json';


// Promesas o promises son asincronas funciones se declaran con minuscula no en Pascal como los componentes
// las promesas se ejecutan en un bucle por eso toca controlarlas con useEffect() 

export const pedirProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
}

export const pedirProductosPorId = (id) => {
  return new Promise((resolve, reject) => {
    const Item = data.find((p) => p.id === id);

    if (Item) {
      resolve(Item);
    }
    else {
      reject('No se encontro el producto');
    }
  });
}
