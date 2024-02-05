import { useState } from "react";
import styles from "../styles/lp.module.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
export function QuestionItem({ item }: any) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${styles.questions__item} ${toggle && styles.active}`}>
      <h3 onClick={() => setToggle(!toggle)}>
        {item.name}
        {toggle ? <FaChevronUp /> : <FaChevronDown />}
      </h3>
      <p>{item.resp}</p>
    </div>
  );
}
