import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route } from 'react-router-dom';
import Home from "../pages/home";
import Contatos from "../pages/contatos";



const App= () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contatos" element={<Contatos />} />
    </Routes>
  )
}

export default App;