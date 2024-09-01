import express, { Application, Request, Response } from "express";
import cors from "cors";
import globalErrorhandler from "./app/middleware/globalErrorhandler";
import notFound from "./app/middleware/notFound";
import router from "./app/routes";

const app: Application = express();

app.use(express.json());
app.use(cors());


app.use("/api/", router);

const test = (req: Request, res: Response) => {
  res.send("Hello World!");
};
// app.post('/', (req:Request,res:Response) =>{
//   console.log(req.body);
//   res.send('got data')
// })
app.get("/", test);
app.use(globalErrorhandler);
app.use(notFound);

export default app;
