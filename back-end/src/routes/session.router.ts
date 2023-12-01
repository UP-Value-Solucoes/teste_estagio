import { Router } from "express";
import { loginController } from "../controllers/session.controller";
import { validateBody } from "../middlewares/validateBody.middleware";
import { sessionSchema } from "../schemas/session.schema";

export const sessionRouter: Router = Router()

sessionRouter.post('/login',validateBody(sessionSchema), loginController)