import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className={styles.logo}>
        <img src="./logo.jpg" className={styles.img} />
        WeatherPP
      </div>
      <div className={styles.navigationMenu}>
        {" "}
        <Link to="/">Главная</Link>
        <Link to="/search-history">История поиска</Link>
      </div>
    </header>
  );
}

export default Header;
