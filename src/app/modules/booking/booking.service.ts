import { Booking } from "./booking.interface";
import { bookingModel } from "./booking.model";

const createBookingintoDB = async(booking:Booking) => {
const result = await bookingModel.create(booking)
return result;
}
const getAllBookingintoDB = async() => {
const result = await bookingModel.find()
return result;
}
const getSingleBookingintoDB = async(id:string) => {
const result = await bookingModel.findById(id)
return result;
}
const updateSingleBookingintoDB = async(id:string) => {
const result = await bookingModel.findByIdAndUpdate(id)
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