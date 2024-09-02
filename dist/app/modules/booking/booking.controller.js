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
exports.bookingController = void 0;
const booking_service_1 = require("./booking.service");
const catchAsync_1 = __importDefault(require("../../utiles/catchAsync"));
const createController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { booking: bookingDATA } = req.body;
    const result = yield booking_service_1.bookingService.createBookingintoDB(bookingDATA);
    res.status(200).json({
        success: true,
        message: 'booking is create successfull',
        data: result,
    });
}));
const getAllController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_service_1.bookingService.getAllBookingintoDB();
    res.status(200).json({
        success: true,
        message: 'allbooking is get successfull',
        data: result,
    });
}));
exports.bookingController = {
    createController, getAllController
};
