import "./Usuario.css";

export const Usuario = ({nombre,edad,nacionalidad}) => {

//const {nombre,edad,nacionalidad} = props;

//console.log(props);

  return (
    <div  className="usuario">
      <h1>Nombre:{nombre}</h1>
      <p>Edad:{edad}</p>
      <p>Nacionalidad:{nacionalidad}</p>
      <hr></hr>
    </div>
  );
}