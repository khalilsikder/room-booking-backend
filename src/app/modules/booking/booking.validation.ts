import { z } from "zod";

const roomValidationSchema  = z.object({
    body:z.object({
    name:z.string(),
    roomNo:z.number(),
    floorNo:z.number(),
    capacity:z.number(),
    pricePerSlot:z.number(),
    isDeleted:z.boolean(),
    })
})

export const roomValidation = {
    roomValidationSchema
}