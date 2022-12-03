import React from "react";
import './Busqueda.css'
import { DirectorioContext } from "../Context/DirectorioProvider";

function Busqueda(props)
{   
    const{TextoBusqueda,setTextoBusqueda}=React.useContext(DirectorioContext);

    function onBusquedaChage(event){
        setTextoBusqueda(event.target.value);
    }

    return(
        <React.Fragment>
            <input onChange={onBusquedaChage}value={TextoBusqueda}></input>
        </React.Fragment>
    );
}

export {Busqueda};