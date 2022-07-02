import React, { useState } from 'react';

const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda] = useState('');
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPeli = (e) => {
    // Crear estado y actualizarlo
    setBusqueda(e.target.value);
    //console.log(busqueda);
    // Filtrar para buscar coincidencias
    let pelis_encontradas = listadoState.filter(peli => {
      return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
    });
    // Comprobar si hay resultados
    if(busqueda.length <=1 || pelis_encontradas <=0){
      pelis_encontradas = JSON.parse(localStorage.getItem('pelis')); // Devolvemos todo lo q hay en LocalStorage
      setNoEncontrado(true);
    } else {
      setNoEncontrado(false);
    }
    //console.log(pelis_encontradas);
  
    // Actualizar estado del listado principal con lo que he logrado filtar
    setListadoState(pelis_encontradas);

  }

  return (
    <>
    <div className='search'>
          <h3 className='title'>Buscador: {busqueda}</h3>
          {(noEncontrado === true && busqueda.length > 1 ) && (
            <span className='no-encontrado'>No se a encontrado ninguna coincidencia</span>
          ) }
          
          <form action="">
            <input className='flex-1 border-gray-100 outline-none border-2 p-2 m-2 rounded-2xl focus:border-gray-300' type="text" id='search_field' name='busqueda' autoComplete='off' onChange={buscarPeli} />
            <button className='bg-blue-500 cursor-pointer text-white rounded-full px-6 py-2 mt-4 font-semibold text-base outline-none'>Buscar</button>
          </form>
        </div>
    </>
  )
}

export default Buscador