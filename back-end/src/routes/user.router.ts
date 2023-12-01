import { Router } from "express";
import { createUserController } from "../controllers/users.controller";
import { verifyEmail } from "../middlewares/verifyEmail.middleware";

export const userRoutes: Router = Router()

userRoutes.post('/',verifyEmail, createUserController )
