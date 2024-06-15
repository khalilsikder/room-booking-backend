import { User } from "./user.interface";
import { userModel } from "./user.model";

const createUserintoDB = async (user: User) => {
  const result = await userModel.create(user);
  return result;
};

export const userServices = {
  createUserintoDB,
};
