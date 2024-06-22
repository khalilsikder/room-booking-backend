import { Request, Response } from "express"
import sendResponse from "../../utiles/sendResponse"
import catchAsync from "../../utiles/catchAsync"
import { authServices } from "./auth.service"

const signUp = catchAsync(async(req:Request,res:Response) => {
   try{
    const {user:userData} = req.body 
    const result = await  authServices.signUp(userData)
    sendResponse(res,{
  statusCode:404,
  success:true,
  message:'signUp crerate successfull',
  data:result
    })
   }catch(err){
    console.log(err);
   }
})

const login = catchAsync(async(req:Request,res:Response) => {
   try{
    const result = await  authServices.login(req.body)
    sendResponse(res,{
  statusCode:404,
  success:true,
  message:'login successfull',
  data:result
    })
   }catch(err){
    console.log(err);
   }
})

export const  authControllers = {
    signUp,login
}