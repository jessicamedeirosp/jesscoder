import {
  FaAward,
  FaCertificate,
  FaList,
  FaLock,
  FaPlay,
  FaChalkboardUser,
  FaClock,
  FaPhone,
  FaBookOpen,
  FaChevronDown,
} from "react-icons/fa6";
import styles from "../../styles/lp.module.css";
import logoBrancoImage from "../../assets/logo-branco.png";
import perfilImage from "../../assets/perfil.png";
import seguidoresImage from "../../assets/seguidores.png";
import linkedinImage from "../../assets/linkedin.png";
import vaga1Image from "../../assets/vaga1.png";
import vaga2Image from "../../assets/vaga2.png";
import vaga3Image from "../../assets/vaga3.png";
import vaga4Image from "../../assets/vaga4.png";
import vaga5Image from "../../assets/vaga5.png";
import { Dispatch, SetStateAction, useEffect } from "react";
import Image from "next/image";
import { QuestionItem } from "../../components/questionItem";
export interface LPProps {
  setIsNoBlog: Dispatch<SetStateAction<boolean>>;
}

export default function LP({ setIsNoBlog }: LPProps) {
  const questions = [
    {
      name: "Pra quem é esse curso?",
      icon: <FaChevronDown />,
      resp: " Destinado a qualquer pessoa que já possua habilidades técnicas em qualquer área de tecnologia.",
    },
    {
      name: "Para quem este curso não é indicado?",
      icon: <FaChevronDown />,
      resp: "Este curso não é recomendado para aqueles que ainda não possuem habilidades técnicas.",
    },
    {
      name: "O curso é adequado para quem não é desenvolvedor?",
      icon: <FaChevronDown />,
      resp: "Qualquer pessoa da área tech pode participar do curso, no entanto, se você é um desenvolvedor, há aulas específicas voltadas para sua área.",
    },
    {
      name: "Formas de pagamento",
      icon: <FaChevronDown />,
      resp: "Oferecemos opções de pagamento via cartão de crédito, boleto ou Pix.",
    },
    {
      name: "Existe certificado?",
      icon: <FaChevronDown />,
      resp: "Após a conclusão do curso, será fornecido um certificado.",
    },
    {
      name: "Existe garantia?",
      icon: <FaChevronDown />,
      resp: "Sim, oferecemos uma garantia de 7 dias! Se você adquiriu o curso e percebeu que não atende às suas expectativas, basta solicitar o reembolso.",
    },
    {
      name: "Qual é o valor do curso?",
      icon: <FaChevronDown />,
      resp: "Parcelado em 12x de R$ 29,99 ou pagamento à vista de R$ 359,88.",
    },
    {
      name: "Como faço para acessar o curso?",
      icon: <FaChevronDown />,
      resp: "O acesso ao curso é realizado através da plataforma Hotmart, que dispõe de um site e um aplicativo, permitindo acesso de qualquer lugar.",
    },
    {
      name: "Todos os módulos estão disponíveis imediatamente ou serão liberados gradativamente?",
      icon: <FaChevronDown />,
      resp: "Os módulos 1, 2 e 3 estarão disponíveis imediatamente após a compra, enquanto os módulos 4 e 5 serão disponibilizados na plataforma durante o primeiro trimestre de 2024.",
    },
  ];
  useEffect(() => {
    setIsNoBlog(true);
  }, [setIsNoBlog]);

  return (
    <div className={styles.lp}>
      <div>
        <section className={styles.video__container}>
          <div className={styles.container}>
            <Image src={logoBrancoImage} alt="minha primeira vaga tech" />
            <iframe
              width="660"
              height="415"
              src="https://www.youtube.com/embed/x6BnP1ksYFE?si=DXQK5HY7K4DBWa8N"
              title="Minha Primeira Vaga tech"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            {/* <iframe
              width="660"
              height="415"
              src="https://www.youtube.com/embed/OmKpz-Wi2Zs?si=SmkFnosfwFfLwAuF"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe> */}
            <a
              href="https://pay.hotmart.com/X90322730L"
              className={styles.video__button}
            >
              Conseguir Minha Primeira Vaga Tech
            </a>
          </div>
        </section>
        <section
          className={`${styles.guarantees__container} ${styles.container}`}
        >
          <div className={styles.guarantees__item}>
            <FaPlay />
            &nbsp;&nbsp;&nbsp; Acesso Imediato
          </div>
          <div className={styles.guarantees__item}>
            <FaAward />
            &nbsp;&nbsp;&nbsp;7 dias de garantia
          </div>
          <div className={styles.guarantees__item}>
            <FaLock />
            &nbsp;&nbsp;&nbsp;Pagamento Seguro
          </div>
          <div className={styles.guarantees__item}>
            <FaCertificate />
            &nbsp;&nbsp;&nbsp;Certificado de Conclusão
          </div>
        </section>
        <section className={`${styles.aboutMe__container} ${styles.container}`}>
          <Image
            src={perfilImage}
            alt="Mulher branca, cabelos castanhos, olhos castanhos, rosto aredontado"
            className={styles.aboutMe__image}
          />
          <ul>
            <li>Jessica Medeiros (Jess)</li>
            <li>Desenvolvedora Web a +9 anos</li>
            <li>Tecnóloga em Segurança da Informação</li>
            <li>Instrutora Full-Stack</li>
            <li>Já Trabalho pra empresas as Hinode, Totvs e B8one</li>
            <li>Ganha a vida como programadora</li>
            <li>+6 mil seguidores no Linkedin</li>
          </ul>
        </section>
        <section
          className={`${styles.container} ${styles.proposta__container}`}
        >
          <h3>Linkedin de Sucesso</h3>
          <Image src={seguidoresImage} alt="" />
          <Image src={linkedinImage} alt="" />
        </section>
        <section className={`${styles.container} ${styles.vagas__container}`}>
          <h3>Propostas Recebidas</h3>
          <Image src={vaga1Image} alt="" />
          <Image src={vaga2Image} alt="" />
          <Image src={vaga3Image} alt="" />
          <Image src={vaga4Image} alt="" />
          <Image src={vaga5Image} alt="" />
        </section>
        <section className={`${styles.modules__container} ${styles.container}`}>
          <h2 className={styles.modules__header}>Módulos</h2>

          <div className={styles.modules__body}>
            <div className={styles.modules__item}>
              <h3>
                <span>1</span>Entenda o Mercado Tech
              </h3>
              <p>
                Neste módulo, você terá a oportunidade de compreender o
                funcionamento do mercado tecnológico, explorar os impactos da
                COVID-19 nesse setor e aprender estratégias para se destacar em
                meio à constante instabilidade.
              </p>
            </div>
            <div className={styles.modules__item}>
              <h3>
                <span>2</span>Seja Visto
              </h3>
              <p>
                Neste módulo, você irá aprimorar a elaboração do seu currículo,
                a construção do seu portfólio, a otimização do seu perfil no
                GitHub e LinkedIn da melhor maneira possível. Além disso,
                aprenderá estratégias para desenvolver uma rede de contatos com
                as pessoas certas e a destacar-se diante do público-alvo
                adequado.
              </p>
            </div>
            <div className={styles.modules__item}>
              <h3>
                <span>3</span>Seja Contratado
              </h3>
              <p>
                Neste módulo, você se dedicará à preparação para entrevistas,
                explorando as perguntas mais comuns. Se você é programador,
                receberá dicas valiosas sobre live coding e projetos práticos
                para aprimorar suas habilidades.
              </p>
            </div>
            <div className={styles.modules__item}>
              <h3>
                <span>4</span>Habilidades Comportamentais
              </h3>
              <p>
                Neste módulo, dedicaremos nossa atenção às suas habilidades
                comportamentais, pois no universo tech, não se trata apenas de
                habilidades técnicas. Você aprenderá a organizar-se para o
                trabalho remoto, a aprimorar sua comunicação, a estabelecer uma
                rotina eficiente, a resolver problemas de maneira eficaz e a
                justificar suas decisões técnicas.
              </p>
            </div>
            <div className={styles.modules__item}>
              <h3>
                <span>5</span>Evolua na carreira
              </h3>
              <p>
                Desenvolva sua marca pessoal, avance em sua trajetória dentro da
                empresa, explore novas oportunidades e aprofunde seus
                conhecimentos em negócios.
              </p>
            </div>
          </div>
        </section>
        <section
          className={`${styles.benefits__container} ${styles.container}`}
        >
          <h2>Tudo que você precisa para sua primeira vaga tech!!</h2>
          <ul>
            <li>
              <FaList />
              &nbsp;&nbsp;&nbsp;5 Módulos
            </li>
            <li>
              <FaChalkboardUser />
              &nbsp;&nbsp;&nbsp;+24 Aulas
            </li>
            <li>
              <FaClock />
              &nbsp;&nbsp;&nbsp;+5 horas
            </li>
            <li>
              <FaPlay />
              &nbsp;&nbsp;&nbsp;Acesso vitalício
            </li>
            <li>
              <FaPhone />
              &nbsp;&nbsp;&nbsp;Suporte
            </li>
            <li>
              <FaBookOpen />
              &nbsp;&nbsp;&nbsp;Materiais complementares
            </li>
            <li>
              <FaCertificate />
              &nbsp;&nbsp;&nbsp;Certificado
            </li>
          </ul>
        </section>
        <section
          className={`${styles.questions__container} ${styles.container}`}
        >
          {questions.map((item, index) => (
            <QuestionItem key={index} item={item} />
          ))}
        </section>
      </div>
      <footer className={styles.footer__container}>
        <div className={styles.container}>
          <p>
            &copy; 2024 Desenvolvido por Jess.Coder. Todos os Direitos
            Reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
