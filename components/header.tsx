import Link from "next/link";
import styles from "../styles/header.module.css";
import { PiMoonBold, PiSunBold } from "react-icons/pi";

export interface HeaderProps {
  theme: string;
  handlerTheme: () => void;
}

export function Header({ theme, handlerTheme }: HeaderProps) {
  return (
    <header className={`${styles.header} content-flex-center`}>
      <nav className={`${styles.header__nav} content-flex`}>
        <Link href="/" className={`${styles.header__navLink} content-flex`}>
          Home
        </Link>
        <Link
          href="/about"
          className={`${styles.header__navLink} content-flex`}
        >
          Sobre mim
        </Link>
        <Link
          href="/helpme"
          className={`${styles.header__navLink} content-flex`}
        >
          Apoie
        </Link>
        {theme === "light" ? (
          <PiMoonBold
            size={24}
            style={{ cursor: "pointer" }}
            onClick={handlerTheme}
          />
        ) : (
          <PiSunBold
            size={24}
            style={{ cursor: "pointer" }}
            onClick={handlerTheme}
          />
        )}
      </nav>
    </header>
  );
}
