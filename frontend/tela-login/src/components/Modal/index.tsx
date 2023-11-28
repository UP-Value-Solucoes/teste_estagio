import { useForm } from "react-hook-form";
import { ContainerInput } from "../../pages/Home/styles";
import { ModalOverlay } from "./styles";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

interface RegisterUser {
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
  const {
    register,
    handleSubmit,
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
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    isOpen && (
      <ModalOverlay>
        <div className="modal">
          <form onSubmit={handleSubmit(handleRegister)}>
            <h2>Cadastre-se!!</h2>
            <ContainerInput>
              <label>Cadastre seu email:</label>
              <input
                type="email"
                placeholder="aaaa@gmail.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="textError">{errors.email.message}</p>
              )}
            </ContainerInput>
            <ContainerInput>
              <label>Digite sua senha:</label>
              <input
                type="password"
                placeholder="1234"
                {...register("password")}
              />
              {errors.password && (
                <p className="textError">{errors.password.message}</p>
              )}
            </ContainerInput>
            <ContainerInput>
              <label>Confirme sua senha:</label>
              <input
                type="password"
                placeholder="1234"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="textError">{errors.confirmPassword.message}</p>
              )}
            </ContainerInput>
            <button className="btn-close" onClick={closeModal}>
              Fechar
            </button>
            <button className="btn-register">Cadastrar</button>
          </form>
        </div>
      </ModalOverlay>
    )
  );
}
