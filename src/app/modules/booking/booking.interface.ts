import { Types } from "mongoose";

export type Booking = {
    room:Types.ObjectId;
    slots:Types.ObjectId[];
    user:Types.ObjectId;
    date:Date;
    totalAmount:number;
    isConfirmed: 'isConfirmed' | 'unConfirmed' | 'canceled';
    isDeleted:boolean;
}