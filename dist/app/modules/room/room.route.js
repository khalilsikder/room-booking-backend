"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomRoutes = void 0;
const express_1 = __importDefault(require("express"));
const room_controller_1 = require("./room.controller");
const router = express_1.default.Router();
router.post('/create-room', room_controller_1.roomController.createController);
router.get('/:roomId', room_controller_1.roomController.getSingleController);
router.get('/', room_controller_1.roomController.getAllController);
router.put('/:roomId', room_controller_1.roomController.updateSingleController);
router.delete('/:roomId', room_controller_1.roomController.deleteSingleController);
exports.roomRoutes = router;
