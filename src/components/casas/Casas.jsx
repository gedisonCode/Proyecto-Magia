import React, { useState, useEffect } from "react";
import style from "./casas.module.css";
import { Element } from "react-scroll";
import Gryffindor from "/imagenes/casas/GryffindorCrest.svg";
import Slytherin from "/imagenes/casas/SlytherinCrest.svg";
import RavenClaw from "/imagenes/casas/RavenClawCrest.svg";
import HufflePuff from "/imagenes/casas/HufflePuffCrest.svg";
const escudos = [
  { id: 0, imagen: Gryffindor },
  { id: 1, imagen: RavenClaw },
  { id: 2, imagen: HufflePuff },
  { id: 3, imagen: Slytherin },
];

function Casas() {
  const [mostrar, setMostrar] = useState(false);
  const [escudo, setEscudos] = useState(0);
  const [texto, setTexto] = useState([]);
  const url = `https://wizard-world-api.herokuapp.com/Houses`;

  useEffect(() => {
    async function fetchData() {
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      if (data) {
        setTexto(data);
      }
    }
    fetchData();
  }, [escudo]);

  if (!texto) return <p>Cargando...</p>;

  function mostrarMenu() {
    setMostrar(!mostrar);
  }

  function elegirEscudo(number) {
    setEscudos(number);
    setMostrar(false);
  }

  return (
    <>
      <Element name="casas" className={style.casasContenedor}>
        <div className={style.contenedorMenu}>
          <button
            name="selectMenu"
            id="selectMenu"
            className={style.selectMenu}
            onClick={mostrarMenu}>
            Elige tu casa ▼
          </button>
          {mostrar === true && (
            <div className={style.opciónMenu}>
              <p
                className={`${style.selectCasa} ${style.gryffindor}`}
                onClick={() => elegirEscudo(0)}>
                Gryffindor
              </p>

              <p
                className={`${style.selectCasa} ${style.ravenclaw}`}
                onClick={() => elegirEscudo(1)}>
                Ravenclaw
              </p>

              <p
                className={`${style.selectCasa} ${style.hufflepuff}`}
                onClick={() => elegirEscudo(2)}>
                Hufflepuff
              </p>

              <p
                className={`${style.selectCasa} ${style.slytherin}`}
                onClick={() => elegirEscudo(3)}>
                Slytherin
              </p>
            </div>
          )}
        </div>
      </Element>

      
      {texto && texto[escudo] && (
        <div className={style.casasInfo}>
          <div className={style.contenedorImagen}>
            <img
              src={escudos[escudo].imagen}
              alt="Escudos"
              className={style.imagenEscudo}
            />
          </div>
          <div className={style.texto}>
            <div className={style.textoContainer}>
              <h2 className={style.casaNombre}>{texto[escudo].name}</h2>
              <h3 className={style.casaInfo}>
                <span className={style.casasInfoText}>Fundador:</span>{" "}
                {texto[escudo].founder}
              </h3>
              <h3 className={style.casaInfo}>
                <span className={style.casasInfoText}>animal:</span>{" "}
                {texto[escudo].animal}
              </h3>
              <h3 className={style.casaInfo}>
                <span className={style.casasInfoText}>fantasma:</span>{" "}
                {texto[escudo].ghost}
              </h3>
              <h3 className={style.casaInfo}>
                <span className={style.casasInfoText}>ubicación:</span>{" "}
                {texto[escudo].commonRoom}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Casas;
