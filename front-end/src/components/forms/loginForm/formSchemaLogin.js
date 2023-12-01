import { z } from "zod"

export const LoginFormSchema = z.object({
    email : z.string().min(1,"O email é obrigatório") ,
    password: z.string().min(1,"A senha é obrigatória")
})