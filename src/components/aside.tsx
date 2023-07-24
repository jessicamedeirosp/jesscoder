import {
  PiArrowUpBold,
  PiGithubLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiYoutubeLogo,
} from "react-icons/pi";
import styles from "../styles/aside.module.css";
import perfilImage from "../assets/perfil.jpeg";
import Image from "next/image";

export function Aside() {
  return (
    <aside
      className={`content-flex content-flex-center-column ${styles.aside}`}
    >
      <div className={styles.about}>
        <Image
          src={perfilImage}
          alt="mulher branca com cabelos castanhos, rosto redondo, com toca e blusa na cor bege"
          className={styles.about__image}
        />
        <p className={styles.about__name}>Jéssica Medeiros</p>
        <p className={styles.about__stack}>Full Stack</p>
        <p className={styles.about__description}>
          Sou Desenvolvedora desde 2015, atualmente, atuo como Instrutora Full
          Stack na Cubos Academy. Além disso, mantenho um canal no Youtube, onde
          compartilho meus conhecimentos e experiências no mundo da tecnologia.
        </p>
        <strong className="about___hardSkills">
          HTML | CSS | Javascript | Typescript | ReactJS | NextJS | Sass | Figma
          | Cypress | Jest | NodeJS | Postgress
        </strong>
        <p className={styles.about__contact}>contato@jesscoder.com.br</p>
        <div
          className={`content-flex content-flex-center ${styles.socialMidia}`}
        >
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
      <div className={styles.backToTop} onClick={() => window.scrollTo(0, 0)}>
        <PiArrowUpBold size={30} />
      </div>
    </aside>
  );
}
