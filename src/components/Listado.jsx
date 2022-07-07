import React, { useEffect, useState } from "react";
import Editar from "./Editar";

import {API, graphqlOperation} from 'aws-amplify';
import {listTodos} from '../graphql/queries';
import { deleteTodo } from '../graphql/mutations';


const Listado = ({listadoState, setListadoState}) => {
  //const [listadoState, setListadoState] = useState([]);


  const [editar, setEditar] = useState(0);

  useEffect(() => {
    //console.log("Componentes de listad de peliculas cargados!!");
    conseguirPeliculas();
  }, []);


  const conseguirPeliculas = async () => {
    //let peliculas = JSON.parse(localStorage.getItem("pelis"));
    try {
      const peliculasData = await API.graphql(graphqlOperation(listTodos)) ;
      const peliculas = peliculasData.data.listTodos.items ;
      setListadoState(peliculas);
    } catch (error)
    {console.log('Error Peliculas: ', error)}


    /*let peliculas = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(peliculas);*/

    //return peliculas
  };

  const borrarPeli = async (id) => {

    try {
      let pelis_almacenadas = conseguirPeliculas();
      
      const peliculasData = await API.graphql(graphqlOperation(deleteTodo, {input: { id: id }} ));
      const deletepelicula = peliculasData.data.deleteTodo;
      let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(deletepelicula));
      console.log(deletepelicula);
      console.log(nuevo_array_pelis);
      setListadoState(nuevo_array_pelis);

    } catch (error)
    {console.log('Error Eliminar Peliculas: ', error)}



    
    // Filtrar esas peliculas del array para que elimine del aray la que no quiero
    //let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));
    //console.log(pelis_almacenadas, nuevo_array_pelis);
    // Actualizar estado del Listado
    //setListadoState(nuevo_array_pelis);

    // Actualizar los datos en el LpcalStorage
    //localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis));  // Transformo de un array d eobjetos a un JSON String
  }

  return (
    <> 
      {listadoState !=null ?
            listadoState.map((peli) => {
              return (
                
<div key={peli.id} className="flex grow flex-col p-6 m-4 items-center rounded-3xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://picsum.photos/600/400/?random" alt="Bonnie image"/>
    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{peli.titulo}</h5>
    <span className="text-sm text-gray-500 dark:text-gray-400">{peli.descripcion}</span>
    <div key={peli.id} className="flex mt-4 space-x-3 lg:mt-6">
        <a href ='#' className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={ () => setEditar(peli.id)}>Editar</a>
        <a href ='#' className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700" onClick={ () => borrarPeli(peli.id)}>Borrar</a>
    </div>


{editar === peli.id && (
  <Editar peli= {peli} conseguirPeliculas = {conseguirPeliculas} setEditar={setEditar} setListadoState = {setListadoState} />
)}
</div>



              );

            })
        : <h2>No Hay Peliculas para mostrar</h2>
    }
    </>
  );
};

export default Listado;
