import mongoose from 'mongoose';
import { TUserSignUp } from './auth.interface';

const UserSignupSchema = new mongoose.Schema<TUserSignUp>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type:String,
    required:true,
  },
  phone:{
    type:Number,
    required:true,
  },
  address:{
    type:String,
    required:true,
  },
  role:{
    type: String,
    required:true,
  }
});

export const UserSignUP = mongoose.model<TUserSignUp>(
  'UserSignUp',
  UserSignupSchema,
);
