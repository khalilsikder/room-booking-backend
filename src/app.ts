// import cookieParser from 'cookie-parser';
import express, { Application, Request, Response } from "express";
import cors from "cors";
import globalErrorhandler from "./app/middleware/globalErrorhandler";
import notFound from "./app/middleware/notFound";
import router from "./app/routes";

const app: Application = express();

// parseer
app.use(express.json());
// app.use(cookieParser())
app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));

// application route
app.use("/api/", router);

const test = (req: Request, res: Response) => {
  res.send("Hello World!");
};
app.get("/", test);
app.use(globalErrorhandler);

// not found
app.use(notFound);

export default app;
