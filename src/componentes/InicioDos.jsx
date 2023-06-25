import React, { useEffect, useState } from "react";
import { personajes } from "../funciones/funciones.ts";

const InicioDos = () => {
  const [mostrarPjs, setMostrarPjs] = useState(null);

  useEffect(() => {
    personajes(setMostrarPjs);
  }, []);

  return (
    <>
      {mostrarPjs != null ? (
        <div className="row">
          {mostrarPjs.map((mostrarPjs) => (
            <div key={mostrarPjs.id} className="col mb-4">
              <a
                className="text-decoration-none"
                href={`/personaje/${mostrarPjs.id}`}
              >
                <div className="card" style={{ minWidth: "200px" }}>
                  <img src={mostrarPjs.image}></img>
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
