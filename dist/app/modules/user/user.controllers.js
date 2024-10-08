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
exports.userControllers = void 0;
const user_service_1 = require("./user.service");
const sendResponse_1 = __importDefault(require("../../utiles/sendResponse"));
const catchAsync_1 = __importDefault(require("../../utiles/catchAsync"));
const createAdmin = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user: userData } = req.body;
    const result = yield user_service_1.userServices.createAdminintoDB(userData);
    (0, sendResponse_1.default)(res, {
        statusCode: 404,
        success: true,
        message: 'user crerate successfull',
        data: result
    });
}));
const updateUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const result = yield user_service_1.userServices.updateUserintoDB(userId, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 404,
        success: true,
        message: 'user update successfull',
        data: result
    });
}));
exports.userControllers = {
    createAdmin,
    updateUser
};
