import { Router } from "express";
import { userRoutes } from "./user.router";

export const routes: Router = Router()

routes.use('/users', userRoutes)
