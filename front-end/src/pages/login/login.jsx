import styles from "./style.module.scss";
import Vector from "../../assets/Vector.png";
import { LoginForm } from "../../components/forms/loginForm/loginForm";

export const LoginPage = () => {

  return (
    <main>
      <div className="container">
        <div className={styles.flexBox}>
          <img src={Vector} alt="Vector image" />
          <LoginForm />
        </div>
      </div>
    </main>
  );
};
