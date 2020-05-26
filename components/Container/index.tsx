import styles from "./container.module.css";
import Header from "../Header/";

export default function Container({ children, bg = "bg3" }) {
  return (
    <section
      className={styles.container}
      style={{
        background: `url('/img/${bg}.jpg') no-repeat center`,
      }}
    >
      <Header />
      {children}
    </section>
  );
}
