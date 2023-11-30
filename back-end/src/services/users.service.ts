import format from "pg-format";
import { client } from "../database";
import { CreateUser, User, UserResult } from "../interfaces/users.interface";


export const createUserService = async (data: CreateUser): Promise<User> => {
  const queryFormat: string = format(
    `INSERT INTO "users" (%I) VALUES (%L) RETURNING *`,
    Object.keys(data),
    Object.values(data)
  )

  const queryResult: UserResult = await client.query(queryFormat)

  return queryResult.rows[0]
}