"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomValidation = void 0;
const zod_1 = require("zod");
const roomValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        roomNo: zod_1.z.number(),
        floorNo: zod_1.z.number(),
        capacity: zod_1.z.number(),
        pricePerSlot: zod_1.z.number(),
        isDeleted: zod_1.z.boolean(),
    })
});
exports.roomValidation = {
    roomValidationSchema
};
