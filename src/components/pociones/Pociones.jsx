import React, { useState, useEffect } from "react";
import style from "./pociones.module.css";

function Pociones() {
  const [pociones, setPociones] = useState([0]);
  const [cambio, setCambio] = useState(0);
  const url = "https://wizard-world-api.herokuapp.com/Elixirs";

  const sinInfo = "Se Desconoce"
    
  function siguiente() {
    if (cambio < pociones.length -1) {
        setCambio(cambio + 1);
    } else {
        setCambio(0)
    }
  }
  function anterior() {
    if (cambio > 0) {
      setCambio(cambio - 1);
    } else {
        setCambio(pociones.length - 1)
    }
  }

  useEffect(() => {
    async function fetchPociones() {
      const respuesta = await fetch(url);
      if (!respuesta.ok) throw new Error("Error");
      const data = await respuesta.json();
      setPociones(data);
    }
    fetchPociones();
  }, [cambio]);

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

        {pociones && (
          <div className={style.contenedorTexto}>
            <div className={style.botones}>
              <button className={style.anterior} onClick={() => anterior()}>
                anterior
              </button>
              <button className={style.siguiente} onClick={() => siguiente()}>
                siguiente
              </button>
            </div>

            <p>
              Nombre: <br />{" "}
              <span className={style.datos}>{pociones[cambio].name || sinInfo}</span>
            </p>
            <p>
              Efectos: <br />{" "}
              <span className={style.datos}>{pociones[cambio].effect || sinInfo}</span>
            </p>
            <p>
              efectos secundarios: <br />{" "}
              <span className={style.datos}>
                {pociones[cambio].sideEffects || sinInfo}
              </span>
            </p>
            <p>
              dificultad: <br />{" "}
              <span className={style.datos}>{pociones[cambio].difficulty || sinInfo}</span>
            </p>
          </div>
        )}
      </section>
    </>
  );
}

export default Pociones;
