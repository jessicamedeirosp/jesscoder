"use client";
import Image from "next/image";
import whatsapp from "../assets/whatsImage.png";
import styles from "../styles/whatsapp.module.css";

export function WhatsButton() {
  return (
    <a
      className={styles["whatsbutton-container"]}
      href="https://api.whatsapp.com/send?phone=5514998521149&text=Olá Jess, quero saber mais sobre o curso Minha Primeira Vaga tech!."
      target="_blank"
    >
      <Image src={whatsapp} alt="Whatsapp button" height={100} width={100} />
    </a>
  );
}
