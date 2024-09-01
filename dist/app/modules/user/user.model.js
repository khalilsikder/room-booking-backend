"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const user_constants_1 = require("./user.constants");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        select: 0,
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
        required: [true, 'role is required'],
        enum: Object.keys(user_constants_1.USER_Role)
    },
});
// userSchema.pre('save',async function(next){
//     const user = this;
//     user.password = await brcyptjs.hash(user.password,Number(config.salt_round))
//     next()
// })
// userSchema.post('save',async function(doc,next){
//     doc.password = '';
//     next()
// })
exports.User = (0, mongoose_1.model)("User", userSchema);
