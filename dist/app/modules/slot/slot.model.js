"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slotModel = void 0;
const mongoose_1 = require("mongoose");
const slotSchema = new mongoose_1.Schema({
    room: [{
            type: String,
            required: true,
        }],
    date: {
        type: Date,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true
    },
    isBooked: Boolean,
});
exports.slotModel = (0, mongoose_1.model)('slotModel', slotSchema);
