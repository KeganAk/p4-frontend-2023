import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { unPersonaje } from '../funciones/funciones.ts';

const Personaje = () => {
  const [personaje, setPersonaje] = useState(null)

  const params = useParams();
  useEffect(()=>{
    unPersonaje(params.id, setPersonaje)
  }, [])

  return (
    <>
    <h2>Personaje con el id {params.id}</h2>
    <p>{personaje.name}</p>
    </>

  )
}

export default Personaje