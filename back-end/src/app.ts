import 'express-async-errors'
import express, {Application} from 'express'
import { routes } from './routes/index.router'
import { handleErrors } from './middlewares/handleError.middleware'
import cors from "cors" 
export const app: Application = express()
app.use(express.json())

app.use(cors())

app.use('/', routes)

app.use(handleErrors)