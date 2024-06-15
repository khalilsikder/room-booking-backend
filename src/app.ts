import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { userRoutes } from './app/modules/user/user.route'
const app:Application = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.use('/api/auth/signup',userRoutes)

const getAcontroller = (req:Request, res:Response) => {
  res.send('Hello World!')
}
app.get('/',getAcontroller )

export default app;
