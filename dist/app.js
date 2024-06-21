"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import globalErrorhandler from "./app/middleware/globalErrorhandler";
// import notFound from "./app/middleware/notFound";
const room_route_1 = require("./app/modules/room/room.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const port = 3000;
app.use("/api/rooms", room_route_1.roomRoutes);
const getAcontroller = (req, res) => {
    res.send("Hello World!");
};
app.get("/", getAcontroller);
// app.use(globalErrorhandler);
// app.use(notFound);
exports.default = app;
