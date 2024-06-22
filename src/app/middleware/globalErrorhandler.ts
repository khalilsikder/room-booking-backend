import{ NextFunction, Request, Response } from "express";

const globalErrorhandler =
(err: any, req: Request, res: Response,next: NextFunction) => 
    {
   res.status(404).json({
    success:false,
    message:'something went wrong',
    err,
  })
    }

   export default globalErrorhandler; 