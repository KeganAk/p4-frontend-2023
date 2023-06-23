import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { unPersonaje } from '../funciones/funciones';

const Personaje = () => {
  const [personaje, setPersonaje] = useState(null)

  const params = useParams();
  useEffect(()=>{
    unPersonaje(params.id, setPersonaje)
  }, [])

  return (
    <>
    {personaje != null ? (
      <div>
        <h2>Personaje con el id {params.id}</h2>
      <p>con el nombre {personaje.name}</p>
      </div>
    ) : ("No hay personaje :(")}
    
    </>
  )
}

export default Personaje