import React, { useContext } from "react";
import './AgregaContacto.css'
import {DirectorioContext} from'../Context/DirectorioProvider'
function AgregaContacto(){
    const {setModal,guardaContacto}=React.useContext(DirectorioContext);
    const [contact,setContact]=React.useState({
        nombre :'',
        correo:'',
        telefono:''

    })
    function onchangeNombre(event){
        let contactoTemporal=contact;
        contactoTemporal.nombre=event.target.value;
        setContact(contactoTemporal);

    }
    function onchangeCorreo(event){
        let contactoTemporal=contact;
        contactoTemporal.correo=event.target.value;
        setContact(contactoTemporal);
    }
    function onchageTelefono(event){
        let contactoTemporal=contact;
        contactoTemporal.telefono=event.target.value;
        setContact(contactoTemporal);
    }
    function modalCanselar(){
        setModal(false);
    }
    function modalGuardar(event){
        event.preventDefault();
        guardaContacto(contact)
        setModal(false)

    }

    return(
        
        <div className="fondo">

            <div className="fondo2">

            <form>
                
                <center>
                <h2>correo</h2>
                <input className="correo" onChange={onchangeCorreo}/><br></br>
                <h2>nombre</h2>
                <input className="nombre" onChange={onchangeNombre}></input><br></br>
                <h2>telefono</h2>
                <input className="telefono" onChange={onchageTelefono}></input><br></br>
                <button typeof="submit" className="guardar"onClick={modalGuardar}>guardar</button>
                <button className="canselar"onClick={modalCanselar}>canselar</button>
                </center>
                

            </form>
            </div>
        </div>
    )
}

export default AgregaContacto;