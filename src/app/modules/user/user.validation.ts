import { z } from "zod";
import { USER_Role } from "./user.constants";


const createAdminValidation = z.object({
body:z.object({
name:z.string(),
email:z.string().email(),
password:z.string({ invalid_type_error: "Password must be a string"}),
phone:z.string(),
address:z.string(),
role:z.nativeEnum(USER_Role).default(USER_Role.ADMIN)
})
})
const updateUserValidation = z.object({
name:z.string(),
// email:z.string().email(),
password:z.string({ invalid_type_error: "Password must be a string"}),
phone:z.string().optional(),
address:z.string().optional(),
// role:z.nativeEnum(USER_Role).optional()
})


export const userValidation = {
    createAdminValidation,
    updateUserValidation
}