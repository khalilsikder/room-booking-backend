/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import{ ErrorRequestHandler } from "express";
import { number, ZodError, ZodIssue } from "zod";
import { TErrorSource } from "../interface/error";
import config from "../config";
import handleZodError from "../error/handleZodError";

const globalErrorhandler:ErrorRequestHandler =
(err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'something went wrong';
   
  
  let errorSources:TErrorSource = [
    {
    path: '',
    message:'something went wrong'
  }
];



 if (err instanceof ZodError){
 const simplefiedError = handleZodError(err)
 statusCode = simplefiedError?.statusCode
 message = simplefiedError?.message
 errorSources = simplefiedError?.errorSources
 }


  return  res.status(statusCode).json({
    success:false,
    message,
    errorSources,
    stack: config.NODE_ENV === 'development'? err?.stack : null,
  })
    }

   export default globalErrorhandler; 