import { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { api } from "../../services";
import { useNavigate } from "react-router-dom";

import {
  ContainerForm,
  ContainerInput,
  FooterContainer,
  Main,
  SubmitButton,
} from "./styles";
import { Modal } from "../../components/Modal";

interface Users {
  email: string;
  password: string;
}

const loginValidationSchema = z.object({
  email: z
    .string()
    .email()
    .min(5, "Seu email deve ter pelo menos 5 caracteres"),
  password: z.string().min(5, "Senha deve ter pelo menos 5 caracteres"),
});

export function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Users>({
    resolver: zodResolver(loginValidationSchema),
  });

  const navigate = useNavigate();

  const handleLogin: SubmitHandler<Users> = async (data) => {
    try {
      api
        .get(`/users?email=${data.email}&password=${data.password}`)

        .then((response) => {
          if (response.data.length === 0) {
            console.log("não tem!");
          } else {
            console.log("achou");
          }
        });
    } catch (error) {
      console.error("Erro ao realizar login ou chamada à API:", error);
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Main>
      <ContainerForm>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <ContainerInput>
            <label>Seu e-mail</label>
            <input
              type="email"
              placeholder="contato@gmail.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="textError">{errors.email.message}</p>
            )}
          </ContainerInput>
          <ContainerInput>
            <label>Sua senha</label>
            <input
              type="password"
              placeholder="123"
              {...register("password")}
            />
            {errors.password && (
              <p className="textError">{errors.password.message}</p>
            )}
            <SubmitButton>Logar</SubmitButton>
          </ContainerInput>
        </form>
        <FooterContainer>
          <p>Ainda não tem uma conta?</p>
          <button onClick={openModal} className="buttonRegister">
            Cadastre-se
          </button>
        </FooterContainer>
        <Modal isOpen={modalOpen} closeModal={closeModal} />
      </ContainerForm>
    </Main>
  );
}
