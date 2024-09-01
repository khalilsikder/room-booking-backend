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
exports.authServices = void 0;
const user_constants_1 = require("../user/user.constants");
const user_model_1 = require("../user/user.model");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const signUp = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOne({ email: payload.email });
    if (user) {
        throw new Error('user already exit');
    }
    payload.role = user_constants_1.USER_Role.USER;
    const newUser = yield user_model_1.User.create(payload);
});
const login = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = user_model_1.User.findOne({ email: payload.email }).select('+password');
    if (!user) {
        throw new Error('user not found');
    }
});
const isPasswordMatch = (plainPassword, hashedPassword) => __awaiter(void 0, void 0, void 0, function* () {
    const isMatched = yield bcryptjs_1.default.compare(plainPassword, hashedPassword);
    return isMatched;
});
const passwordMatch = isPasswordMatch(payload.password, user_model_1.User.password);
if (!passwordMatch) {
    throw new Error('password not match');
}
const jwtPayload = {
    email: user_model_1.User.email,
    role: user_model_1.User.role
};
exports.authServices = {
    signUp, login
};
