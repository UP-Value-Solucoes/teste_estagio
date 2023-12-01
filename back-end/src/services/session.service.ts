import { compare } from "bcryptjs";
import { client } from "../database";
import { SessionCreate } from "../interfaces/session.interface";
import { sign } from "jsonwebtoken";
import { User, UserResult } from "../interfaces/users.interface";
import AppError from "../errors/App.error";

export const loginService = async (
  data: SessionCreate
): Promise<{ token: string, user: User }> => {
  const queyrString: string = `
    SELECT * FROM "users" WHERE "email" = $1;
    `;

  const queryResult: UserResult = await client.query(queyrString, [data.email]);

  if (!queryResult.rowCount) {
    throw new AppError("Wrong email/password", 401);
  }
  const user: User = queryResult.rows[0];
  const passMatch = await compare(data.password, user.password);

  if (!passMatch) {
    throw new AppError("Wrong email/password", 401);
  }

  const token: string = sign({ email: user.email }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRES_IN!,
    subject: user.id.toString(),
  });
  return { user,token };
};
