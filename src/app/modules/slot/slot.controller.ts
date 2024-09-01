/* eslint-disable @typescript-eslint/no-unused-vars */
import { RequestHandler } from "express"
import { slotServices } from "./slot.service"
import catchAsync from "../../utiles/catchAsync";

const createSlot= catchAsync(async(req,res) => {
        const {slot:slotData} = req.body;
        const result = await slotServices.createSlotintoDB(slotData)
        res.status(200).json({
            success:true,
            message:'room is crated',
            data:result,
        })
    })
const getSlot = catchAsync(async(req,res) => {
        const {slot:slotData} = req.body;
        const result = await slotServices.getSlotintoDB()
        res.status(200).json({
            success:true,
            message:'room is crated',
            data:result,
        })
    })

export const slotController = {
    createSlot,
    getSlot
}