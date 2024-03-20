import { z } from 'zod';
import { carCreateSchema, carReturnSchema, carUpdateSchema } from '../schemas/car.schema';


type createCar = z.infer<typeof carCreateSchema>
type returnCar = z.infer<typeof carReturnSchema>
type updateCar = z.infer<typeof carUpdateSchema>

export { createCar, returnCar, updateCar };
