import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';
import { prisma } from '../database/prisma';
import { AppError } from '../errors/AppError';

class EnsureMiddlewares {
 public validateBody = (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction): void => {      
   req.body = schema.parse(req.body)    
    return next()
  }


  public paramsCarIdExists = async (
    req: Request,
    res: Response,
    next: NextFunction
   ): Promise<void> => {
    const { carsId } = req.params
 
    const foundCar = await prisma.car.findFirst({
     where: { id: carsId } 
   })
 
   if(!foundCar) {
     throw new AppError('Car not found.', 404)
   }
       
   res.locals = { ...res.locals, foundCar }
     return next()
   }
 }

 export const ensure = new EnsureMiddlewares()