import {
  PiGithubLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiYoutubeLogo,
} from "react-icons/pi";
import styles from "../../styles/about.module.css";
import Image from "next/image";
import perfilImage from "../../assets/perfil.jpeg";
import { Dispatch, SetStateAction } from "react";
export interface AboutProps {
  theme: string;
}

export default function About({ theme }: AboutProps) {
  return (
    <div className={`${styles.about} ${styles[theme]}`}>
      <div className={`${styles.about__content} content-flex`}>
        <div className={styles.about__imageContainer}>
          <Image
            src={perfilImage}
            alt="mulher branca com cabelos castanhos, rosto redondo, com toca e blusa na cor bege"
            className={styles.about__image}
          />
        </div>
        <div className={styles.about__wrapper}>
          <h1 className={`content-flex ${styles.about__username}`}>
            Jéssica Medeiros <span className={styles.badge}>@jess.coder</span>
          </h1>
          <h2>
            Frontend <i>(9+ xp)</i> | Backend <i>(1+ xp)</i>
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
      <p className={styles.about__description}>
        Sou completamente apaixonada por programação e ensinar e a oportunidade
        de unir essas duas paixões é incrível.
      </p>
      <hr />

      <h2>Experiêcias</h2>
      <p>
        <b
          style={{
            marginBottom: "8px",
            display: "block",
            textTransform: "uppercase",
          }}
        >
          Instrutora de Front End -{" "}
          <a href="https://cubos.academy/" target="_blank">
            Cubos Academy
          </a>{" "}
          (03/2022 - Atual)
        </b>
        Como Instrutora Full Stack, meu dia a dia é ministrar aulas de Frontend
        (HTML, CSS, Javascript, Typescript, ReactJS) e Backend (Javascript,
        NodeJS, Postgress, TypeORM e Typescript POO), auxiliar os alunos nas
        dúvidas, desenvolver materiais didáticos, realizar code review de
        desafios dos alunos, ajudar na melhoria da emenda do curso, criar testes
        automatizados para os desafios, além de desenvolver sistemas e
        apresentar em workshops.
      </p>
      <p>
        <b
          style={{
            marginBottom: "8px",
            display: "block",
            textTransform: "uppercase",
          }}
        >
          Desenvolvedora Front End -{" "}
          <a href="https://www.b8one.com/" target="_blank">
            B8One
          </a>{" "}
          (09/2021 - 03/2022)
        </b>
        Na qualidade de Desenvolvedora Frontend com expertise em VTEX CMS, atuei
        de forma crucial na equipe da empresa Madesa, dedicando-me às melhorias
        do e-commerce. Minhas responsabilidades eram, implementar novas
        funcionalidades, aplicar novas regras de negócios e resolver bugs
        existentes, utilizando as tecnologias JavaScript e ReactJS.
      </p>
      <p>
        <b
          style={{
            marginBottom: "8px",
            display: "block",
            textTransform: "uppercase",
          }}
        >
          Desenvolvedora Front End -{" "}
          <a href="https://www.agencia2bdigital.com.br/" target="_blank">
            2b (TOTVS)
          </a>{" "}
          (03/2021 - 09/2021)
        </b>
        Como Desenvolvedora Frontend, integrei a equipe de implementação e tive
        a oportunidade de criar e-commerce do zero para uma variedade de
        clientes, do início até a fase de produção, usando as tecnologias VueJS,
        Vuex e VTEX CMS.
      </p>
      <p>
        <b
          style={{
            marginBottom: "8px",
            display: "block",
            textTransform: "uppercase",
          }}
        >
          Desenvolvedora FullStack -{" "}
          <a href="https://grupohinode.com/" target="_blank">
            KPlay (HinodeLabs)
          </a>{" "}
          (06/2015 - 11/2020)
        </b>
        Na minha função como desenvolvedora Frontend, assumi a responsabilidade
        integral pela parte visual dos e-commerces, sistemas ERP e sistemas de
        franqueados. Além disso, contribui para as tarefas relacionadas ao
        backend, empregando um amplo conjunto de tecnologias que inclui PHP,
        Zend Framework, HTML, CSS, Bootstrap, JavaScript e Jquery.
      </p>
      <h2>Formação</h2>
      <p>- Segurança da Informação - Fatec (2015-2018)</p>
      <p>- Técnico em Informatica - Etec (2011-2015)</p>
      <h3>Formações Complementares</h3>
      <p>- Trilha Ignite (ReactJS e NodeJS) - Rocketseat</p>
      <p>- Curso React e Redux - Leonardo Moura Leitão</p>
      <p>
        - ReactJS, Hooks, Recoil, TDD, Clean Architecture, SOLID - Rodrigo
        Manguinho
      </p>
      <p>- Figma - Felipe Santana</p>

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
