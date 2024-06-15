import { Request, Response } from "express"
import { userServices } from "./user.service"

const createUser = async(req:Request,res:Response) => {
   try{
    const {user:userData} = req.body 
    const result = await  userServices.createUserintoDB(userData)
    res.status(200).json({
        success:true,
        message:'user is create successfull',
        data:result,
    })
   }catch(err){
    console.log(err);
   }
}

export const  UserController = {
    createUser
}