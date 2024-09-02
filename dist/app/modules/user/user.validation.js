"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const zod_1 = require("zod");
const user_constants_1 = require("./user.constants");
const createAdminValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        email: zod_1.z.string().email(),
        password: zod_1.z.string({ invalid_type_error: "Password must be a string" }),
        phone: zod_1.z.string(),
        address: zod_1.z.string(),
        role: zod_1.z.nativeEnum(user_constants_1.USER_Role).default(user_constants_1.USER_Role.ADMIN)
    })
});
const updateUserValidation = zod_1.z.object({
    name: zod_1.z.string(),
    // email:z.string().email(),
    password: zod_1.z.string({ invalid_type_error: "Password must be a string" }),
    phone: zod_1.z.string().optional(),
    address: zod_1.z.string().optional(),
    // role:z.nativeEnum(USER_Role).optional()
});
exports.userValidation = {
    createAdminValidation,
    updateUserValidation
};
