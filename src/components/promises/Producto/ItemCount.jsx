
import './Styles.css'

const ItemCount = ({cantidad,  handleSumar, handleRestar, handleAgregar}) => {

  return (
    <div >
      <div className="containerFlexItemCount">
        <div><button class="button button4" onClick={handleRestar}>-</button></div>
        <div> <p class="button button4">{cantidad}</p></div>
        <div><button class="button button4" onClick={handleSumar}>+</button></div>
        <div > <button class="button button4"  onClick={handleAgregar}>Agregar al carrito</button></div>
        </div>
       
    </div>
  )
}

export default ItemCount