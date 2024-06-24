import { Schema, Types, model } from "mongoose";
import { Booking } from "./booking.interface";

const bookingSchema = new Schema<Booking>({
room:{
    type:Schema.Types.ObjectId,
    ref:'Room',
    required:true,
},
slots:[{
    type:Schema.Types.ObjectId,
    ref:'Slots',
    required:true,
}],
user:{
    type:Schema.Types.ObjectId,
    ref:'User',
    required:true,
},
date:{
    type:Date,
    required:true,
},
totalAmount:{
    type:Number,
    required:true,
},
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