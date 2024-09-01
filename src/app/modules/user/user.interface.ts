import { USER_Role } from "./user.constants";

export type TUser = {
  name: string;
  email: string;
  password: string;
  phone: number;
  address: string;
  role: typeof USER_Role;
};


