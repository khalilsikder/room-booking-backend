

// import { USER_Role } from "../user/user.constants";
// import { User } from "../user/user.interface";
// import { userModel } from "../user/user.model";
// import { TLoginUser } from "./auth.interface";

// const signUp = async(payload:User):Promise<any> =>{
//     const user = userModel.findOne({email:payload.email})
//     if(user){
//         throw new Error('user already exit')
//     }
//     payload.role = USER_Role.USER

//     const newUser = await userModel.create(payload)
// }

// const login = async(payload:TLoginUser)=>{
//     const user = userModel.findOne({email:payload.email})
//     if(!user){
//         throw new Error('user not found')
//     }
// }

// export  const UserServices = {
//     signUp,login
// }