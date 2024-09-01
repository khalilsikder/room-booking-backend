"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorhandler_1 = __importDefault(require("./app/middleware/globalErrorhandler"));
const notFound_1 = __importDefault(require("./app/middleware/notFound"));
const room_route_1 = require("./app/modules/room/room.route");
const user_route_1 = require("./app/modules/user/user.route");
const slot_route_1 = require("./app/modules/slot/slot.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/auth/signup", room_route_1.roomRoutes);
app.use("/api/auth/login", room_route_1.roomRoutes);
app.use("/api/create-room", room_route_1.roomRoutes);
app.use("/api/users", user_route_1.userRoutes);
app.use("/api/slots", slot_route_1.slotRoutes);
const getAcontroller = (req, res) => {
    res.send("Hello World!");
};
app.get("/", getAcontroller);
app.use(globalErrorhandler_1.default);
app.use(notFound_1.default);
exports.default = app;
