
import { USER_Role } from "../user/user.constants";
import { TUser } from "../user/user.interface";
import { userModel } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import bcryptjs from 'bcryptjs'


const signUp = async(payload:TUser):Promise<any> =>{
    const user = await userModel.findOne({email:payload.email})
    if(user){
        throw new Error('user already exit')
    }
    payload.role = USER_Role.USER

    const newUser = await userModel.create(payload)
}

const login = async(payload:TLoginUser)=>{
    const user = userModel.findOne({email:payload.email}).select('+password')
    if(!user){
        throw new Error('user not found')
    }
}

const isPasswordMatch = async(plainPassword:string,hashedPassword:string):Promise<boolean> =>{
const isMatched = await bcryptjs.compare(plainPassword,hashedPassword)
return isMatched;
}
const passwordMatch = isPasswordMatch(payload.password,user.password)

if(!passwordMatch){
    throw new Error('password not match')
}

const jwtPayload = {
    email:user.email,
    role:user.role
}
export  const authServices = {
    signUp,login
}