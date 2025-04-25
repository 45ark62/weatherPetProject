import { Outlet } from "react-router-dom";
import styles from "@shared/styles/index.module.css";
import Header from "@/widgets/header";

function Layout() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
