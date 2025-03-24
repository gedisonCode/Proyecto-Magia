import React from "react";
import style from "./navbar.module.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <>
      <nav className={style.navContenedor}>
        <Link to="casas" smooth={true} duration={500} className={style.navLink}>
          hogwarts
        </Link>

        <Link to="logo" smooth={true} duration={200} className={style.navLogo}>
        <img
          src="./imagenes/casas/Hogwartscrest.webp"
          alt="Logo-hogwarts"
          className={style.navLogo}
        />
        </Link>
        <Link
          to="estudiantes"
          smooth={true}
          duration={500}
          className={style.navLink}>
          estudiantes
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
