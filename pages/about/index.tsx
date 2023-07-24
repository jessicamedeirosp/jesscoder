import {
  PiGithubLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiYoutubeLogo,
} from "react-icons/pi";
import styles from "../../styles/about.module.css";
import Image from "next/image";
import perfilImage from "../../assets/perfil.jpeg";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={`${styles.about__content} content-flex`}>
        <Image
          src={perfilImage}
          alt="mulher branca com cabelos castanhos, rosto redondo, com toca e blusa na cor bege"
          className={styles.about__image}
        />
        <div className={styles.about__wrapper}>
          <h1 className={`content-flex ${styles.about__username}`}>
            Jéssica Medeiros <span className={styles.badge}>@jess.coder</span>
          </h1>
          <h2>
            Frontend <i>(+9 anos)</i> | Backend <i>(+1 ano)</i>
          </h2>

          <div className={`content-flex ${styles.badge__skills}`}>
            <span className={styles.badge}>HTML</span>
            <span className={styles.badge}>CSS</span>
            <span className={styles.badge}>Javascript</span>
            <span className={styles.badge}>Typescript</span>
            <span className={styles.badge}>ReactJS</span>
            <span className={styles.badge}>NextJS</span>
            <span className={styles.badge}>Sass</span>
            <span className={styles.badge}>Figma</span>
            <span className={styles.badge}>Cypress</span>
            <span className={styles.badge}>Jest</span>
            <span className={styles.badge}>NodeJS</span>
            <span className={styles.badge}>Postgress</span>
            <span className={styles.badge}>Vtex</span>
            <span className={styles.badge}>Vue.js</span>
            <span className={styles.badge}>Git</span>
            <span className={styles.badge}>Jquery</span>
            <span className={styles.badge}>Bootstrap</span>
            <span className={styles.badge}>Styled Component</span>
            <span className={styles.badge}>Tailwind</span>
            <span className={styles.badge}>Material UI</span>
          </div>
        </div>
      </div>
      <hr />
      <p className={styles.about__description}>
        Sou completamente apaixonada por programação e ensinar e a oportunidade
        de unir essas duas paixões é incrível.
      </p>
      <hr />
      <h2>Formação</h2>
      <p>Segurança da Informação - Fatec (2015-2018)</p>
      <p>Técnico em Informatica - Etec (2011-2015)</p>
      <h2>Experiêcias</h2>
      <p>
        FullStack | Instrutora -{" "}
        <a href="https://cubos.academy/" target="_blank">
          Cubos Academy
        </a>{" "}
        (2022-ATUAL)
      </p>
      <p>
        Frontend -{" "}
        <a href="https://www.b8one.com/" target="_blank">
          B8One
        </a>{" "}
        (2021-2022)
      </p>
      <p>
        Frontend -{" "}
        <a href="https://www.agencia2bdigital.com.br/" target="_blank">
          2b (TOTVS)
        </a>{" "}
        (2021-2021)
      </p>
      <p>
        Frontend -{" "}
        <a href="https://grupohinode.com/" target="_blank">
          KPlay (HinodeLabs)
        </a>{" "}
        (2015-2020)
      </p>
      <h3>Redes Sociais</h3>
      <div className={`content-flex ${styles.socialMidia}`}>
        <a
          href="https://www.linkedin.com/in/jessicamedeirospocarli/"
          target="_blank"
          rel="noreferrer"
        >
          <PiLinkedinLogo size={30} />
        </a>
        <a
          href="https://github.com/jessicamedeirosp"
          target="_blank"
          rel="noreferrer"
        >
          <PiGithubLogo size={30} />
        </a>
        <a
          href="https://www.instagram.com/jess.coder/"
          target="_blank"
          rel="noreferrer"
        >
          <PiInstagramLogo size={30} />
        </a>
        <a
          href="https://www.youtube.com/jesscoderOficial"
          target="_blank"
          rel="noreferrer"
        >
          <PiYoutubeLogo size={30} />
        </a>
      </div>
    </div>
  );
}
