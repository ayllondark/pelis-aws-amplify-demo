import React from 'react';

const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {

    const titulo_componente = 'Editar Pelicula';

    const guardarEdicion = (e, id) => {
        e.preventDefault();
        // Conseguir el Target del Evento
        let target = e.target;
        //console.log(target);

        //Buscar el indice del objeto de la pelicula a atualizar
        const pelis_almacenadas = conseguirPeliculas();
        //console.log(pelis_almacenadas);  findIndex = Permite buscar por una condicion un objeto dentro d eun array de objetos
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id);
        //console.log(indice);
        // Crear Objeto con ese id del Indice, con el titulo y descripcion del formulario
        let peli_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value,
        }
        //console.log(indice, peli);
        // Actualizar el elemento con ese indice
        pelis_almacenadas[indice] = peli_actualizada;
        //console.log(pelis_almacenadas);
        // Guardar el nuevo array de objetos en el LocalStorage
        localStorage.setItem('pelis', JSON.stringify(pelis_almacenadas));
        // Actualizar estados
        setListadoState(pelis_almacenadas);
        setEditar(0);

    }

  return (
    <div className='flex flex-col items-center justify-center'>
        <h3 className='mt-6 font-bold'>{titulo_componente}</h3>
        <form onSubmit={e => guardarEdicion(e, peli.id)} className='flex flex-col items-center justify-center h-full'>
            <input type="text" name='titulo' className='flex-1 border-gray-100 outline-none border-2 p-2 m-2 rounded-2xl focus:border-gray-300' defaultValue={peli.titulo} />
            <textarea name="descripcion" defaultValue={peli.descripcion} className='flex-1 border-gray-100 outline-none border-2 p-2 rounded-2xl focus:border-gray-300'></textarea>
            <input type="submit" className='bg-red-500 cursor-pointer text-white rounded-full px-6 py-2 mt-4 font-semibold text-base outline-none' value='Actualizar' />
        </form>
    </div>
  )
}

export default Editar