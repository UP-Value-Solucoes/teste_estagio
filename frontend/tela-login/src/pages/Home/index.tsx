import { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { api } from "../../services";
import { useNavigate } from "react-router-dom";

import { Modal } from "../../components/Modal";
import { Input } from "../../components/Input";

import { ContainerForm, FooterContainer, Main, SubmitButton } from "./styles";

interface Users {
  email: string;
  password: string;
}

const loginValidationSchema = z.object({
  email: z
    .string()
    .email("Digite o e-mail corretamente!")
    .min(5, "Seu email deve ter pelo menos 5 caracteres"),
  password: z.string().min(5, "Senha deve ter pelo menos 5 caracteres"),
});

export function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [messageInvalid, setMessageInvalid] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

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
            setMessageInvalid(true);
          } else {
            setLoginSuccess(true);
            setTimeout(() => {
              navigate("/Sucess");
            }, 2000);
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
        {messageInvalid && (
          <p className="acessError">Suas Credenciais estão erradas!!!</p>
        )}
        {loginSuccess && <p className="loginSuccess">Login bem-sucedido!</p>}
        <form onSubmit={handleSubmit(handleLogin)}>
          <Input
            type="email"
            name="email"
            placeholder="contato@gmail.com"
            register={register}
            label="Seu e-mail"
          />
          {errors.email && <p className="textError">{errors.email.message}</p>}
          <Input
            type="password"
            name="password"
            placeholder="123"
            register={register}
            label="Sua senha"
          />
          {errors.password && (
            <p className="textError">{errors.password.message}</p>
          )}
          <SubmitButton>Logar</SubmitButton>
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
