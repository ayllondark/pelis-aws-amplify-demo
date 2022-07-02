import React, { useState } from 'react';

import Buscador from './Buscador'
import Crear from './Crear'
import Listado from './Listado'

const Home = () => {

  const [listadoState, setListadoState] = useState([]);

  return (
    <div>

        <main>
          <div className="mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            {/* Buscador */}
        <Buscador listadoState={listadoState} setListadoState ={setListadoState} />
            <div className="grid grid-cols-3 gap-8 px-4 py-6 sm:px-0">
              {/* Listado de peliculas */}
              <div className="flex flex-wrap p-4 -mx-1 lg:-mx-4 col-span-2 bg-white border-4 border-dashed border-gray-200 rounded-lg">
                <Listado listadoState={listadoState} setListadoState ={setListadoState} />
              </div>
              <div className="bg-white border-4 border-dashed border-gray-200 rounded-lg">
                {/* Crear */}
                  <Crear setListadoState = {setListadoState} />
              </div>
            </div>
            
            {/* /End replace */}
          </div>
        </main>


      <footer className='footer'>
        &copy; 2022 Sigueme en mis redes - <a href="https://www.linkedin.com/in/migue-design/" target='_blank'>Miguel Ayllón</a>
      </footer>

    </div>
  )
}

export default Home