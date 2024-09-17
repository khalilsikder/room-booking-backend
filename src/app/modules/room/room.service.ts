/* eslint-disable @typescript-eslint/no-unused-vars */
import { TRoom } from './room.interface';
import { roomModel } from './room.model';

// creat room
const createRoomintoDB = async (payload: TRoom) => {
  const result = await roomModel.create(payload);
  return result;
};

// get a room
const getSingleRoomintoDB = async (id: string) => {
  const result = await roomModel.findOne({id});
  return result;
};

// get allroom
const getAllRoomintoDB = async (query: unknown) => {
  const result = await roomModel.find();
  return result;
};

// update a room
const updateSingleRoomintoDB = async (id: string, payload: Partial<TRoom>) => {
  const result = await roomModel.findOneAndUpdate({id},payload,{new:true},);
  return result;
};

// delete a single room
const deleteSingleRoomintoDB = async (id: string) => {
  const result = await roomModel.findByIdAndDelete();
  return result;
};

export const roomServices = {
  createRoomintoDB,
  getSingleRoomintoDB,
  getAllRoomintoDB,
  updateSingleRoomintoDB,
  deleteSingleRoomintoDB,
};
