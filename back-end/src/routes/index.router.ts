import { Router } from "express";
import { userRoutes } from "./user.router";
import { sessionRouter } from "./session.router";

export const routes: Router = Router()

routes.use('/users', userRoutes)
routes.use('/login', sessionRouter)
