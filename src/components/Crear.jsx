import React, { useState } from 'react';
import GuardarEnStorage from '../helpers/GuardarEnStorage';

import {API, graphqlOperation} from 'aws-amplify';
import { createTodo } from '../graphql/mutations';

const Crear = ({setListadoState}) => {

  const titulo = 'Añadir Pelicula';
  const [peliState, setPeliState] = useState({titulo: '', descripcion: ''})

  const conseguirDatosForm =async e  => {
    e.preventDefault();
    
    let target = e.target; // Consigue todos los elementos del form
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    {/* Crear Objeto de la pelicula a guardar */}
    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion
    }

    //createTodo(peli);
    try {
      const peliculasData = await API.graphql(graphqlOperation(createTodo, {input: peli} ));
      const addpelicula = peliculasData.data.createTodo;
      setPeliState(addpelicula);

      //setPeliState(addpelicula);
    /* Guardar estado */
    setListadoState(elementos => {
      return [...elementos, addpelicula];
    })

    } catch (error) {console.log('Error creating pelicula: ', error)
  }



  }

  
  
  return (
    <>
     <div className='flex flex-col items-center justify-center'>
          <h3 className='mt-6 font-bold'>{titulo}</h3>
          <strong>
          {(peliState.titulo && peliState.descripcion) && 'Ha creado la Peli: ' + peliState.titulo}  {/* Cuando exista titulo y descripcion mostrar titulo */}
          </strong>
          <form onSubmit={conseguirDatosForm} className='flex flex-col items-center justify-center h-full'>
            <input type="text" id='titulo' name='titulo' placeholder='Titulo' className='flex-1 border-gray-100 outline-none border-2 p-2 m-2 rounded-2xl focus:border-gray-300' />
            <textarea id='descripcion' name='descripcion' placeholder='Descripción' className='flex-1 border-gray-100 outline-none border-2 p-2 m-2 rounded-2xl focus:border-gray-300'></textarea>
            <input type="submit" value='Guardar' className='bg-red-500 cursor-pointer text-white rounded-full px-6 py-2 mt-4 font-semibold text-base outline-none' />
          </form>
        </div>
    </>
  )
}

export default Crear