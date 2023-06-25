import React, { useEffect, useState } from "react";
import { personajes } from "../funciones/funciones.ts";
import Paginacion from "./Paginacion.jsx";

const InicioDos = () => {
  const [mostrarPjs, setMostrarPjs] = useState(null);
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character")

  useEffect(() => {
    personajes(setMostrarPjs, url);
  }, [url]);

  return (
    <>
    <Paginacion inicioAnterior={url => setUrl(url)} inicioSiguiente={url => setUrl(url)}/>
      {mostrarPjs != null ? (
        <div className="row">
          {mostrarPjs.map((mostrarPjs) => (
            <div key={mostrarPjs.id} className="col mb-4">
              <a
                className="text-decoration-none"
                href={`/personaje/${mostrarPjs.id}`}
              >
                <div className="card" style={{ minWidth: "200px" }}>
                  <img src={mostrarPjs.image} alt="Imagen del personaje"></img>
                  <div className="card-body">
                    <h5 className="card-title">{mostrarPjs.name}</h5>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        
      ) : (
        "No hay personajes"
      )}
    </>
  );
};

export default InicioDos;
