import { QueryResult } from "pg"

export type User = {
    id: number,
	name: string,
	email: string
}

export type CreateUser = Omit<User, "id">

export type UserResult = QueryResult<User>