import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Header from "./components/header/Header.jsx";
import Casas from "./components/casas/Casas.jsx";
import Estudiantes from "./components/estudiantes/Estudiantes.jsx";
import Pociones from "./components/pociones/Pociones.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Casas />
      <Estudiantes />
      <Pociones />
      <Footer />
    </>
  );
}

export default App;
