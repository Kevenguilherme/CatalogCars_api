import { z } from 'zod';
import { carCreateSchema, carReturnSchema } from '../schemas/car.schema';

type UpdateCar = {
 name?: string ;
 description?: string ;
 brand?: string ;
 year?: number ;
 km?: number ;
}

type CreateCar = z.infer<typeof carCreateSchema>
type ReturnCar = z.infer<typeof carReturnSchema>
// type UpdateCar = z.infer<typeof carUpdateSchema>

export { CreateCar, ReturnCar, UpdateCar };

