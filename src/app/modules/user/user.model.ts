// import { Schema, model } from "mongoose";
// import { TUser} from "./user.interface";
// import { USER_Role } from "./user.constants";

// const userSchema = new Schema<TUser>({
//   name: {
//     type: String,
//     required: [true,'name is required']
//   },
//   email: {
//     type: String,
//     required: [true,'email is required'],
//     unique:true,
//   },
//   password: {
//     type: String,
//     required: [true,'password is required']
//   },
//   phone: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
//   role: {
//     type: String,
//     required: [true,'role is required'],
//     enum:Object.keys(USER_Role)
//   },
// });

// export const userModel = model<TUser>("userModle", userSchema);
