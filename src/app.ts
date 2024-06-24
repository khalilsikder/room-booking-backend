import express, { Application, Request, Response } from "express";
import cors from "cors";
import globalErrorhandler from "./app/middleware/globalErrorhandler";
import notFound from "./app/middleware/notFound";
import { roomRoutes } from "./app/modules/room/room.route";
import { userRoutes } from "./app/modules/user/user.route";
import { slotRoutes } from "./app/modules/slot/slot.route";
const app: Application = express();

app.use(express.json());
app.use(cors());


app.use("/api/rooms", roomRoutes);
app.use("/api/users",userRoutes)
app.use("/api/slots",slotRoutes)

const getAcontroller = (req: Request, res: Response) => {
  res.send("Hello World!");
};
app.get("/", getAcontroller);
app.use(globalErrorhandler);
app.use(notFound);

export default app;
