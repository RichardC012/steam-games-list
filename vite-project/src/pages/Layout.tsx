import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <div className={styles.LayoutDiv}>
        <header className={styles.LayoutHeader}>
          <h1>GameLog</h1>
          <div className={styles.AuthButtonDiv}>
            <button className={styles.LogInButton}>
              <h3>Log In</h3>
            </button>
            <button className={styles.SignUpButton}>
              <h3>Sign Up</h3>
            </button>
          </div>
        </header>

        <main className={styles.LayoutMain}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
