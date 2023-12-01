import { z } from "zod";

export const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45).min(3),
  email: z.string().max(60),
  password: z.string().max(255),
})

export const userCreateSchema = userSchema.omit({id: true})
