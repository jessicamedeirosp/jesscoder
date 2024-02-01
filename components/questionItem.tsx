import { useState } from "react";
import styles from "../styles/lp.module.css";
export function QuestionItem({ item }: any) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${styles.questions__item} ${toggle && styles.active}`}>
      <h3 onClick={() => setToggle(!toggle)}>
        {item.name}
        {item.icon}
      </h3>
      <p>{item.resp}</p>
    </div>
  );
}
