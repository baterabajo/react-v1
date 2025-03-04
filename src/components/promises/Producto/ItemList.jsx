import Item from "./Item";
import './Styles.css'


const ItemList = ({ producto }) => {

  return (
    <>
      {
        producto.length > 0 &&
        producto.map((producto) => {
          return (
            <div>
            <Item producto={producto} />
            </div>
          );
        })
      }
    </>


  );
}

export default ItemList;