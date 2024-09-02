"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingModel = void 0;
const mongoose_1 = require("mongoose");
const bookingSchema = new mongoose_1.Schema({
    room: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'room_id',
            required: true,
        }],
    slots: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'slots_id',
            required: true,
        }],
    user: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'user_id',
            required: true,
        }],
    date: [{
            type: Date,
            required: true,
        }],
    totalAmount: [{
            type: Number,
            required: true,
        }],
    isConfirmed: {
        type: String,
        enum: ['isConfirmed', 'unConfirmed', 'canceled'],
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});
exports.bookingModel = (0, mongoose_1.model)('bookingModel', bookingSchema);
