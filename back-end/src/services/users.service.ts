import format from "pg-format";
import { client } from "../database";
import { User, UserResult, userCreate } from "../interfaces/users.interface";
import { hash } from "bcryptjs";


export const createUserService = async (data: userCreate): Promise<User> => {
  data.password = await hash(data.password,10)
  console.log(data.password)
  const queryFormat: string = format(
    `INSERT INTO "users" (%I) VALUES (%L) RETURNING *`,
    Object.keys(data),
    Object.values(data)
  )

  const queryResult: UserResult = await client.query(queryFormat)

  return queryResult.rows[0]
}