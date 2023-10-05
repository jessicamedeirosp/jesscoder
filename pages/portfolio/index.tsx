import {
  BsCode,
  BsEnvelope,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import styles from "../../styles/portfolio.module.css";
import Image from "next/image";
import portfolioImage from "../../assets/p1.png";
import portfolio2Image from "../../assets/p2.png";
import portfolio3Image from "../../assets/p3.png";
import perfilImage from "../../assets/perfil.jpeg";
import { Dispatch, SetStateAction, useEffect } from "react";
export interface PortfolioProps {
  setIsPortfolio: Dispatch<SetStateAction<boolean>>;
}

export default function Portfolio({ setIsPortfolio }: PortfolioProps) {
  useEffect(() => {
    setIsPortfolio(true);
  }, []);
  return (
    <div>
      <header className={styles.container}>
        <nav className={`flex gap-4 ${styles.navbar}`}>
          <a
            href="#"
            className={`right-auto ${styles.logo} flex gap-2 align-center`}
          >
            <BsCode />
            Jéssica Medeiros
          </a>
          <a href="#home">Home</a>
          <a href="#stack">Stack</a>
          <a href="#portfolio">Portifólio</a>
          <a href="https://jesscoder.com.br">Blog</a>
          <a href="#contato">Contato</a>
          <a href="https://github.com/jessicamedeirosp">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/jessicamedeirospocarli/">
            <BsLinkedin />
          </a>
          <a href="https://instagram.com/jess.coder">
            <BsInstagram />
          </a>
          <a href="https://www.youtube.com/jesscoderOficial">
            <BsYoutube />
          </a>
        </nav>
      </header>
      <main>
        <section
          className={`${styles.banner} flex justify-between align-center ${styles.container}`}
        >
          <h1 className={styles.banner__title}>
            Olá 👋
            <br />
            Eu sou a Jéssica
            <br />
            Sou Desenvolvedor Web
          </h1>

          <div className={styles.banner__image}>
            <Image src={perfilImage} alt="" width={500} />
          </div>
        </section>
        <section id="stack" className={styles.about}>
          <div className={styles.container}>
            <h2>Minha Stack</h2>
            <p>Tecnologias que uso nos meus projetos</p>
            <img
              src="https://skillicons.dev/icons?i=html,css,js,typescript,react,nextjs,sass,nodejs,postgres"
              height="80px"
              alt=""
            />
          </div>
        </section>
        <section
          id="portfolio"
          className={`${styles.portfolio} ${styles.container}`}
        >
          <h2>Meu Portifólio</h2>
          <p>Aqui estão alguns dos projetos que desenvolvi</p>
          <div className="projects flex wrap gap-6 justify-center">
            <div className={styles.project}>
              <Image
                src={portfolioImage}
                alt=""
                width={956}
                className={styles.project__image}
              />
              <h3>Blog Jess.Coder</h3>
              <p>
                O projeto foi desenvolvido utilizando as tecnologias Typescript,
                Next.js, ReactJS e Prismic. Ele apresenta uma lista de artigos
                com paginação, detalhamento individual de cada artigo, opção de
                mudança de tema e páginas dedicadas a "Sobre Mim" e "Apoie".
                Além disso, o design é totalmente responsivo, adaptando-se a
                diversos dispositivos.
                <br />
                <br />
                <a href="https:/jesscoder.com.br">Site</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://github.com/jessicamedeirosp/jesscoder">
                  Repositório
                </a>
              </p>
            </div>
            <div className={styles.project}>
              <Image
                src={portfolio2Image}
                alt=""
                width={956}
                className={styles.project__image}
              />
              <h3>JessDoces</h3>
              <p>
                JessDoces é um sistema de catálogo de doces, onde o usuário
                consegue explorar uma ampla variedade de doces e adicionar os
                seus favoritos no carrinho de compras com apenas algum clique,
                Depois, é só clicar em "finalizar pedido" que o pedido será
                enviado via WhatsApp. O projeto é responsivo e foi desenvolvido
                utilizando ReactJS, Typescript, Styles Components, Sass e Vite.
                <br />
                <br />
                <a href="https://jade-toffee-762921.netlify.app/">Site</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://github.com/jessicamedeirosp/jessdoces-catalogo-online">
                  Repositório
                </a>
              </p>
            </div>
            <div className={styles.project}>
              <Image
                src={portfolio3Image}
                alt=""
                width={956}
                className={styles.project__image}
              />
              <h3>Transform App</h3>
              <p>
                Transform app é um projeto desenvolvido com HTML, CSS e JS
                (vue), com o objetivo de manipular/transformar strings/textos.
                Simples, fácil e prático.
                <br />
                <br />
                <a href="https://jessicamedeirosp.github.io/transform-app/">
                  Site
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://github.com/jessicamedeirosp/transform-app">
                  Repositório
                </a>
              </p>
            </div>
          </div>
        </section>
        <section className={styles.contact} id="contato">
          <div className={styles.container}>
            <div
              className={`${styles.contact__infos} flex justify-between align-center`}
            >
              <ul
                className={`${styles["contact__social-midias"]} ${styles["social-midias"]}`}
              >
                <a
                  href="https://github.com/jessicamedeirosp"
                  className="flex gap-2 align-center"
                >
                  <BsGithub />
                  @jessicamedeirosp
                </a>
                <a
                  href="https://www.linkedin.com/in/jessicamedeirospocarli/"
                  className="flex gap-2 align-center"
                >
                  <BsLinkedin />
                  @jessicamedeirosp
                </a>
                <a
                  href="https://instagram.com/jess.coder"
                  className="flex gap-2 align-center"
                >
                  <BsInstagram />
                  @jess.coder
                </a>
              </ul>
              <ul
                className={`${styles["contact__social-midias"]} ${styles["social-midias"]}`}
              >
                <a
                  href="https://www.youtube.com/jesscoderOficial"
                  className="flex gap-2 align-center"
                >
                  <BsYoutube />
                  @jesscoderoficial
                </a>
                <a
                  href="mailto:jessicamedeirosp96@gmail.com"
                  className="flex gap-2 align-center"
                >
                  <BsEnvelope />
                  jessicamedeirosp96@gmail.com
                </a>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer className={`${styles.container} ${styles.footer}`}>
        <i className="bi bi-c-circle"></i>
        Todos os Diretos Reservados&nbsp;
        <a href="https://jesscoder.com">Jess.Coder</a>
      </footer>
    </div>
  );
}
