import React from "react";
import style from "./header.module.css";
import { Element } from "react-scroll";
function Header() {
  return (
    <>
      <Element name="logo">
        <h1 className={style.headerTitle}>
          Potter
          <br /> Docs
        </h1>
        <div className={style.header}>
          <img
            src="./imagenes/Header.webp"
            alt="imagen header"
            className={style.headerImg}
          />
        </div>
      </Element>
    </>
  );
}

export default Header;
