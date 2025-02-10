import Form from "./component/form/form";
import styles from "./index.module.scss";

export default function Home() {
  
  return (
    <>
      <div className={styles.flex}>
        <Form />
      </div>
    </>
  );
}
