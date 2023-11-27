import { useEffect, useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { api } from "../../src/services";

import {
  ContainerForm,
  ContainerInput,
  FooterContainer,
  Main,
  SubmitButton,
} from "./styles";

interface Users {
  email: string;
  password: string;
}

const loginValidationSchema = z.object({
  email: z.string().min(5, "Seu email deve ter pelo menos 5 caracteres"),
  password: z.string().min(5, "Senha deve ter pelo menos 5 caracteres"),
});

export function Home() {
  const [user, setUser] = useState<Users[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Users>({
    resolver: zodResolver(loginValidationSchema),
  });

  const handleLogin: SubmitHandler<Users> = async (data) => {
    try {
      const userAuthenticated = user.find(
        (user) => user.email === data.email && user.password === data.password
      );

      if (userAuthenticated) {
        console.log("Login bem-sucedido!", data);
      } else {
        console.error("Credenciais incorretas");
      }
    } catch (error) {
      console.error("Erro ao realizar login ou chamada à API:", error);
    }
  };

  useEffect(() => {
    api
      .get("/users")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Main>
      <ContainerForm>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <ContainerInput>
            <label>Seu e-mail</label>
            <input
              type="text"
              placeholder="contato@gmail.com"
              {...register("email")}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </ContainerInput>
          <ContainerInput>
            <label>Sua senha</label>
            <input
              type="password"
              placeholder="123"
              {...register("password")}
            />
            <SubmitButton>Logar</SubmitButton>
          </ContainerInput>

          <FooterContainer>
            <p>Ainda não tem uma conta?</p>
            <button>Cadastre-se</button>
          </FooterContainer>
        </form>
      </ContainerForm>
    </Main>
  );
}
