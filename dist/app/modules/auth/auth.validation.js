"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const zod_1 = require("zod");
const UserSignUPValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        email: zod_1.z.string({ required_error: 'email is required' }),
        password: zod_1.z.string({ required_error: 'password is required' }),
        phone: zod_1.z.number(),
        address: zod_1.z.string(),
        role: zod_1.z.string(),
    }),
});
const UserLoginValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({ required_error: 'email is required' }),
        password: zod_1.z.string({ required_error: 'password is required' })
    })
});
exports.AuthValidation = {
    UserSignUPValidationSchema, UserLoginValidationSchema
};
