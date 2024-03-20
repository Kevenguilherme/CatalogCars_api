import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod'

class EnsureMiddlewares {
 public validateBody = (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction): void => {      
   req.body = schema.parse(req.body)    
    return next()
  }
 }

 export const ensure = new EnsureMiddlewares()