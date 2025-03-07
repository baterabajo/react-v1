import { useState } from "react";
import TextEfect from "./TextEfect";

const TextShow = () => {

  const [show, setShow] = useState(true);

function handleShow() {
    setShow(!show);
}

  return (
    <div>
      <button onClick={handleShow}>{show? "Ocultar":  "Mostar" }</button> 
      { show && <TextEfect/> }
     
    </div>
  );
}

export default TextShow;