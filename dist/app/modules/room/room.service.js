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
exports.roomServices = void 0;
const room_model_1 = require("./room.model");
// creat room
const createRoomintoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield room_model_1.roomModel.create(payload);
    return result;
});
// get a room
const getSingleRoomintoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield room_model_1.roomModel.findById(id);
    return result;
});
// get allroom
const getAllRoomintoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield room_model_1.roomModel.find();
    return result;
});
// update a room
const updateSingleRoomintoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield room_model_1.roomModel.findByIdAndUpdate();
    return result;
});
const deleteSingleRoomintoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield room_model_1.roomModel.findByIdAndDelete();
    return result;
});
exports.roomServices = {
    createRoomintoDB,
    getSingleRoomintoDB,
    getAllRoomintoDB,
    updateSingleRoomintoDB,
    deleteSingleRoomintoDB
};
