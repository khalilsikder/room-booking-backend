"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.slotController = void 0;
const slot_service_1 = require("./slot.service");
const catchAsync_1 = __importDefault(require("../../utiles/catchAsync"));
const createSlot = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { slot: slotData } = req.body;
    const result = yield slot_service_1.slotServices.createSlotintoDB(slotData);
    res.status(200).json({
        success: true,
        message: 'room is crated',
        data: result,
    });
}));
const getSlot = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { slot: slotData } = req.body;
    const result = yield slot_service_1.slotServices.getSlotintoDB();
    res.status(200).json({
        success: true,
        message: 'room is crated',
        data: result,
    });
}));
exports.slotController = {
    createSlot,
    getSlot
};
