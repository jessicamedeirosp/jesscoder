import Link from "next/link";
import styles from "../styles/header.module.css";
export function Header() {
  return (
    <header className={`${styles.header} content-flex-center`}>
      <nav className={`${styles.header__nav} content-flex`}>
        <Link href="/" className={`${styles.header__navLink} content-flex`}>
          Home
        </Link>
        <Link href="about" className={`${styles.header__navLink} content-flex`}>
          Sobre mim
        </Link>
        <Link
          href="helpme"
          className={`${styles.header__navLink} content-flex`}
        >
          Apoie
        </Link>
      </nav>
    </header>
  );
}
