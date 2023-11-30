import { Router } from "express";
import { userRoutes } from "./user.router";
import { verifyEmail } from "../middlewares/verifyEmail.middleware";

export const routes: Router = Router()

routes.use('/users',verifyEmail, userRoutes)
