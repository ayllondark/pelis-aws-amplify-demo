import React from 'react'

const GuardarEnStorage = (clave, elemento ) => {
  // Conseguir los elementos que ya tenemos en LocalStorage
  let elementos = JSON.parse(localStorage.getItem(clave));
  console.log(elementos);
  // Comprobar si es un array
  if(Array.isArray(elementos)){  // Si elementos es un array
    // Añadir dentro del array un elemento nuevo
    elementos.push(elemento);
  } else {
    // Crear un array con el nuevo elemento
    elementos = [elemento];
  }
  // Guardar en el LocalStorage
  localStorage.setItem(clave,JSON.stringify(elementos));
  // Devolver Objeto Guardado
  return  elemento;
}

export default GuardarEnStorage

