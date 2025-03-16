import React from "react";
import style from "./navbar.module.css";

function Navbar() {
  return (
    <>
      <nav className={style.navContenedor}>
        <a href="#" className={style.navLink}>
          hogwarts
        </a>

        <img
          src="./imagenes/casas/Hogwartscrest.webp"
          alt="Logo-hogwarts"
          className={style.navLogo}
        />

        <a href="#" className={style.navLink}>
          estudiantes
        </a>
      </nav>
    </>
  );
}

export default Navbar;
