import { useForm } from "react-hook-form";
import styles from "./style.module.scss"
import { LoginFormSchema } from "./formSchemaLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../input/input"

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginFormSchema),
  });
  const submit = (formData) => {
    console.log(formData);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)}>
      <div>
        <h1 className="title one">Acesse o sistema</h1>
        <div>
          <p className="paragraph">Preencha para acessar o sistema</p>
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
        <button type="submit" className="btn join">Entrar</button>
      </div>
      <div className={styles.footer}>
        <span>Ou</span>
        <p>Cadastre -se</p>
      </div>
    </form>
  );
};
