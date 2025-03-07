import Item from "./Item";
import './Styles.css'


const ItemList = ({ producto }) => {

  return (
    <>
      {
        producto.length > 0 &&
        producto.map((prod) => {
          return (
            <div>
            <Item producto={prod} key={prod.id} />
            </div>
          );
        })
      }
    </>


  );
}

export default ItemList;