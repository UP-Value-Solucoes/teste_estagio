import { RegisterForm } from "../../components/forms/registerForm/registerForm";
import styles from "./style.module.scss";

export const RegisterPage = () => {

  return (
    <main>
      <div className="container sm">
        <div className={styles.flexBox}>
          <RegisterForm />
        </div>
      </div>
    </main>
  );
};
