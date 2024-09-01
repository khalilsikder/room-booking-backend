/* eslint-disable @typescript-eslint/no-unused-vars */
import catchAsync from "../../utiles/catchAsync";
import { roomServices } from "./room.service";


// creat controller
const createController = catchAsync(async(req,res) =>{
    const {room:roomData} = req.body;
    const result = await roomServices.createRoomintoDB(roomData)
    res.status(200).json({
        success:true,
        message:'room is crated',
        data:result,
    })
})

// get a single controller
const getSingleController =catchAsync(async(req,res) =>{
    const {room:roomData} = req.body;
    const result = await roomServices.getSingleRoomintoDB(roomData)
    res.status(200).json({
        success:true,
        message:'single room is created is crated',
        data:result,
    })
})

// getAllController
const getAllController = catchAsync(async(req,res) =>{
    const {room:roomData} = req.body;
    const result = await roomServices.getAllRoomintoDB()
    res.status(200).json({
        success:true,
        message:'all room is crated',
        data:result,
    })
})

// updateSingle controller
const updateSingleController= catchAsync(async(req,res) =>{
    const {room:roomData} = req.body;
    const result = await roomServices.updateSingleRoomintoDB(roomData)
    res.status(200).json({
        success:true,
        message:'single room is updated',
        data:result,
    })
})

// delete single room
const deleteSingleController = catchAsync(async(req,res) =>{
    const {room:roomData} = req.body;
    const result = await roomServices.updateSingleRoomintoDB(roomData)
    res.status(200).json({
        success:true,
        message:'single room is updated',
        data:result,
    })
})

export const roomController = {
    createController,
    getSingleController,
    getAllController,
    updateSingleController,
    deleteSingleController
}