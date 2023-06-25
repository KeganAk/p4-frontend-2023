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
        <div className="container" style={{ backgroundColor: "#1E90FF" }}>
          <img
            src={personaje.image}
            alt="Imagen del personaje"
            style={{ maxWidth: "500px" }}
          ></img>
          <h1>{personaje.name}</h1>
          <p>
            {personaje.status} - {personaje.species}
          </p>
          <p>Gender: {personaje.gender}</p>
          <p>Origin: {personaje.origin.name}</p>
          <p>Last known location: {personaje.location.name}</p>
        </div>
      ) : (
        "No hay personaje :("
      )}
    </>
  );
};

export default Personaje;
