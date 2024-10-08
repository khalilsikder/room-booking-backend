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
exports.bookingService = void 0;
const booking_model_1 = require("./booking.model");
const createBookingintoDB = (booking) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.bookingModel.create(booking);
    return result;
});
const getAllBookingintoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.bookingModel.find();
    return result;
});
const getSingleBookingintoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.bookingModel.findById(id);
    return result;
});
const updateSingleBookingintoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.bookingModel.findByIdAndUpdate(id);
    return result;
});
const deleteSingleRoomintoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.bookingModel.findByIdAndDelete(id);
    return result;
});
exports.bookingService = {
    createBookingintoDB,
    getAllBookingintoDB,
    getSingleBookingintoDB,
    updateSingleBookingintoDB,
    deleteSingleRoomintoDB
};
