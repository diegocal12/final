// import logo from './logo.svg';
import './App.css';
import React from 'react';
import ListaContactos from './ListaContactos';
import Contacto from './Contacto';
import AgregaContacto from './AgregaContactos';

import {Busqueda} from './Busqueda';
import { DirectorioContext, DirectorioProvider } from './Context/DirectorioProvider';

function App(){
  
  return (
    <DirectorioProvider>
        <DirectorioContext.Consumer>
          {
              ({
                contactosFiltrados,
                borrarContactos,
                contadorContactos,
                modal,
                setModal
              })=>(

                
                <React.Fragment>
          <center>
        <h1>DIRECTORIO [{contadorContactos}]</h1>
          <div class="contactos">
          <Busqueda/>
          <button onClick={()=>{setModal(true)}}>Agrega Contacto</button>
          <ListaContactos>
            {
              contactosFiltrados.map((contacto)=>{
                return(
                  <Contacto
                  nombre={contacto.nombre}
                  correo={contacto.correo}
                  telefono={contacto.telefono}
                  borrarContactos={()=>{borrarContactos(contacto.nombre)}}//
                  />
                )
              })
            }
            
          </ListaContactos>
          {modal &&<AgregaContacto/>}
       
          
          </div>
          </center>
          </React.Fragment>
          )
          }
        </DirectorioContext.Consumer>
        </DirectorioProvider>
        );
}

export default App;