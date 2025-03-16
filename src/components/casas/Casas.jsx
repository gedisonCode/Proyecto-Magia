import React from "react";
import style from "./casas.module.css";
import { Element } from "react-scroll";

function Casas() {
  return (
    <>
      <Element name="casas" className={style.casasContenedor}>
      </Element>
    </>
  );
}
export default Casas;
