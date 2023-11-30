import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z.string().min(1,"Por favor insira um Nome"),
    email: z
      .string()
      .min(1,"O e-mail é obrigatorio")
      .email("Forneçã um e-mail válido"),
    password: z
      .string()
      .min(1,"A senha é obrigatoria")
      .min(8, "Sua senha deve conter pelo menos 8 caracteres ")
      .regex(/[A-Z]+/, "É necessario conter pelo menos uma letra maiúscula")
      .regex(/[/a-z/]+/, "É necessario conter pelo menos uma letra minúscula")
      .regex(/[0-9]+/, "É necessario conter pelo menos um numero"),

    confirmPassword: z.string().min(1,"Confirme sua senha"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspodem",
    path: ["confirmPassword"],
  });