import React from "react";
import './Contacto.css'
function Contacto(props){
    function borrar(){
        props.borrarContactos();
        //  console.log("Ssss");
    }
    return(
        <div class="nombres">
            <p>{props.nombre}</p>
            <p>{props.correo}</p>
            <p>{props.telefono}</p>
            <button onClick={borrar} class="borrar">Borrar</button>
        </div>
    )
}

export default Contacto;
