import { Slot } from "./slot.interface";
import { slotModel } from "./slot.model";

const createSlotintoDB = async (slot:Slot) => {
const result = await slotModel.create(slot)
return result;
}
const getSlotintoDB = async () => {
const result = await slotModel.find()
return result;
}

export const slotServices = {
    createSlotintoDB,
    getSlotintoDB
}