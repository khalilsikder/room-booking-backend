import express, { Application, Request, Response } from "express";
import cors from "cors";
// import globalErrorhandler from "./app/middleware/globalErrorhandler";
// import notFound from "./app/middleware/notFound";
import { roomRoutes } from "./app/modules/room/room.route";
const app: Application = express();

app.use(express.json());
app.use(cors());
const port = 3000
app.use("/api/rooms", roomRoutes);

const getAcontroller = (req: Request, res: Response) => {
  res.send("Hello World!");
};
app.get("/", getAcontroller);


// app.use(globalErrorhandler);
// app.use(notFound);

export default app;
