import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import style from "./estudiantes.module.css";
import sinFondo from "/imagenes/sinFoto.webp";

function Estudiantes() {
  const [mostrar, setMostrar] = useState(false);
  const [estudiante, setEstudiante] = useState([]);
  const [casa, setCasa] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(4);
  const url = "https://hp-api.onrender.com/api/characters/students";

  function cargarMas() {
    setMin(min + 4);
    setMax(max + 4);
    if (max > casa.length - 1) {
      setMin(0);
      setMax(4);
    }
  }

  function mostrarMenu() {
    setMostrar(!mostrar);
  }

  function casaGryffindor() {
    const gryffindor = estudiante.filter(
      (personaje) => personaje.house === "Gryffindor"
    );
    setCasa(gryffindor);
    setMostrar(false);
  }

  function casaRavenclaw() {
    const ravenClaw = estudiante.filter(
      (personaje) => personaje.house === "Ravenclaw"
    );
    setCasa(ravenClaw);
    setMostrar(false);
  }

  function casaHufflepuff() {
    const hufflePuff = estudiante.filter(
      (personaje) => personaje.house === "Hufflepuff"
    );
    setCasa(hufflePuff);
    setMostrar(false);
  }
  
  function casaSlytherin() {
    const slytherin = estudiante.filter(
      (personaje) => personaje.house === "Slytherin"
    );
    setCasa(slytherin);
    setMostrar(false);
  }

  useEffect(() => {
    async function fetchEstudiantes() {
      const respuesta = await fetch(url);
      if (!respuesta.ok) throw new Error("Hubo un error");
      const data = await respuesta.json();
      setEstudiante(data);

      const gryffindor = data.filter(
        (personaje) => personaje.house === "Gryffindor"
      );
      setCasa(gryffindor);
    }
    fetchEstudiantes();
  }, []);

  return (
    <>
      <Element name="estudiantes" className={style.contenedor}>
        <div className={style.contenedorMenu}>
          <button
            name="selectMenu"
            id="selectMenu"
            className={style.selectMenu}
            onClick={mostrarMenu}>
            Estudiantes ▼
          </button>
          {mostrar === true && (
            <div className={style.opciónMenu}>
              <p
                className={`${style.selectCasa} ${style.gryffindor}`}
                onClick={() => casaGryffindor()}>
                Gryffindor
              </p>

              <p
                className={`${style.selectCasa} ${style.ravenclaw}`}
                onClick={() => casaRavenclaw()}>
                Ravenclaw
              </p>

              <p
                className={`${style.selectCasa} ${style.hufflepuff}`}
                onClick={() => casaHufflepuff()}>
                Hufflepuff
              </p>

              <p
                className={`${style.selectCasa} ${style.slytherin}`}
                onClick={() => casaSlytherin()}>
                Slytherin
              </p>
            </div>
          )}
        </div>
      </Element>

      <div className={style.contenedorTarjetas}>
        {casa &&
          casa.slice(min, max).map((item, index) => (
            <div key={index} className={style.tarjeta}>
              <div className={style.tarjetaImg}>
                <img
                  src={item.image || sinFondo}
                  alt="imagen-personaje"
                  className={style.imagenPersonaje}
                />
              </div>
              <div className={style.tarjetaTexto}>
                <h2 className={style.nombrePersonaje}>{item.name}</h2>
                <p>{item.house}</p>
                <p>{item.gender}</p>
              </div>
            </div>
          ))}
        <div className={style.botonMas}>
          <button className={style.cargarMas} onClick={() => cargarMas()}>
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default Estudiantes;
