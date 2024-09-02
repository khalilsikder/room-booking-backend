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
exports.roomController = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const catchAsync_1 = __importDefault(require("../../utiles/catchAsync"));
const room_service_1 = require("./room.service");
// creat controller
const createController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { room: roomData } = req.body;
    const result = yield room_service_1.roomServices.createRoomintoDB(roomData);
    res.status(200).json({
        success: true,
        message: 'room is crated',
        data: result,
    });
}));
// get a single controller
const getSingleController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { room: roomData } = req.body;
    const result = yield room_service_1.roomServices.getSingleRoomintoDB(roomData);
    res.status(200).json({
        success: true,
        message: 'single room is created is crated',
        data: result,
    });
}));
// getAllController
const getAllController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { room: roomData } = req.body;
    const result = yield room_service_1.roomServices.getAllRoomintoDB();
    res.status(200).json({
        success: true,
        message: 'all room is crated',
        data: result,
    });
}));
// updateSingle controller
const updateSingleController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { room: roomData } = req.body;
    const result = yield room_service_1.roomServices.updateSingleRoomintoDB(roomData);
    res.status(200).json({
        success: true,
        message: 'single room is updated',
        data: result,
    });
}));
// delete single room
const deleteSingleController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { room: roomData } = req.body;
    const result = yield room_service_1.roomServices.updateSingleRoomintoDB(roomData);
    res.status(200).json({
        success: true,
        message: 'single room is updated',
        data: result,
    });
}));
exports.roomController = {
    createController,
    getSingleController,
    getAllController,
    updateSingleController,
    deleteSingleController
};
