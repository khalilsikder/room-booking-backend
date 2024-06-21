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
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomController = void 0;
const room_service_1 = require("./room.service");
// creat controller
const createController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { room: roomData } = req.body;
        const result = yield room_service_1.roomServices.createRoomintoDB(roomData);
        res.status(200).json({
            success: true,
            message: 'room is crated',
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
// get a single controller
const getSingleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { room: roomData } = req.body;
        const result = yield room_service_1.roomServices.getSingleRoomintoDB(roomData);
        res.status(200).json({
            success: true,
            message: 'single room is created is crated',
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
// getAllController
const getAllController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { room: roomData } = req.body;
        const result = yield room_service_1.roomServices.getAllRoomintoDB();
        res.status(200).json({
            success: true,
            message: 'all room is crated',
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
// updateSingle controller
const updateSingleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { room: roomData } = req.body;
        const result = yield room_service_1.roomServices.updateSingleRoomintoDB(roomData);
        res.status(200).json({
            success: true,
            message: 'single room is updated',
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
// delete single room
const deleteSingleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { room: roomData } = req.body;
        const result = yield room_service_1.roomServices.updateSingleRoomintoDB(roomData);
        res.status(200).json({
            success: true,
            message: 'single room is updated',
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.roomController = {
    createController,
    getSingleController,
    getAllController,
    updateSingleController,
    deleteSingleController
};
