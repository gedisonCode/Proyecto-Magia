import React, { useState, useEffect } from "react";
import style from "./pociones.module.css";

function Pociones() {
  const [pociones, setPociones] = useState([]);

  return (
    <>
      <section className={style.contenedorPrincipal}>
        <div className={style.contenedorImagen}>
          <img
            src="./imagenes/- (3).jpg"
            alt="imagen"
            className={style.imagen}
          />
        </div>

        <div className={style.contenedorTexto}>
          <div className={style.botones}>
            <button className={style.anterior}>anterior</button>
            <button className={style.siguiente}>siguiente</button>
          </div>

          <h2 className={style.titulo}>Name</h2>
          <p>Efectos</p>
          <p>efectos secundarios</p>
          <p>apariencia</p>
        </div>
      </section>
    </>
  );
}

export default Pociones;
