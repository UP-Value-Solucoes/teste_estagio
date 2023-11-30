import { useForm } from "react-hook-form";
import { Input } from "../../components/input/input";
import { LoginFormSchema } from "./formSchemaLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./style.module.scss";
import Logo from "../../assets/Logo.png";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginFormSchema),
  });
  return (
    <main>
      <div>
        <img src={Logo} alt="" />
      </div>
      <div className="container sm">
        <div className= {styles.flexBox}>
        {/* <img src={Logo} alt="" /> */}
          <form onSubmit={handleSubmit}>
            <div>
              <h1 className="title titleForm">Acesse o sistema</h1>
              <div>
                <h2>Preencha para acessar o sistema</h2>
              </div>
            </div>
           
            <Input
              label="Email"
              type="text"
              {...register("email")}
              placeholder="Digite seu email"
              error={errors.email}
              // disabled={loading}
            />
            <Input
              label="Senha"
              type="password"
              {...register("password")}
              error={errors.password}
              placeholder="Digite sua senha"
              // disabled={loading}
            />
            <div>
              <button className="btn join">Entrar</button>
            </div>
            <div className={styles.footer}>
                <span>Ou</span>
                <p>Cadastre -se</p>
              </div>
          </form>
        </div>
      </div>
    </main>
  );
};
