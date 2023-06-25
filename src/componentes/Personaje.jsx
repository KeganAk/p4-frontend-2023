import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { unPersonaje } from "../funciones/funciones";

const Personaje = () => {
  const [personaje, setPersonaje] = useState(null);

  const params = useParams();

  useEffect(() => {
    unPersonaje(params.id, setPersonaje);
  }, []);

  return (
    <>
      {personaje != null ? (
        <div className="container">
          <img
            src={personaje.image}
            alt="Imagen del personaje"
            style={{ maxWidth: "500px" }}
          ></img>
          <h1>{personaje.name}</h1>
          <p>
            {personaje.status} - {personaje.species}
          </p>
          <ul>
            <li>Gender: {personaje.gender}</li>
            <li>Origin: {personaje.origin.name}</li>
            <li>Last known location: {personaje.location.name}</li>
          </ul>
        </div>
      ) : (
        "No hay personaje :("
      )}
    </>
  );
};

export default Personaje;
