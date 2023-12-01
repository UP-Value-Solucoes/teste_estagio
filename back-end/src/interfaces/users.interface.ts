import { QueryResult } from "pg"
import { z } from 'zod'
import { userCreateSchema, userSchema } from "../schemas/user.schema"

export type User = z.infer<typeof userSchema> 

export type userCreate = z.infer<typeof userCreateSchema>  
export type UserResult = QueryResult<User>