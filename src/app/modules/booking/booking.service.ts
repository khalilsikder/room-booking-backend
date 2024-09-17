/* eslint-disable @typescript-eslint/no-unused-vars */

import { string } from "zod";
import { TBooking } from "./booking.interface";
import { bookingModel } from "./booking.model";

const createBookingintoDB = async(payload:TBooking) => {
const result = await bookingModel.create(payload)
return result;
}
const getAllBookingintoDB = async(query: unknown) => {
const result = await bookingModel.find()
return result;
}
const getSingleBookingintoDB = async(id:string) => {
const result = await bookingModel.findById(id)
return result;
}
const updateSingleBookingintoDB = async(id:string,payload:Partial<TBooking>) =>{
const result = await bookingModel.findOneAndUpdate({id:string},payload,{new:true})
return result;
}
const deleteSingleRoomintoDB = async(id:string) => {
const result = await bookingModel.findByIdAndDelete(id)
return result;
}

export const bookingService = {
    createBookingintoDB,
    getAllBookingintoDB,
    getSingleBookingintoDB,
    updateSingleBookingintoDB,
    deleteSingleRoomintoDB

}