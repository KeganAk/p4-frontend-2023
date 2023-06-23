import React, { useEffect, useState } from 'react'
import { personajes } from '../funciones/funciones.ts'

const Inicio = () => {
  const [mostrarPjs, setMostrarPjs] = useState(null)

  useEffect(()=>{
    personajes(setMostrarPjs)
  },[])

  return (
    <>
      {mostrarPjs != null ? (
        mostrarPjs.map(mostrarPjs => (
          <div key={mostrarPjs.id}>
            <a href={`/personaje/${mostrarPjs.id}`}>{mostrarPjs.name}</a>
            {/* <img src={mostrarPjs.image}/> */}
          </div>
        ))
      ) : ('no hay personajes')}
    </>
  )
}

export default Inicio