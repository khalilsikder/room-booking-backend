"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorhandler_1 = __importDefault(require("./app/middleware/globalErrorhandler"));
const notFound_1 = __importDefault(require("./app/middleware/notFound"));
const routes_1 = __importDefault(require("./app/routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/", routes_1.default);
const test = (req, res) => {
    res.send("Hello World!");
};
// app.post('/', (req:Request,res:Response) =>{
//   console.log(req.body);
//   res.send('got data')
// })
app.get("/", test);
app.use(globalErrorhandler_1.default);
app.use(notFound_1.default);
exports.default = app;
