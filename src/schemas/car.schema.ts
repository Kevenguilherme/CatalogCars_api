import { z } from 'zod';

const carSchema = z.object({
 id: z.string().uuid(),
 name: z.string().min(1),
 description: z.string(),
 brand: z.string().min(1),
 year: z.number().positive(),
 km: z.number().positive()
})

const carCreateSchema = carSchema.omit({ id: true })
const carUpdateSchema = carCreateSchema.partial()

const carReturnSchema = carSchema

export {
 carCreateSchema, carReturnSchema, carSchema, carUpdateSchema
};

