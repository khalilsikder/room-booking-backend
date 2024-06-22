import { Schema, model } from "mongoose";
import { TUser} from "./user.interface";
import { USER_Role } from "./user.constants";
import brcyptjs from 'bcryptjs'
import config from "../../config";

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: [true,'name is required']
  },
  email: {
    type: String,
    required: [true,'email is required'],
    unique:true,
  },
  password: {
    type: String,
    required: [true,'password is required'],
    select:0,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: [true,'role is required'],
    enum:Object.keys(USER_Role)
  },
});

userSchema.pre('save',async function(next){
    const user = this;
    user.password = await brcyptjs.hash(user.password,Number(config.salt_round))

    next()
})
userSchema.post('save',async function(doc,next){
    doc.password = '';

    next()
})

export const User = model<TUser>("User", userSchema);
