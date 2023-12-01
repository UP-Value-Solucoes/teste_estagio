import { useForm } from "react-hook-form";
import styles from "./style.module.scss"
import { LoginFormSchema } from "./formSchemaLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../input/input"
import { api } from "../../../services/api";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginFormSchema),
  });
  const submit = async (formData) => {
    
    try {
      const token = await api.post("/login", formData);
      toast.success('Login feito com sucesso')
      
      navigate("/register")
    } catch (error) {
        console.log(error)
        toast.error(error.response.data.message)
    }
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
      />
      <Input
        label="Senha"
        type="password"
        {...register("password")}
        error={errors.password}
        placeholder="Digite sua senha"
        
      />
      <div>
        <button type="submit" className="btn join">Entrar</button>
        
      </div>
      <div className={styles.footer}>
        <span>Ou</span>
        
        <Link className={styles.teste} to={"/register"}>
          cadastra -se
        </Link>
      </div>
    </form>
  );
};
