import { bookingService } from "./booking.service"
import catchAsync from "../../utiles/catchAsync"

const createController = catchAsync(async(req,res) =>{
    const {booking:bookingDATA} = req.body 
    const result = await bookingService.createBookingintoDB(bookingDATA)
    res.status(200).json({
        success:true,
        message:'booking is create successfull',
        data:result,
    })
  })

const getAllController = catchAsync(async(req,res) =>{
        const result = await bookingService.getAllBookingintoDB()
        res.status(200).json({
            success:true,
            message:'allbooking is get successfull',
            data:result,
        })
      })

export const  bookingController = {
  createController,getAllController
}