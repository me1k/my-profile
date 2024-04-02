import { PropsWithChildren } from "react";
import styles from "./page.module.css";

type Props = {
  handleClick: (path: string) => void;
};

const Glasspanel = ({ handleClick, children }: PropsWithChildren<Props>) => {
  return <div className={styles.glasspanel}>{children}</div>;
};

export default Glasspanel;
