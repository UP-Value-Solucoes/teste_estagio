import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { api } from "../../services";

import { Input } from "../Input";

import sucess from "../../assets/sucess.gif";
import { ModalOverlay } from "./styles";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export interface RegisterUser {
  email: string;
  password: string;
  confirmPassword: string;
}

const validationRegisterSchema = z
  .object({
    email: z.string().email("Esse email não está correto!"),
    password: z.string().min(4, "A senha deve ter 4 caracteres no minimo"),
    confirmPassword: z
      .string()
      .min(4, "A senha deve ter 4 caracteres no minimo"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não são iguais",
    path: ["confirmPassword"],
  });

export function Modal({ isOpen, closeModal }: ModalProps) {
  const [isRegistrationSuccessful, setRegistrationSuccessful] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterUser>({
    resolver: zodResolver(validationRegisterSchema),
  });

  function handleRegister(data: RegisterUser) {
    api
      .post("/users", {
        email: data.email,
        password: data.password,
      })
      .then(function () {
        setRegistrationSuccessful(true);

        setTimeout(() => {
          closeModal();
          setRegistrationSuccessful(false);
        }, 2500);

        reset();
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    isOpen && (
      <ModalOverlay>
        <div className="modal">
          {isRegistrationSuccessful ? (
            <>
              <img src={sucess} alt="" />
              <p className="sucessText">Cadastro feito com sucesso!</p>
            </>
          ) : (
            <form onSubmit={handleSubmit(handleRegister)}>
              <h2>Cadastre-se!!</h2>
              <Input
                type="email"
                name="email"
                placeholder="aaaa@gmail.com"
                register={register}
                label="Cadastre seu e-mail:"
              />
              {errors.email && (
                <p className="textError">{errors.email.message}</p>
              )}
              <Input
                type="password"
                name="password"
                placeholder="Digite sua senha"
                register={register}
                label="Digite sua senha:"
              />
              {errors.password && (
                <p className="textError">{errors.password.message}</p>
              )}
              <Input
                type="password"
                name="confirmPassword"
                placeholder="1234"
                register={register}
                label="Confirme sua senha:"
              />
              {errors.confirmPassword && (
                <p className="textError">{errors.confirmPassword.message}</p>
              )}
              <button className="btn-close" onClick={closeModal}>
                Fechar
              </button>
              <button className="btn-register">Cadastrar</button>
            </form>
          )}
        </div>
      </ModalOverlay>
    )
  );
}
