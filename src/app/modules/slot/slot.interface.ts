import { Types } from "mongoose";

export type Slot = {
    room:Types.ObjectId;
    date:Date;
    startTime:string;
    endTime:string;
    isBooked:boolean;
}