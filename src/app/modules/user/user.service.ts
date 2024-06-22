
import config from "../../config";
import { TUser } from "./user.interface";
import { User} from "./user.model";


const createAdminintoDB = async (payload: TUser) => {
  const admin = await User.create(payload);
  return admin;
};
const updateUserintoDB = async (_id:string,payload:TUser) => {
const admin = await User.findByIdAndUpdate({_id},payload);
  return admin;
};

const accessToken = jwt.sign(jwtPayload,config.jwt_access_secret as string{
    expiresIn,
})
export const userServices = {
  createAdminintoDB,
  updateUserintoDB
};
