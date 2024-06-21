import { Request, Response } from "express";
import { roomServices } from "./room.service";


// creat controller
const createController = async(req:Request,res:Response) =>
{
try{
    const {room:roomData} = req.body;
    const result = await roomServices.createRoomintoDB(roomData)
    res.status(200).json({
        success:true,
        message:'room is crated',
        data:result,
    })
}catch(err){
console.log(err);
}
}

// get a single controller
const getSingleController = async(req:Request,res:Response) =>
{
try{
    const {room:roomData} = req.body;
    const result = await roomServices.getSingleRoomintoDB(roomData)
    res.status(200).json({
        success:true,
        message:'single room is created is crated',
        data:result,
    })
}catch(err){
console.log(err);
}
}

// getAllController
const getAllController = async(req:Request,res:Response) =>
{
try{
    const {room:roomData} = req.body;
    const result = await roomServices.getAllRoomintoDB()
    res.status(200).json({
        success:true,
        message:'all room is crated',
        data:result,
    })
}catch(err){
console.log(err);
}
}

// updateSingle controller
const updateSingleController = async(req:Request,res:Response) =>
{
try{
    const {room:roomData} = req.body;
    const result = await roomServices.updateSingleRoomintoDB(roomData)
    res.status(200).json({
        success:true,
        message:'single room is updated',
        data:result,
    })
}catch(err){
console.log(err);
}
}

// delete single room
const deleteSingleController = async(req:Request,res:Response) =>
{
try{
    const {room:roomData} = req.body;
    const result = await roomServices.updateSingleRoomintoDB(roomData)
    res.status(200).json({
        success:true,
        message:'single room is updated',
        data:result,
    })
}catch(err){
console.log(err);
}
}

export const roomController = {
    createController,
    getSingleController,
    getAllController,
    updateSingleController,
    deleteSingleController
}