/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from "http-status";
import catchAsync from "../../utiles/catchAsync";
import sendResponse from "../../utiles/sendResponse";
import { roomServices } from "./room.service";


// creat controller
const createController = catchAsync(async(req,res) =>{
    const result = await roomServices.createRoomintoDB(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Room  is created succesfully',
        data: result,
      });
})

// get a single controller
const getSingleController =catchAsync(async(req,res) =>{
   const {roomId} = req.params
    const result = await roomServices.getSingleRoomintoDB(roomId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'get a room succesfully',
        data: result,
      });
})

// getAllController
const getAllController = catchAsync(async(req,res) =>{
    const result = await roomServices.getAllRoomintoDB(req.query)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'rooms created succesfully',
        data: result,
      });
})

// updateSingle controller
const updateSingleController= catchAsync(async(req,res) =>{
    const {roomId} = req.params;
    const result = await roomServices.updateSingleRoomintoDB(roomId,req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'room is updated succesfully',
        data: result,
      });
})

// delete single room
const deleteSingleController = catchAsync(async(req,res) =>{
    const {roomId} = req.params;
    const result = await roomServices.deleteSingleRoomintoDB(roomId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'room is updated succesfully',
        data: result,
      });
})

export const roomController = {
    createController,
    getSingleController,
    getAllController,
    updateSingleController,
    deleteSingleController
}