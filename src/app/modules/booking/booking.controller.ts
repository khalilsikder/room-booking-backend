import { bookingService } from "./booking.service"
import catchAsync from "../../utiles/catchAsync"
import sendResponse from "../../utiles/sendResponse";
import httpStatus from "http-status";

const createController = catchAsync(async(req,res) =>{
    const result = await bookingService.createBookingintoDB(req.body)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'booking  is created succesfully',
      data: result,
    });
  })

const getAllController = catchAsync(async(req,res) =>{
        const result = await bookingService.getAllBookingintoDB(req.query)
        sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: 'booking  is getAll succesfully',
          data: result,
        });
      })

      const updateSingleController= catchAsync(async(req,res) =>{
        const {roomId} = req.params;
        const result = await bookingService.updateSingleBookingintoDB(roomId,req.body)
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'room is updated succesfully',
            data: result,
          });
    })

export const  bookingController = {
  createController,getAllController,updateSingleController
}