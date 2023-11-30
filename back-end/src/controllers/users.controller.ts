import { Request, Response } from "express"
import { createUserService } from "../services/users.service";
import { User } from "../interfaces/users.interface";


export const createUserController = async (req: Request, res: Response): Promise<Response> => {
    const client: User = await createUserService(req.body)
  
    return res.status(200).json(client)
  }