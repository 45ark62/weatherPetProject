import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "../styles/index.module.css";
import Header from "./Header";

function Layout() {
  return (
    <>
     <Header/>
      <div className={styles.container}>
      <Outlet />
      </div>
     
      
    </>
  );
}

export default Layout;
