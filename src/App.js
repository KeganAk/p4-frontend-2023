import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import Personaje from './componentes/Personaje'
import React from "react";
import Navbar from "./componentes/Navbar";
import InicioDos from "./componentes/InicioDos";

function App() {
  return (
    <>
    <Navbar title="Rick & Morty"/>
    <div className="container mt-5">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<InicioDos/>}></Route>
          <Route path='/personaje/:id' element={<Personaje/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
