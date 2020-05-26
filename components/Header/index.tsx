import HeaderLink from "./HeaderLink";
import styles from "./header.module.css";
import Link from "next/link";
export default function Header() {
  return (
    <header>
      <nav className={styles.header}>
        <Link href="/">
          <a>
            <img src="img/logoPyg.svg" id={styles.headerLogo} />
          </a>
        </Link>
        <HeaderLink text="Projects" href="/projects" />

        <HeaderLink
          icon={"img/behance.png"}
          text="Behance"
          href="//www.behance.net/puntoyguion"
        />

        <HeaderLink
          icon={"img/github-circle.png"}
          text="Github"
          href="//github.com/oscarCrespo"
        />
        <HeaderLink text="Contacto" href="/contact" />
      </nav>
    </header>
  );
}
