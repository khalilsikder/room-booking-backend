"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorhandler = (err, req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'something went wrong',
        err,
    });
};
exports.default = globalErrorhandler;
