"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const config_1 = __importDefault(require("../config"));
const handleZodError_1 = __importDefault(require("../error/handleZodError"));
const globalErrorhandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || 'something went wrong';
    let errorSources = [
        {
            path: '',
            message: 'something went wrong'
        }
    ];
    if (err instanceof zod_1.ZodError) {
        const simplefiedError = (0, handleZodError_1.default)(err);
        statusCode = simplefiedError === null || simplefiedError === void 0 ? void 0 : simplefiedError.statusCode;
        message = simplefiedError === null || simplefiedError === void 0 ? void 0 : simplefiedError.message;
        errorSources = simplefiedError === null || simplefiedError === void 0 ? void 0 : simplefiedError.errorSources;
    }
    return res.status(statusCode).json({
        success: false,
        message,
        errorSources,
        stack: config_1.default.NODE_ENV === 'development' ? err === null || err === void 0 ? void 0 : err.stack : null,
    });
};
exports.default = globalErrorhandler;
