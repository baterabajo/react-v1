import data from '../../../data/productos.json';


export const PedirProductos = () => {
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
