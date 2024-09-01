import { userServices } from "./user.service"
import sendResponse from "../../utiles/sendResponse"
import catchAsync from "../../utiles/catchAsync"

const createAdmin= catchAsync(async(req,res) => {
    const {user:userData} = req.body 
    const result = await  userServices.createAdminintoDB(userData)
    sendResponse(res,{
  statusCode:404,
  success:true,
  message:'user crerate successfull',
  data:result
    })
})

const updateUser = catchAsync(async(req,res) => {
    const {userId} = req.params 
    const result = await  userServices.updateUserintoDB(userId,req.body)
    sendResponse(res,{
  statusCode:404,
  success:true,
  message:'user update successfull',
  data:result
    })
})

export const  userControllers = {
    createAdmin,
    updateUser
}