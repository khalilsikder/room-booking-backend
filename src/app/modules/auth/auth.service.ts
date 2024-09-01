/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { USER_Role } from "../user/user.constants";
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import { TLoginUser, TUserSignUp } from "./auth.interface";
import bcryptjs from 'bcryptjs'


const signUp = async(payload:TUserSignUp):Promise<any> =>{
    const user = await User.findOne({email:payload.email})
    if(user){
        throw new Error('user already exit')
    }
    payload.role = USER_Role.USER

    const newUser = await User.create(payload)
}

const login = async(payload:TLoginUser)=>{
    const user = User.findOne({email:payload.email}).select('+password')
    if(!user){
        throw new Error('user not found')
    }
}

const isPasswordMatch = async(plainPassword:string,hashedPassword:string):Promise<boolean> =>{
const isMatched = await bcryptjs.compare(plainPassword,hashedPassword)
return isMatched;
}
const passwordMatch = isPasswordMatch(payload.password,User.password)

if(!passwordMatch){
    throw new Error('password not match')
}

const jwtPayload = {
    email:User.email,
    role:User.role
}
export  const authServices = {
    signUp,login
}