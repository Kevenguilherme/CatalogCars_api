import { NextFunction, Request, Response } from 'express';
import { AppError } from '../errors/AppError';
import { ZodError } from 'zod';

class HandleErrorsMiddlewares {
 public static execute = (
  error: Error,
  _: Request,
  res: Response,
  __: NextFunction): Response => {
   if(error instanceof AppError) {
     return res.status(error.status).json({message: error.message})
    }

   if(error instanceof ZodError) {
     res.status(400).json({message: error.errors})
    }

    console.log(error)
      return res.status(400).json({message: 'Bad Request.'})
    }       
}

export const handleError = HandleErrorsMiddlewares.execute