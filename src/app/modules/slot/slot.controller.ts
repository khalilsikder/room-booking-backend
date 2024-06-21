// import { Request, Response } from "express"
// import { slotServices } from "./slot.service"

// const createSlot = async(req:Request,res:Response) => {
//     try{
//         const {slot:slotData} = req.body;
//         const result = await slotServices.createSlotintoDB(slotData)
//         res.status(200).json({
//             success:true,
//             message:'room is crated',
//             data:result,
//         })
//     }catch(err){
//     console.log(err);
//     }
// }

// export const slotController = {
//     createSlot
// }