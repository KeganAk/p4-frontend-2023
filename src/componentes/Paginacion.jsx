import React, { useState, useEffect } from "react";
import { info } from "../funciones/funciones";

const Paginacion = (props) => {
  const [mostrarInfo, setMostrarInfo] = useState(Object);
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");

  useEffect(() => {
    info(setMostrarInfo, url);
  }, [url]);

  const onClickAnterior = () => {
    props.inicioAnterior(mostrarInfo.prev)
    setUrl(mostrarInfo.prev);
  };

  const onClickSiguiente = () => {
    props.inicioAnterior(mostrarInfo.next)
    setUrl(mostrarInfo.next);
  };

  console.log("La URL actualmente es:", { url });

  return (
    <>
      <nav>
        <ul className="pagination justify-content-center">
          {mostrarInfo.prev ? (
            <li className="page-item">
              <button
                className="page-link text-dark"
                onClick={onClickAnterior}
              >
                Previous
              </button>
            </li>
          ) : null}
          {mostrarInfo.next ? (
            <li className="page-item">
              <button
                className="page-link text-dark"
                onClick={onClickSiguiente}
              >
                Next
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
    </>
  );
};

export default Paginacion;
