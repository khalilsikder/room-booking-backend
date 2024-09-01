"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.slotRoutes = void 0;
const express_1 = __importDefault(require("express"));
const slot_controller_1 = require("./slot.controller");
const router = express_1.default.Router();
router.post('/create-slot', slot_controller_1.slotController.createSlot);
router.get('/', slot_controller_1.slotController.getSlot);
exports.slotRoutes = router;
