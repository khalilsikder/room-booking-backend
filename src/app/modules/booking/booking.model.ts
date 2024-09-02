import { Schema, model } from "mongoose";
import { Booking } from "./booking.interface";
import { string } from "zod";

const bookingSchema = new Schema<Booking>({
room:[{
    type:Schema.Types.ObjectId,
    ref:'room_id',
    required:true,
}],
slots:[{
    type:Schema.Types.ObjectId,
    ref:'slots_id',
    required:true,
}],
user:[{
    type:Schema.Types.ObjectId,
    ref:'user_id',
    required:true,
}],
date:[{
    type:Date,
    required:true,
}],
totalAmount:[{
    type:Number,
    required:true,
}],
isConfirmed:{
    type:String,
    enum:['isConfirmed' , 'unConfirmed' , 'canceled'],
    required:true,
},
isDeleted:{
    type:Boolean,
    default:false
}
})

export const bookingModel = model('bookingModel',bookingSchema)