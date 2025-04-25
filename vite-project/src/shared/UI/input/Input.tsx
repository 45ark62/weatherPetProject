
import styles from "./styles.module.css";

function Input({ placeholder, onChange }: any) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={styles.input}
      onChange={onChange}
    ></input>
  );
}

export default Input;
