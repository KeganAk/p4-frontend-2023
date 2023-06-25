import { BrowserRouter, Routes, Route } from "react-router-dom";
import Personaje from "./componentes/Personaje";
import React, {useState} from "react";
import Navbar from "./componentes/Navbar";
import InicioDos from "./componentes/InicioDos";
import Paginacion from "./componentes/Paginacion";


function App() {
  

  return (
    <>
      <Navbar title="Rick & Morty" />
      <div className="container mt-5">
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<InicioDos />}></Route>
            <Route path="/personaje/:id" element={<Personaje />}></Route>
          </Routes>
        </BrowserRouter>
        
      </div>
    </>
  );
}

export default App;
