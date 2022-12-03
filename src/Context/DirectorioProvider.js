import React from "react";




const DirectorioContext=React.createContext();
function DirectorioProvider(props){

    let contactos,contadorContactos;
      if(!localStorage.contactos)
      {
        localStorage.setItem("contactos",JSON.stringify([]))// el JSON.stringify de objeto a cadena de texto
         contactos=[];
      }
      else
      {
        contactos=JSON.parse(localStorage.contactos);// el JSON.parse
      }
    
      let [textoBusqueda,setTextoBusqueda]=React.useState('');
      let [contactosState,setContactosState]=React.useState(contactos);
      let [modal,setModal]=React.useState(false)
      let contactosFiltrados=[];
    
     
    function borrarContactos(name)
    {
      let indice=contactosState.findIndex((contactos)=>{
        return contactos.nombre==name
      });
      let contactosTemporal=[...contactosState];
      contactosTemporal.splice(indice,1);
      localStorage.setItem("contactos",JSON.stringify(contactosTemporal));
      setContactosState(contactosTemporal);
      console.log(indice)
    }
    function guardaContacto(contactos){
      let contactoTemporal=[...contactosState];
      contactoTemporal.push(contactos);
      localStorage.setItem("contactos",JSON.stringify(contactoTemporal));
      setContactosState(contactoTemporal);

    }
    if(textoBusqueda.length>0)
    {
      let textoBusquedaLowerCase = textoBusqueda.toLowerCase();
      contactosFiltrados = contactosState.filter((contacto)=>{
        return contacto.nombre.toLowerCase().includes(textoBusquedaLowerCase);
      })
    }
    else
    {
      contactosFiltrados = contactosState;
    }
    contadorContactos=contactosFiltrados.length;
    
    return (
        <DirectorioContext.Provider
        value={{
            textoBusqueda,
            setTextoBusqueda,
            contactosFiltrados,
            contactosState,
            setContactosState,
            borrarContactos,
            contadorContactos,
            modal,
            setModal,
            guardaContacto

        }}
        >
        {props.children}
        </DirectorioContext.Provider>
    )

}
export {DirectorioContext,DirectorioProvider}