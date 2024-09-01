import { z } from "zod";

const UserSignUPValidationSchema = z.object({
    body:z.object({
        name: z.string(),
        email:z.string({required_error:'email is required'}),
        password:z.string({required_error:'password is required'}),
        phone: z.number(),
        address:z.string(),
        role:z.string(),
    }),
});

const UserLoginValidationSchema = z.object({
    body:z.object({
        email:z.string({required_error:'email is required'}),
        password:z.string({required_error:'password is required'})
    })
})

export const AuthValidation = {
    UserSignUPValidationSchema,UserLoginValidationSchema
}