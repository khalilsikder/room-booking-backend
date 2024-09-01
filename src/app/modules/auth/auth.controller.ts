import sendResponse from "../../utiles/sendResponse"
import catchAsync from "../../utiles/catchAsync"
import { authServices } from "./auth.service"

const signUp = catchAsync(async(req,res) => {
    const {user:userData} = req.body 
    const result = await  authServices.signUp(userData)
    sendResponse(res,{
  statusCode:404,
  success:true,
  message:'signUp crerate successfull',
  data:result
    })
})

const login = catchAsync(async(req,res) => {
    const result = await  authServices.login(req.body)
    sendResponse(res,{
  statusCode:404,
  success:true,
  message:'login successfull',
  data:result
    })
  })

export const  authControllers = {
    signUp,login
}